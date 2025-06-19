// screens/orders_screen.dart
import 'package:flutter/material.dart';

class Order {
  final String id;
  final double total;
  final List<Map<String, dynamic>> products;
  final DateTime date;

  Order({
    required this.id,
    required this.total,
    required this.products,
    required this.date,
  });
}

class OrdersScreen extends StatelessWidget {
  OrdersScreen({super.key});

  // Mock data - substitua por chamada à API
  final List<Order> orders = [
    Order(
      id: '1',
      total: 99.99,
      date: DateTime(2023, 5, 15),
      products: [
        {'name': 'Product 1', 'price': 49.99},
        {'name': 'Product 2', 'price': 50.00},
      ],
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('My orders')),
      body: ListView.builder(
        itemCount: orders.length,
        itemBuilder: (ctx, index) {
          final order = orders[index];
          return Card(
            margin: const EdgeInsets.all(8),
            child: ExpansionTile(
              title: Text('Order #${order.id}'),
              subtitle: Text('Total: R\$ ${order.total.toStringAsFixed(2)}'),
              children: [
                Padding(
                  padding: const EdgeInsets.all(16),
                  child: Column(
                    children: [
                      ...order.products.map(
                        (product) => ListTile(
                          title: Text(product['name']),
                          trailing: Text(
                            'R\$ ${product['price'].toStringAsFixed(2)}',
                          ),
                        ),
                      ),
                      const Divider(),
                      Text(
                        'Date: ${order.date.day}/${order.date.month}/${order.date.year}',
                        style: const TextStyle(color: Colors.grey),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
