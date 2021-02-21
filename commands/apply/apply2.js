const { MessageEmbed } = require('discord.js')
module.exports = {
    name : "valo-apply",
    category: "support",
    description: "Opens a new Application",
    category: "apply",
    run: async (client, message, args) => {
       const channel = '812432955846557746'
    var antworten = [];
    var fragen = [
        
"What’s your name? ",
"How old are you? ",
"For which team you want to apply? ",
"Whats your current rank in Valorant? ",
"Your Riot Games name + ID:  ",
"Do you want to add something we should know? ",
"Do you read the conditions carefully?",
    ]
    /**
     * [] === ["asdasd","213124","purple"] //array[0] --> asdasd  | array[1] --> 213124  | array[2] --> purple
     */

    const stembed = new MessageEmbed()
    .setColor('#bebebe')
    .setTitle('1. Frage')
    .setThumbnail(message.member.user.displayAvatarURL({dynamic: true}))
    .setDescription("What’s your name?")

    const ndembed = new MessageEmbed()
    .setColor('#bebebe')
    .setTitle('2. Frage')
    .setThumbnail(message.member.user.displayAvatarURL({dynamic: true}))
    .setDescription("How old are you?")

    const rdembed = new MessageEmbed()
    .setColor('#bebebe')
    .setTitle('3. Frage')
    .setThumbnail(message.member.user.displayAvatarURL({dynamic: true}))
    .setDescription("For which team you want to apply?")

    const thembed = new MessageEmbed()
    .setColor('#bebebe')
    .setTitle('4. Frage')
    .setThumbnail(message.member.user.displayAvatarURL({dynamic: true}))
    .setDescription("Whats your current rank in Valorant?")

    const fdembed = new MessageEmbed()
    .setColor('#bebebe')
    .setTitle('5. Frage')
    .setThumbnail(message.member.user.displayAvatarURL({dynamic: true}))
    .setDescription("Your Riot Games name + ID: ")

    const sdembed = new MessageEmbed()
    .setColor('#bebebe')
    .setTitle('6. Frage')
    .setThumbnail(message.member.user.displayAvatarURL({dynamic: true}))
    .setDescription("Do you want to add something we should know? ")

    const trembed = new MessageEmbed()
    .setColor('#bebebe')
    .setTitle('7. Frage')
    .setThumbnail(message.member.user.displayAvatarURL({dynamic: true}))
    .setDescription("Do you read the conditions carefully?")


    var counter = 0;
 message.author.send(stembed).then(msg => {
    msg.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 120*1000, errors: ['time'] })
    .then(collected => {
        antworten.push(collected.first().content);
        counter++;
        message.author.send(ndembed).then(msg => {
            msg.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 120*1000, errors: ['time'] })
            .then(collected => {
                antworten.push(collected.first().content);
                counter++;
                message.author.send(rdembed).then(msg => {
                    msg.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 120*1000, errors: ['time'] })
                    .then(collected => {
                        antworten.push(collected.first().content);
                        counter++;
                        message.author.send(thembed).then(msg => {
                            msg.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 120*1000, errors: ['time'] })
                            .then(collected => {
                                antworten.push(collected.first().content);
                                counter++;
                            message.author.send(fdembed).then(msg => {
                            msg.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 120*1000, errors: ['time'] })
                            .then(collected => {
                                antworten.push(collected.first().content);
                                counter++;
                            message.author.send(sdembed).then(msg => {
                            msg.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 120*1000, errors: ['time'] })
                            .then(collected => {
                                antworten.push(collected.first().content);
                                counter++;
                                        message.author.send(trembed).then(msg => {
                                            msg.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 120*1000, errors: ['time'] })
                                            .then(collected => {
                                                antworten.push(collected.first().content);
                                                counter++;
                                                ende_apply();
                                        })
                                        .catch(collected => {
                                            msg.channel.send('Looks like nobody got the answer this time.');
                                            });
                                        })
                                    })
                                    .catch(collected => {
                                msg.channel.send('Looks like nobody got the answer this time.');
                                 });
                                })
                            })
                                .catch(collected => {
                                msg.channel.send('Looks like nobody got the answer this time.');
                                });
                            })
                        })
                            .catch(collected => {
                                msg.channel.send('Looks like nobody got the answer this time.');
                            });
                         })
                    })
                    .catch(collected => {
                        msg.channel.send('Looks like nobody got the answer this time.');
                    });
                 })
            })
            .catch(collected => {
                msg.channel.send('Looks like nobody got the answer this time.');
            });
         })
    })
    .catch(collected => {
        msg.channel.send('Looks like nobody got the answer this time.');
    });
 })
 function ende_apply(){
    const embed = new MessageEmbed()
    .setColor('#bebebe')
    .setTitle(`${message.author.tag} hat sich beworben!`)
    .setTimestamp()
    .setThumbnail(message.member.user.displayAvatarURL({dynamic: true}))
    .setDescription(`${message.author}`)
    for(let i = 0; i < antworten.length; i++){
    embed.addField(fragen[i], "> " + antworten[i]);
    }
    
    message.guild.channels.cache.get("812271436118229003").send(embed)
} 
}
}
