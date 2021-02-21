const Discord = require("discord.js");

module.exports = {
    name: "about",
    aliases: ["about"],
    category: "info",
    description: "Let you now some facts about the Bot!",
    run: async (client,message,args) => {
    let sayembed = new Discord.MessageEmbed()
    .setColor('#bebebe')
    .setDescription("Offical Dvine Gaming made by Pearl-Bots™!")
    .setAuthor(message.author.tag , iconURL= message.author.displayAvatarURL())
    .setFooter("!help for Help!")
    message.channel.send(sayembed)
 }

}