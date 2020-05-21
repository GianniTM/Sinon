const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	const attachement = new attachement('https://i.pinimg.com/originals/48/9e/93/489e93437a3209ae36a2583c7ce562ad.jpg');
        message.reply(attachement);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
