const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "esay",
	category: "fun",
  description: "Resends the message in embed",
  run: async (client, message, args) => {
    args.slice(0).join(" ");
    message.delete()
    
    let sayembed = new MessageEmbed()
    .setColor('#bebebe')
    .setAuthor('Dvine Gaming')
    .setDescription(args.slice(0).join(" "))
    .setThumbnail('')
    message.channel.send(sayembed)

    
	}
}