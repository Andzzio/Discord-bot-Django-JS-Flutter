import 'package:flutter/material.dart';

class FieldWidget extends StatelessWidget {
  final String hintText;

  const FieldWidget({super.key, this.hintText = ""});

  @override
  Widget build(BuildContext context) {
    return TextField(
      style: TextStyle(color: Colors.white),
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
