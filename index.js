const Discord = require('discord.js');

const bot = new Discord.Client();


const {
    token
} = require('./config.json');

const welcome = require('./data/welcome')

const {
    readdirSync,
    read
} = require('fs');

const {
    join
} = require('path');

bot.commands = new Discord.Collection();

const prefix = ';';

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    bot.commands.set(command.name, command);
}

bot.on("error", console.error);


//------------------------------------------------------------------------------
bot.on('ready', () => {
    console.log('Bot is Connected!');
    bot.user.setActivity('With JavaScript').catch(console.error)

    welcome(bot)
})
//------------------------------------------------------------------------------

bot.on("message", async message => {
    

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if (!bot.commands.has(command)) return;


        try {
            bot.commands.get(command).run(bot, message, args);
        } catch (error) {
            console.error(error);
        }
    }
})

bot.login(token);