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
    if (message.content === '/q')
    {
        var i = randomRange(0,3);
        switch (i) {
            case 0:
                message.channel.send({files: ["Images/sinon1.jpg"]});
                return;
            case 1:
                message.channel.send({files: ["Images/sinon2.jpg"]});
                return;
            case 2:
                message.channel.send({files: ["Images/sinon3.jpg"]});
                return;
            case 3:
                message.channel.send({files: ["Images/sinon4.jpg"]});
                return;
    }
    else if (message.content === '/help')
    {
        message.channel.send("```diff\n-Help```");
    }
    else if (message.content === '/embed')
    {
        const embed = new Discord.RichEmbed();

        embed.setTitle("Test");
        embed.setColor("f7d456");

        message.channel.send("Testing embed");
        message.channel.send({embed});
    }
    else if (message.content === `/server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
    else if (message.content.startsWith ('/u')){
        var mention = message.mentions.users.first();
        if (mention == null){
            message.channel.send('pls tag someone');
            return;
        }
        message.channel.send(`Hello ${mention} :D`);
    }



});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
