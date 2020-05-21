const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send("My Bot's message", {files: ["https://i.pinimg.com/originals/48/9e/93/489e93437a3209ae36a2583c7ce562ad.jpg"]});
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
