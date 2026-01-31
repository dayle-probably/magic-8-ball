require('dotenv').config()

const { Client, GatewayIntentBits, Partials, ChannelType } = require('discord.js');

const client = new Client({
    partials: [Partials.Message, Partials.User, Partials.Channel, Partials.Reaction],
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        // DM intents
        GatewayIntentBits.DirectMessages,
    ],
});

const PREFIX = '!8';

const divinations = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes – definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don\'t count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
];

// return a random magic 8-ball fortune
const scry = () => {
    return divinations[Math.floor(Math.random() * divinations.length)];
};

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {

    // ignore messages sent by bots
    if (message.author.bot) {
        return;
    }

    // check if message starts with the command prefix
    if (message.content.startsWith(PREFIX)) {
        message.reply(`🎱 ${scry()} 🎱`);
        return;
    }

    // check for mention of bot
    if (message.mentions.has(client.user)) {
        message.reply(`🎱 ${scry()} 🎱`);
        return;
    }

    // read message.content here to ex

});

client.login(process.env.DISCORD_BOT_TOKEN);
