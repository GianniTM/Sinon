// MAKE VARIABLES OF IMPORTED JS FILES START //
const fs = require('fs');
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
const YouTube = require("discord-youtube-api");
const youtube = new YouTube(process.env.YT_TOKEN);
module.exports = {
    name: 'p',
    description: 'p!',
    execute(message, args) {
        // Play first time they use /p
        async function PlayAll(mentionMessage) {
            // using a yt link
            if (mentionMessage.startsWith("https://www.youtube.com/watch?")){
                try{
                var video = await youtube.getVideo(mentionMessage);
                message.member.voiceChannel.join().then(connection =>{
                    mentionMessage = video;
                    const titles = video.title;
                    const embed = new Discord.RichEmbed();
                    embed.setAuthor("Now Playing:", message.author.displayAvatarURL);
                    embed.setDescription( "["+ titles + "](" + video.url + ")");

                    message.channel.send({embed}).then(m => {
                        server.dispatcher.on("end",function () {
                            m.delete()
                        })
                    })
                    server.queue.push(mentionMessage);
                    Play(connection, message);

                })
            }
            // invalid yt link
        catch(err){
                const embed = new Discord.RichEmbed();
                embed.setTitle("Now Playing");
                embed.setDescription( "Nothing, Your song is invalid or private!!");
                message.channel.send({embed});
            }
        }
            // using yt playlist link
            else if(mentionMessage.startsWith("https://www.youtube.com/playlist?")){
                try{
                    const videoArray1 = await youtube.getPlaylist(mentionMessage);
                    message.member.voiceChannel.join().then(connection =>{
                        for(song of videoArray1) {
                            mentionMessage = song;
                            server.queue.push(mentionMessage);
                        }
                        const title = videoArray1.length;
                        const embed = new Discord.RichEmbed();
                        embed.setAuthor("Playlist:", message.author.displayAvatarURL);
                        embed.setDescription( "Added " + title + " songs!");
                        message.channel.send({embed}).then(m => {
                            server.dispatcher.on("end",function () {
                                m.delete();
                            })
                        })
                        const titles = server.queue[0].title;
                        embed.setAuthor("Now Playing:", message.author.displayAvatarURL);
                        embed.setDescription( "["+ titles + "](" + server.queue[0].url + ")");
                        message.channel.send({embed}).then(m => {
                            server.dispatcher.on("end",function () {
                                m.delete();
                            })
                        })
                        Play(connection, message);
                    })
                }
                // invalid playlist
                catch(error){
                    const embed = new Discord.RichEmbed();
                    embed.setTitle("Playlist");
                    embed.setDescription( "Added 0 songs! Your Playlist is private!");
                    message.channel.send({embed});
                    return;
                }

                return;
            }
            else{
                try{
                // yt search
                var video = await youtube.searchVideos(mentionMessage);
                message.member.voiceChannel.join().then(connection =>{
                mentionMessage = video;
                const titles = video.title;
                const embed = new Discord.RichEmbed();
                embed.setAuthor("Now Playing:", message.author.displayAvatarURL);
                embed.setDescription( "["+ titles + "](" + video.url + ")");

                message.channel.send({embed}).then(m => {
                    server.dispatcher.on("end",function () {
                        m.delete()
                    })
                })
                server.queue.push(mentionMessage);
                Play(connection, message);

            })
            }
            // no results
        catch(err){
                const embed = new Discord.RichEmbed();
                embed.setTitle("Now Playing");
                embed.setDescription( "Nothing, Your song is invalid or private!!");
                message.channel.send({embed});
            }
        }}
        //Queue songs
        async function QueueAll(mentionMessage) {
            //yt link
            if (mentionMessage.startsWith("https://www.youtube.com/watch?")){

                try{
                    var video = await youtube.getVideo(mentionMessage);
                    mentionMessage = video;
                    const title = video.title;
                    const embed = new Discord.RichEmbed();
                    const titles = video.title;
                    embed.setAuthor("Queued:", message.author.displayAvatarURL);
                    embed.setDescription( "["+ titles + "](" + video.url + ")");
                    message.channel.send({embed}).then(m => {
                        server.dispatcher.on("end",function () {
                            m.delete()
                        })
                    })
                    server.queue.push(mentionMessage);
                }
                //invalid link
                catch(err){
                    const embed = new Discord.RichEmbed();
                    embed.setTitle("Queued");
                    embed.setDescription( "Nothing, Your song is invalid or private!!");
                    message.channel.send({embed});
                }

            }
            //yt playlist
            else if(mentionMessage.startsWith("https://www.youtube.com/playlist?")){
                try{
                    const videoArray1 = await youtube.getPlaylist(mentionMessage);
                        for(song of videoArray1) {
                            mentionMessage = song;
                            server.queue.push(mentionMessage);
                        }
                        const title = videoArray1.length;
                        const embed = new Discord.RichEmbed();
                        embed.setAuthor("Playlist:", message.author.displayAvatarURL);
                        embed.setDescription( "Added " + title + " songs!");
                        message.channel.send({embed}).then(m => {
                            server.dispatcher.on("end",function () {
                                m.delete();
                            })
                        })
                        const titles = server.queue[0].title;
                        embed.setAuthor("Queued:", message.author.displayAvatarURL);
                        embed.setDescription( "["+ titles + "](" + server.queue[0].url + ")");
                        message.channel.send({embed}).then(m => {
                            server.dispatcher.on("end",function () {
                                m.delete();
                            })

                    })
                }
                //invalid link
            catch(error){
                    const embed = new Discord.RichEmbed();
                    embed.setTitle("Playlist");
                    embed.setDescription( "Added 0 songs! Your Playlist is private!");
                    message.channel.send({embed});
                    return;
                }
                return;}
            else{
                try{
                    //yt search
                    var video = await youtube.searchVideos(mentionMessage);
                    mentionMessage = video;
                    const title = video.title;
                    const embed = new Discord.RichEmbed();
                    const titles = video.title;
                    embed.setTitle("Queued:");
                    embed.setDescription( "["+ titles + "](" + video.url + ")");
                    message.channel.send({embed}).then(m => {
                        server.dispatcher.on("end",function () {
                            m.delete()
                        })
                    })
                    server.queue.push(mentionMessage);
                }
                //no results
                catch(err){
                    const embed = new Discord.RichEmbed();
                    embed.setTitle("Queued");
                    embed.setDescription( "Nothing, Your song is invalid or private!!");
                    message.channel.send({embed});
                }
            }
        }
        //Play a song
        function Play(connection, message)
        {
            var server = servers[message.guild.id];
            server.dispatcher = connection.playStream(YTDL(server.queue[0].url, {filter: "audioonly"}));
            server.dispatcher.on("end",function () {
                server.queue.shift();
                if (server.queue[0]){
                    const embed = new Discord.RichEmbed();
                    const titles = server.queue[0].title;
                    embed.setAuthor("Now Playing:", message.author.displayAvatarURL);
                    embed.setDescription( "["+ titles + "](" + server.queue[0].url + ")");
                    message.channel.send({embed}).then(m => {
                        server.dispatcher.on("end",function () {
                            m.delete();
                        })
                    })
                    Play(connection, message);
                }
                else{
                }
            });
        }
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
                    PlayAll(mentionMessage);
                }
            }
            else{
                if (message.content.length <= 3){
                    message.channel.send('Pleas provide a link or searchterm!');
                }
                else {
                    if (!servers[message.guild.id]) {
                        servers[message.guild.id] = {queue: []}
                    }
                    if(message.guild.voiceConnection.channel === message.member.voiceChannel){
                        var server = servers[message.guild.id];
                        var mentionMessage = message.content.slice(3);
                        if (!server.queue[0]) {
                            PlayAll(mentionMessage);
                        } else {
                            QueueAll(mentionMessage)
                        }
                    }
                    else{
                        message.channel.send("It seems that you are not in the same VoiceChannel as the bot. ")
                    }
                }
            }
        }
        else{
            message.reply('Join a voice channel Please!')
        }
    },
};