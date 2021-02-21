const Discord = require("discord.js");


module.exports = {
    name: "ping",
	aliases: ["latency", "p"],
    category: "info",
    description: "Let you know latency of the Bot!",
    run: async (client, message, args) => {

    let pingembed = new Discord.MessageEmbed()
    .setColor('#bebebe')
    .setDescription(` :ping_pong: Pong! \n 
    My latency is !${Math.round(client.ws.ping)}ms`)
    .setAuthor(message.author.tag , iconURL= message.author.displayAvatarURL())
    .setFooter("!help for Help!")
    message.channel.send(pingembed)
    }
}