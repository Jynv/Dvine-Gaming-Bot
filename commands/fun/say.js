
module.exports = {
	name: "say",
	category: "fun",
  	description: "Resends your Message!",
	aliases: ["s"],
  run: async (client, message, args) => {
	message.delete();
	message.channel.send(args.join(" "))
	}
}