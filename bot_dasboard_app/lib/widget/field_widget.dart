import 'package:flutter/material.dart';

class FieldWidget extends StatelessWidget {
  final String hintText;
  final TextEditingController? controller;
  final ValueChanged<String> onSubmitted;
  const FieldWidget({
    super.key,
    this.hintText = "",
    this.controller,
    required this.onSubmitted,
  });

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: controller,
      style: TextStyle(color: Colors.white),
      onSubmitted: onSubmitted,
      decoration: InputDecoration(
        hintText: hintText,
        hintStyle: TextStyle(color: Color(0xFFABAEB4)),
        contentPadding: EdgeInsets.all(20.0),
        fillColor: Color(0xFF44474C),
        filled: true,
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(20)),
      ),
    );
  }
}
