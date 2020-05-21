const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '/Q') {
    	message.channel.send({files: ["Images/sinon1.jpg"]});
  	}
    else if (message.content === '/q'){
        message.channel.send({files: ["https://i.pinimg.com/originals/b1/66/e8/b166e84e5f01e9ec56bc0f61a8ea940c.jpg"]});
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
