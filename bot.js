const Discord = require('discord.js');
const client = new Discord.Client();
const { ErelaClient } = require('erela.js')
const YTDL = require('ytdl-core');
const { stripIndents } = require("common-tags")
var search = require('youtube-search');
var opts = {
    maxResults: 10,
    key: process.env.YT_TOKEN
};

function Play(connection, message)
{
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0].link, {filter: "audioonly"}));
    server.dispatcher.on("end",function () {
        server.queue.shift();
        if (server.queue[0]){
            const title = server.queue[0].title;
            const embed = new Discord.RichEmbed();
            embed.setAuthor("Now Playing:", message.author.displayAvatarURL);
            embed.setThumbnail(server.queue[0].thumbnails.default.url);
            embed.setTitle(title)
            message.channel.send({embed}).then(m => {
                server.dispatcher.on("end",function () {
                    m.delete()
                })
            })
            Play(connection, message);

        }
        else{
            message.member.voiceChannel.leave();
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
    //getting sino quotes
    if (message.content === '/q')
    {
        var i = Math.floor(Math.random() * 8) + 1;
        var randomImg = "Images/sinon" + i + ".jpg"
        message.channel.send({files: [randomImg]});
    }
    // the help function
    else if (message.content === '/help')
    {
        const embed = new Discord.RichEmbed();
        embed.setTitle("Functions");
        embed.setThumbnail(bot.user.displayAvatarURL);
        message.channel.send({embed});
    }
    // testing embed/ getting someone's avatar
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
    //getting the amount of members in the current server
    else if (message.content === `/server`) {
        const embed = new Discord.RichEmbed();
        embed.setTitle(message.guild.name);
        embed.setThumbnail(message.guild.iconURL)
        embed.setDescription(`Current Members: ${message.guild.memberCount}`);
        message.channel.send({embed});
    }
    // saying hello to a mentioned person
    else if (message.content.startsWith ('/u')){
        var mention = message.mentions.users.first();
        if (mention == null){
            message.channel.send('pls tag someone');
            return;
        }
        message.channel.send(`Hello ${mention} :D`);
    }
    //sending a private message via the bot
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
    // playing + queueing song
    else if (message.content.startsWith('/p')){
        const channel = message.member.voiceChannel;
        if(channel){
            if(!message.guild.voiceConnection){
                if (message.content.length <= 3){
                    message.channel.send('Pleas provide a link or searchterm!');
                }
                else{
                    if (!servers[message.guild.id]){

                        servers[message.guild.id] = {queue: []}
                    }
                    var server = servers[message.guild.id];
                    mentionMessage = message.content.slice(3);
                        message.member.voiceChannel.join().then(connection =>{

                            search(mentionMessage, opts, function(err, results) {
                                if(err) return console.log(err);
                                mentionMessage = results[0];
                                const title = results[0].title;
                                const embed = new Discord.RichEmbed();
                                embed.setAuthor("Now Playing:", message.author.displayAvatarURL);
                                embed.setThumbnail(results[0].thumbnails.default.url);
                                embed.setTitle(title);
                                message.channel.send({embed}).then(m => {
                                    server.dispatcher.on("end",function () {
                                        m.delete()
                                    })
                                })
                                server.queue.push(mentionMessage);
                                Play(connection, message);
                            });
                        })


                }


            }
            else{
                var server = servers[message.guild.id];
                mentionMessage = message.content.slice(3);

                    search(mentionMessage, opts, function(err, results) {
                        if(err) return console.log(err);
                        mentionMessage = results[0];
                        const title = results[0].title;
                        const embed = new Discord.RichEmbed();
                        embed.setAuthor("Queued:", message.author.displayAvatarURL);
                        embed.setThumbnail(results[0].thumbnails.default.url);
                        embed.setTitle(title);
                        message.channel.send({embed});
                        server.queue.push(mentionMessage);
                        Play(connection, message);
                    });


            }

        }
        else{
            message.reply('Join a voice channel Please!')
        }

    }
    //stop songs
    else if (message.content === '/stop'){
        // Only try to join the sender's voice channel if they are in one themselves
        const channel = message.member.voiceChannel;
        if(channel){
            var server = servers[message.guild.id];
            server.queue = [];
            server.dispatcher.end()
        }
        else{
            message.channel.send('Join a voice channel Please!')
        }

    }
    // skip songs
    else if(message.content === '/skip')
    {
        const server = servers[message.guild.id];
        if (!server || !server.queue[0]){
            message.channel.send("No song's currently playing")}
        else{
            server.connection.dispatcher.end();
    }
    }
    // gif your game react
    else if(message.content.startsWith('https://www.gifyourgame.com/'))
    {
        message.react('⭐');
    }


    
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
