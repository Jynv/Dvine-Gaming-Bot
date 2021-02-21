const Discord = require("discord.js");

module.exports = {
    name: "uptime",
    aliases: ["uptime"],
    category: "info",
    description: "Let you know the duration of how long the Bot is online!",
    run: async (client,message,args) => {
        let uptimeembed = new Discord.MessageEmbed()
    .setAuthor('Dvine Gaming')
    .setColor('#bebebe')
    .setDescription(`**${client.user.username}** is since ${duration(client.uptime)} online`)
    .setFooter("!help for Help!")

        function duration(ms) {
            const sec = Math.floor(ms / 1000 % 60).toString();
            const min = Math.floor(ms / (60*1000) % 60).toString();
            const hrs = Math.floor(ms / (60*60*1000) % 60).toString();
            const days = Math.floor(ms / (24*60*60*1000) % 60).toString();
            return `\`${days} Days\`, \`${hrs} Hours\`, \`${min} Minutes\`, \`${sec} Seconds\``
        }
        message.channel.send(uptimeembed);
    }
}