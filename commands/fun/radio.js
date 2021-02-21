const Discord = require("discord.js");

module.exports = {
        name: "radio",
        category: "fun",
        description: "Let starts the Radio!",
    run: async (client,message,args) => {

        let embed = new Discord.MessageEmbed()
    .setAuthor('Divne Gaming')
    .setColor('#bebebe')
    .setDescription(`You are not connected to a Voicechannel!`)
    .setFooter("!help for Help!")

    

let Voicechannel = message.member.voice.channel
        if(!Voicechannel)return message.react('📻').then(message.channel.send(radioembed));
    Voicechannel.join().then(connection=>{
    connection.play('https://streams.ilovemusic.de/iloveradio6.mp3')
    message.react('📻')
    })
    console.log(`Radio is now activatet!`)
}
}