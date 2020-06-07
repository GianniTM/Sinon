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
    name: 'pause',
    description: 'pause!',
    execute(message, args) {
        var server = servers[message.guild.id];

        if(message.guild.voiceConnection.channel === message.member.voiceChannel){
            if (server.dispatcher.paused){
                message.channel.send('dispatched is already paused')
            }
            else{
                server.dispatcher.pause();
                message.react("⏸");
            }
        }
        else{
            message.channel.send('You dumb? You are not in the same VoiceChannel!!!');
        }
    },
};