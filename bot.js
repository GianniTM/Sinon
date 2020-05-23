const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const queue = new Map();


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

client.once("reconnecting", () => {
    console.log("Reconnecting!");
});

client.once("disconnect", () => {
    console.log("Disconnect!");
});

client.on('message', async message => {
    if (message.author.bot) return;
    else if (message.content === '/q')
    {
        var i = Math.floor(Math.random() * 4) + 1;
        var randomImg = "Images/sinon" + i + ".jpg"
        message.channel.send({files: [randomImg]});
    }
    else if (message.content === '/help')
    {
        message.channel.send("```diff\n-Help```");
    }
    else if (message.content.startsWith ('/embed'))
    {
        const embed = new Discord.RichEmbed();
        var mention = message.mentions.users.first();
        if (mention == null){
            embed.setTitle("Your Avatar");
            embed.setThumbnail(message.author.displayAvatarURL);
            embed.setColor("37bceb");
            message.channel.send({embed});
        }
        else{

        embed.setTitle(`${mention.username}'s avatar!`);
        embed.setThumbnail(mention.displayAvatarURL);
        embed.setColor("f7d456");
        message.channel.send({embed});
        }
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
    else if (message.content == '/avatar') {
        var user = message.author;
    }

    const serverQueue = queue.get(message.guild.id);

    if (message.content.startsWith(`/play`)) {
        execute(message, serverQueue);
        return;
    } else if (message.content.startsWith(`/skip`)) {
        skip(message, serverQueue);
        return;
    } else if (message.content.startsWith(`/stop`)) {
        stop(message, serverQueue);
        return;
    }




});


async function execute(message, serverQueue) {
    const args = message.content.split(" ");

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
        return message.channel.send(
            "You need to be in a voice channel to play music!"
        );
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send(
            "I need the permissions to join and speak in your voice channel!"
        );
    }
    voiceChannel.join();
}




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
