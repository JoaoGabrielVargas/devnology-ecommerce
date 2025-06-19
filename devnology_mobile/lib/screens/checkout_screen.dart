// screens/checkout_screen.dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/cart_provider.dart';

class CheckoutScreen extends StatefulWidget {
  const CheckoutScreen({super.key});

  @override
  State<CheckoutScreen> createState() => _CheckoutScreenState();
}

class _CheckoutScreenState extends State<CheckoutScreen> {
  final _formKey = GlobalKey<FormState>();
  final Map<String, String> _orderData = {
    'name': '',
    'email': '',
    'address': '',
  };

  void _submitOrder() {
    if (!_formKey.currentState!.validate()) return;
    
    _formKey.currentState!.save();
    
    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Pedido Confirmado!'),
        content: const Text('Obrigado por sua compra!'),
        actions: [
          TextButton(
            onPressed: () {
              Provider.of<CartProvider>(context, listen: false).clear();
              Navigator.of(context).pushReplacementNamed('/orders');
            },
            child: const Text('OK'),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final cart = Provider.of<CartProvider>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Finish purchase'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Form(
          key: _formKey,
          child: ListView(
            children: [
              TextFormField(
                decoration: const InputDecoration(labelText: 'Full name'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please, enter your name';
                  }
                  return null;
                },
                onSaved: (value) => _orderData['name'] = value!,
              ),
              TextFormField(
                decoration: const InputDecoration(labelText: 'E-mail'),
                keyboardType: TextInputType.emailAddress,
                validator: (value) {
                  if (value == null || value.isEmpty || !value.contains('@')) {
                    return 'Please enter a valid email';
                  }
                  return null;
                },
                onSaved: (value) => _orderData['email'] = value!,
              ),
              TextFormField(
                decoration: const InputDecoration(labelText: 'Address'),
                maxLines: 3,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please, enter your address';
                  }
                  return null;
                },
                onSaved: (value) => _orderData['address'] = value!,
              ),
              const SizedBox(height: 20),
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        'Order resume',
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const Divider(),
                      ...cart.items.map((item) => Padding(
                        padding: const EdgeInsets.symmetric(vertical: 4),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(item.product.name),
                            Text('R\$ ${item.product.price.toStringAsFixed(2)}'),
                          ],
                        ),
                      )),
                      const Divider(),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          const Text(
                            'Total:',
                            style: TextStyle(fontWeight: FontWeight.bold),
                          ),
                          Text(
                            'R\$ ${cart.totalAmount.toStringAsFixed(2)}',
                            style: const TextStyle(
                              fontWeight: FontWeight.bold,
                              color: Colors.indigo,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  minimumSize: const Size(double.infinity, 50),
                ),
                onPressed: _submitOrder,
                child: const Text('CONFIRM PURCHASE'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}