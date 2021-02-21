const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "clear",
    category: "admin",
    description: "Clears Messages!",
    run: async (client, message, args) => {

        let nopermsembed = new MessageEmbed()
    .setColor('#bebebe')
    .setAuthor('Dvine Gaming')
    .setDescription("You don`t have the permission to use this command!")
    .setThumbnail('')

    let nonumberembed = new MessageEmbed()
    .setColor('#bebebe')
    .setAuthor('Dvine Gaming')
    .setDescription("Number is missing!")
    .setThumbnail('')

    
       

        if (message.deletable) {
            message.delete();
        }

        // Member doesn't have permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return  message.channel.send(nopermsembed)
            .then(m => m.delete[5000])
        }

        // Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            message.channel.send(nonumberembed)
            .then(m => m.delete[5000]);
        }


        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`I deleted **${deleted.size}** messages.`))
        }
}