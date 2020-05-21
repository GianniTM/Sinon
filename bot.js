const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Quote') {
    	message.channel.send({files: ["https://i.pinimg.com/originals/48/9e/93/489e93437a3209ae36a2583c7ce562ad.jpg"]});
  	}
    else if (message.content === 'quote'){
        message.channel.send({files: ["https://i.pinimg.com/originals/b1/66/e8/b166e84e5f01e9ec56bc0f61a8ea940c.jpg"]});
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
