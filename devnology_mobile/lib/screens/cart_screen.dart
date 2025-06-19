import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/cart_provider.dart';

class CartScreen extends StatelessWidget {
  const CartScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final cart = Provider.of<CartProvider>(context);

    return Scaffold(
      appBar: AppBar(title: const Text('Your cart')),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              itemCount: cart.items.length,
              itemBuilder: (ctx, index) {
                final item = cart.items[index];
                return Dismissible(
                  key: ValueKey(item.cartId),
                  background: Container(
                    color: Colors.red,
                    alignment: Alignment.centerRight,
                    padding: const EdgeInsets.only(right: 20),
                    child: const Icon(Icons.delete, color: Colors.white),
                  ),
                  direction: DismissDirection.endToStart,
                  onDismissed: (_) {
                    cart.removeItem(item.cartId);
                  },
                  child: Card(
                    margin: const EdgeInsets.symmetric(
                      horizontal: 8,
                      vertical: 4,
                    ),
                    child: ListTile(
                      leading: Image.network(
                        item.product.image,
                        width: 50,
                        height: 50,
                        fit: BoxFit.cover,
                        errorBuilder: (ctx, error, stackTrace) =>
                            const Icon(Icons.image),
                      ),
                      title: Text(item.product.name),
                      subtitle: Text(
                        'R\$ ${item.product.price.toStringAsFixed(2)}',
                      ),
                      trailing: IconButton(
                        onPressed: () => cart.removeItem(item.cartId),
                        icon: const Icon(Icons.remove_circle_outline),
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
          Card(
            margin: EdgeInsets.zero,
            elevation: 4,
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text('Total:', style: Theme.of(context).textTheme.titleLarge),
                  Text(
                    'R\$ ${cart.totalAmount.toStringAsFixed(2)},',
                    style: Theme.of(context).textTheme.titleLarge?.copyWith(
                      color: Colors.indigo,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: ElevatedButton(
              style: ElevatedButton.styleFrom(
                minimumSize: const Size(double.infinity, 50),
              ),
              onPressed: () {
                Navigator.pushNamed(context, '/checkout');
              },
              child: const Text('Finish order'),
            ),
          ),
        ],
      ),
    );
  }
}
