module.exports = (bot) => {
    const channelId = '803813885312237580' // welcome channel
    const targetChannelId = '810297306582614016' // rules and info

    bot.on('guildMemberAdd', (member) => {
        const message = `Hey <@${
        member.id
      }>\nWelcome to :crossed_swords:La PoGo Nostra:crossed_swords:!\nThe best place for raids and more!\nLet us know which raids you want and you'll get em!!\n\nMake sure to setup your PoGo profile in ${member.guild.channels.cache
        .get(targetChannelId)
        .toString()} before you start raiding.\n\n!set level *set in game level\n!set ign *put your in game username here\n!set team *put your PoGo team here\n!set tc *place your trainercode here`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}