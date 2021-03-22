const Discord = require('discord.js')

module.exports = {
    name: "kick",
    description: "kick command",

    async run (bot, message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have permission to use this command!!")

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); //.kick <args(0) aka @member> | <args(1) aka reason>
        if (!reason) reason = "No reason given";

        const kickembed = new Discord.MessageEmbed()
        .setTitle(`You were kicked from **${message.guild.name}**`)
        .setDescription(`Reason: ${reason}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())

        if (!args[0]) return message.channel.send("You need to specify a user to kick");

        if(!mentionMember) return message.channel.send("This user is not a valid user / is no-longer in the server!");

        if(!mentionMember.kickable) return message.channel.send("I was unable to kick this user!");


        try {
            await mentionMember.send(kickembed);
        } catch (err) {

        }

        try {
            await mentionMember.kick(reason);
        } catch (err) {
            return message.channel.send("I was unabe to kick this user! Sorry...")
        }
    }
}



//<@&816717341479927828>




// execute(message, args) {
    //         const member = message.mentions.users.first();
    //         if (message.member.roles.cache.has('816717341479927828') && (message.member.hasPermission('816717341479927828'))) {
    //             const memberTarget = message.guild.members.cache.get(member.id);
    //             memberTarget.kick();
    //             message.channel.send('User has been kicked'); 
    //         } else {
    //             message.channel.send('You do not have the permission to run this command, or you did not specify a user.');
    //         }
    //     }
    
    // };