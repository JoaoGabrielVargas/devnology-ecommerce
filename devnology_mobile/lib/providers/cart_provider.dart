import 'package:flutter/material.dart';
import '../models/product.dart';

class CartItem {
  final Product product;
  final String cartId;

  CartItem({required this.product, required this.cartId});
}

class CartProvider with ChangeNotifier {
  final List<CartItem> _items = [];
  List<CartItem> get items => [..._items];

  double get totalAmount {
    return _items.fold(0, (sum, item) => sum + item.product.price);
  }

  int get itemCount => _items.length;

  void addItem(Product product) {
    _items.add(CartItem(product: product, cartId: DateTime.now().toString()));
    notifyListeners();
  }

  void removeItem(String cartId) {
    _items.removeWhere((item) => item.cartId == cartId);
    notifyListeners();
  }

  void clear() {
    _items.clear();
    notifyListeners();
  }
}
