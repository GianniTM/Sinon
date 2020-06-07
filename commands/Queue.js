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
    name: 'queue',
    description: 'queue!',
    execute(message, args) {
        if (!servers[message.guild.id]) {

            servers[message.guild.id] = {queue: []}
        }
        var server = servers[message.guild.id];
        if(!server.queue[0]){
            const embed = new Discord.RichEmbed();
            embed.setAuthor("Queue:", message.author.displayAvatarURL);
            embed.setTitle("What are you looking at? There is nothing here!");
            message.channel.send({embed});
        }
        else{
            const embed = new Discord.RichEmbed();
            embed.setAuthor("Queue:", message.author.displayAvatarURL);
            for(song of server.queue){
                embed.addField(song.title, " Duration: " + song.duration.hours + 'h ' + song.duration.minutes + 'm ' + song.duration.seconds + 's')
            }
            message.channel.send({embed});
        }

    },
};