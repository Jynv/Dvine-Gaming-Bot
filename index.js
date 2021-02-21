const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({
  disableEveryone: true
  , partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

client.on("ready", ()=>console.log("READY"));

const jointocreate = require("./jointocreate");
jointocreate(client);



const fs = require("fs");
const { Client, Collection, DiscordAPIError } = require("discord.js");
const { id } = require("common-tags");

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on('ready', () => {
    console.log(`Der Bot ${client.user.tag} ist jetzt online!`);
    function randomStatus() {
       let status = ["!help for help", "#WeAreDvine", "Join now!", "Made by Pearl Bots™"]
       let rstatus = Math.floor(Math.random() * status.length);
      client.user.setActivity(status[rstatus],{type: "PLAYING"});
      };  setInterval(randomStatus, 30000)

   console.log('RichPresens is now activated!')
   })

   client.on("guildMemberAdd", member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '812026255128920117');
    if (!channel) return;
    let welcomeembed = new Discord.MessageEmbed()
    .setColor('#bebebe')
    .setDescription(`Welcome <@${member.id}> to Dvine Gaming!`)
    .setAuthor("Welcome to the Server!")
    .setFooter("!help for Help!")
    channel.send(welcomeembed);
  });

  client.on("guildMemberRemove", member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '812276203716214835');
    if (!channel) return;
    let leaveembed = new Discord.MessageEmbed()
    .setColor('#bebebe')
    .setDescription(`Bye <@${member.id}>!`)
    .setAuthor("Welcome to the Server!")
    .setFooter("!help for Help!")
    channel.send(leaveembed);
  });
  

  

 

   
client.on("message", async message => {
    const prefix = (config.prefix);
    if (message.author.bot) return;
    if (!message.guild) return;

    if (!message.content.startsWith(prefix)) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

   
    if (command) 
        command.run(client, message, args);

        const jointocreate = require("./jointocreate");
        jointocreate(client);
    
});

client.login(config.token);