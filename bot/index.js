const Discord = require("discord.js");
const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config({ path: '../.env' });
const token = process.env.DISCORD_TOKEN;

const prefix = "!";

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
    if (message.author.bot) {
        return;
    } 
    
    const content = message.content.toLowerCase();

    if (content.startsWith(prefix)) {
        const command = content.slice(prefix.length).trim();

        if (command === 'ping') {
            message.reply('pong');
        } else if (command === 'quieres sexo?') {
            message.reply("Soy timido 😶‍🌫️");
        } else if (command === 'hola') {
            message.reply("Hola, ¿en qué puedo ayudarte?");
        } else if (command === 'maulla es pepa?') {
            message.reply("Si es pepa, pero a media");
        } else if (command === 'chino es feo?') {
            message.reply("Asumare todavia preguntas me da asco solo ver que hasta su nombre programaste en el vscode aggggg");
        } else if (command === 'porque hace frio?') {
            message.reply("Ni idea resale a diosito y métele pinga a the game");
        } else if (command === 'porque huele el aire a pollo muerto?') {
            message.reply("Porque hueles a caca p ctmr");
        } else if (command === 'que dia es navidad?') {
            message.reply("Navidad es el dia 25 de diciembre");
        } else if (command === 'porque maulla ya no te habla?') {
            message.reply("Porque me odia 😭");
        } else if (command ===  'sabes que es dotenv?') {
            message.reply("Ni idea, pero me da asco");
        } else if (command === 'ante todo muy buenas noches') {
            message.reply("Primero la educacion araraara nya ay papi siiiii 💋");
        } else if (command === 'peneseñal') {
            message.channel.send({
                content: "@everyone PENEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
                files : ["https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjc1cTdlYnkxYndudXpucTZnbnYwY3piaTI5bTl3ZTN6c3dqOWR5dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8YzUAmC06M4A7HaBQg/giphy.gif"]
            })
        } else if (command === 'me mide'){
            const min = 0;
            const max = 30;
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            if (random === 0){
                message.reply(`Mi estimado ${message.author.username} tiene pene?`)
            } if (random > 0 && random < 10){
                message.reply(`A ${message.author.username} le mide ${random} cm, rico?`)
            } if (random >= 10 && random < 30){
                message.reply(`A ${message.author.username} le mide ${random} cm 🫢`)
            } if (random === 30){
                message.reply(`A ${message.author.username} le mide ${random} cm, joder 😭`)
            }
        }
    }
});

client.login(token);
