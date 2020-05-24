const Discord = require('discord.js');
const client = new Discord.Client();
const { ErelaClient } = require('erela.js')
const YTDL = require('ytdl-core');

function Play(connection, message)
{
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end",function () {
        if (server.queue[0]){
            Play(connection, message);
        }
        else{
            connection.disconnect();
        }

    });

}

global.servers = {};

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
(async () => {
   await client.login(process.env.BOT_TOKEN);
   client.music = new ErelaClient(client, [
       {
           host: process.env.HOST,
           port: process.env.PORT,
           password: process.env.PASSWORD
       }
   ]);
})();
client.on('message', async message => {
    if (message.content === '/q')
    {
        var i = Math.floor(Math.random() * 8) + 1;
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
    else if (message.content.startsWith ('/send')) {
        var mention = message.mentions.users.first();
            if (mention == null){
            message.channel.send('pls tag someone');
            return;
            }
        message.delete();
        mentionMessage = message.content.slice(6);
        mention.sendMessage (mentionMessage);
    }
    else if (message.content.startsWith('/join')){
    // Only try to join the sender's voice channel if they are in one themselves
        const channel = message.member.voiceChannel;
        if(channel){
            if (!servers[message.guild.id]){

                servers[message.guild.id] = {queue: []}
            }
            message.member.voiceChannel.join().then(connection =>{
                var server = servers[message.guild.id]
                message.reply("succesfully joined!");
                server.queue.push(message);
                Play(connection, message);
            })

        }
        else{
            message.reply('Join a voice channel Please!')
        }

    }
    else if (message.content === '/leave'){
        // Only try to join the sender's voice channel if they are in one themselves
        const channel = message.member.voiceChannel;
        if(channel){

            message.member.voiceChannel.leave();

            message.reply('I left ;(')
        }
        else{
            message.channel.send('Join a voice channel Please!')
        }

    }
    
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
