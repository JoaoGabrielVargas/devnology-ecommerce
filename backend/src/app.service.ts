import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';


@Injectable()
export class AppService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(Order)
    private orderRepository: Repository<Order>
  ) { }

  private providers = [
    {
      name: 'brazilian',
      url: 'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider'
    },
    {
      name: 'european',
      url: 'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider'
    }
  ]

  async getCombinedProducts() {
    try {
      const requests = this.providers.map((provider) =>
        firstValueFrom(this.httpService.get(provider.url))
          .then((response) => response.data.map((product: any) => this.mapProduct(product, provider.name)
          ))
          .catch((error) => {
            console.error(`Error fetching ${provider.name} products`, error)
          })
      );
      const results = await Promise.all(requests);
      return results.flat();
    } catch (error) {
      throw new Error('Failed to fetch products');
    }
  }

  private mapProduct(product: any, provider: string) {
    return provider === 'brazilian'
      ? {
        id: `BR-${product.id}`,
        name: product.nome,
        description: product.descricao,
        price: product.preco,
        category: product.departamento,
        image: product.imagem,
        provider,
      }
      : {
        id: `EU-${product.id}`,
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        image: product.gallery[0],
        provider,
      }
  }

  async createOrder(orderData: Partial<Order>): Promise<Order> {
    const order = this.orderRepository.create(orderData);
    return this.orderRepository.save(order);
  }

  async findAll() {
    return this.orderRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
