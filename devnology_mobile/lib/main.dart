import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'providers/cart_provider.dart';

import 'screens/home_screen.dart';
import 'screens/cart_screen.dart';
import 'screens/checkout_screen.dart';
import 'screens/orders_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [ChangeNotifierProvider(create: (_) => CartProvider())],
      child: MaterialApp(
        title: 'Devnology Shop',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          primarySwatch: Colors.indigo,
          scaffoldBackgroundColor: Colors.grey[50],
          appBarTheme: AppBarTheme(
            elevation: 0,
            backgroundColor: Colors.indigo[700],
            titleTextStyle: const TextStyle(
              color: Colors.white,
              fontSize: 20,
              fontWeight: FontWeight.bold,
            ),
            iconTheme: const IconThemeData(color: Colors.white),
          ),
        ),
        routes: {
          '/': (context) => const HomeScreen(),
          '/cart': (context) => const CartScreen(),
          '/checkout': (context) => const CheckoutScreen(),
          '/orders': (context) => OrdersScreen(),
        },
      ),
    );
  }
}
