// models/product.dart
class Product {
  final String id;
  final String name;
  final String description;
  final double price;
  final String image;
  final String category;
  final String provider;

  Product({
    required this.id,
    required this.name,
    required this.description,
    required this.price,
    required this.image,
    required this.category,
    required this.provider,
  });

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      id: json['id'].toString(),
      name: json['name'].toString(),
      description: json['description'].toString(),
      price: _parsePrice(json['price']),
      image: json['image'].toString(),
      category: json['category'].toString(),
      provider: json['provider'].toString(),
    );
  }

  static double _parsePrice(dynamic price) {
    if (price is double) return price;
    if (price is int) return price.toDouble();
    if (price is String) {
      return double.tryParse(price.replaceAll(RegExp(r'[^0-9.]'), '')) ?? 0.0;
    }
    return 0.0;
  }
}