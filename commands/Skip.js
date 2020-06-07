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
module.exports = {
    name: 'skip',
    description: 'skip!',
    execute(message, args) {
        var server = servers[message.guild.id];
        if(message.guild.voiceConnection.channel === message.member.voiceChannel){
            if (!server || !server.queue[0]) {
                message.channel.send("No song's currently playing")
            } else {
                server.dispatcher.end();
                message.react("▶");
            }
        }
        else{
            message.channel.send('You dumb? You are not in the same VoiceChannel!!!');
        }

    },
};