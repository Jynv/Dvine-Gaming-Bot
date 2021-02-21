  
const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "avatar",
	category: "fun",
	aliases: [""],
  description: "Sends the Avatar of the User",
  run: async (client, message, args) => {
		let user = message.mentions.users.first() || message.author;	
	let avatar = user.displayAvatarURL({dynamic: true});

	let avatarembed = new MessageEmbed()
	.setColor('#bebebe')
	.setAuthor('Divne Gaming')
	.setURL(avatar)
	.setImage(avatar)
	message.channel.send(avatarembed)
	}
}