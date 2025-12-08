const Discord = require("discord.js");
const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();
const token = process.env.DISCORD_TOKEN;


const client = new Discord.Client({
    intents : [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,     
    ],
});

client.on("ready", () => {
    console.log(`Encendido como ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.bot){
        return;
    } 
    if ((message.content.toLowerCase()) == 'ping'){
        message.reply('pong');
    }
}); 

client.on('messageCreate', message =>{
    if (message.author.bot){
        return;
    }
    if ((message.content.toLowerCase()) == "quieres sexo?"){
        message.reply("Soy timido 😶‍🌫️")
    }
});

client.on('messageCreate', message =>{
    if (message.author.bot){
        return;
    }
    if ((message.content.toLowerCase()) == "maulla es pepa?"){
        message.reply("Si es pepa,pero amedia")
    }
});

client.on('messageCreate', message => {
    if (message.author.bot){
        return;
    }
    if ((message.content.toLowerCase()) == "chino es feo?"){
        message.reply("Asumare todavia preguntas me da asco solo ver que hasta su nombre programaste en el vscode aggggg")
    }
});

client.on('messageCreate', message => {
    if (message.author.bot){
        return;
    }
    if ((message.content.toLowerCase()) == "porque hace frio?"){
        message.reply("Ni idea resale a diosito")
    }
});

client.on('messageCreate', message => {
    if (message.author.bot){
        return;
    }
    if ((message.content.toLowerCase()) == "porque huele el aire a pollo muerto?"){
        message.reply("Porque hueles a caca p ctmr")
    }
});

client.on('messageCreate', message => {
    if (message.author.bot){
        return;
    }
    if ((message.content.toLowerCase()) == "que dia es navidad?"){
        message.reply("Navidad es el dia 25 de diciembre")
    }
});

client.login(token);
