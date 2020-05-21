const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
     client.user.setStatus('available')
     client.user.setPresence({
        game: {
            name: 'With Asada',
            type: "STREAMING",
            url: "https://www.twitch.tv/xealiusrl"
        }
    });
});

client.on('message', message => {
    if (message.content === '/Q') 
    {
    	message.channel.send({files: ["Images/sinon1.jpg"]});
  	}
    else if (message.content === '/q')
    {
        message.channel.send({files: ["https://i.pinimg.com/originals/b1/66/e8/b166e84e5f01e9ec56bc0f61a8ea940c.jpg"]});
    }
    else if (message.content === '/help')
    {
        message.channel.send("```diff\n-Help```");
    }
    else if (message.content === `/server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
    else if (command === '/kick') {
        // grab the "first" mentioned user from the message
        // this will return a User object, just like message.author
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }
        const taggedUser = message.mentions.users.first();

        message.channel.send(You wanted to kick: ${taggedUser.username});
    }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
