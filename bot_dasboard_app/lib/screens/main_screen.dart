import 'package:bot_dasboard_app/widget/field_widget.dart';
import 'package:flutter/material.dart';

class MainScreen extends StatefulWidget {
  const MainScreen({super.key});

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  final TextEditingController messageController = TextEditingController();
  final TextEditingController channelController = TextEditingController();
  final TextEditingController tokenController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Color(0xFF38393C),
        toolbarHeight: 80,
        actions: [
          Center(
            child: Container(
              margin: EdgeInsets.only(right: 30),
              width: 400,
              child: FieldWidget(
                controller: tokenController,
                hintText: "Token API",
                onSubmitted: (value) {},
              ),
            ),
          ),
        ],
        title: Text(
          "DISCORD BOT CONTROLLER",
          style: TextStyle(color: Colors.white, fontSize: 30),
        ),
      ),
      backgroundColor: Color(0XFF44474C),
      body: Align(
        alignment: Alignment.centerLeft,
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            color: Color(0xFF38393C),
          ),
          margin: EdgeInsets.all(20),
          width: screenSize.width * 0.45,
          child: Container(
            margin: EdgeInsets.all(20),
            child: Column(
              children: [
                Row(
                  children: [
                    Expanded(
                      child: FieldWidget(
                        controller: messageController,
                        hintText: "Write your Message",
                        onSubmitted: (value) {
                          messageController.clear();
                        },
                      ),
                    ),
                    SizedBox(width: 20),
                    IconButton(
                      onPressed: () {
                        messageController.clear();
                      },
                      icon: Icon(Icons.send_rounded),
                      color: Color(0xFF44474C),
                      hoverColor: Color.fromARGB(255, 107, 112, 119),
                      iconSize: 50,
                    ),
                  ],
                ),
                Spacer(),
                FieldWidget(
                  controller: channelController,
                  hintText: "Channel ID",
                  onSubmitted: (value) {},
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
