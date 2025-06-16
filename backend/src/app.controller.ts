import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Order } from './order.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('products')
  async getProducts() {
    return this.appService.getCombinedProducts();
  }

  @Post('orders')
    async createOrder(@Body() orderData: Omit<Order, 'id' | 'createdAt'>) {
      return this.appService.createOrder(orderData);
    }

  getHello(): string {
    return this.appService.getHello();
  }
}
