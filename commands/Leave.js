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
    name: 'leave',
    description: 'leave!',
    execute(message, args) {
        if (message.member.voiceChannel) {
            if(message.guild.voiceConnection) {
                if(message.guild.voiceConnection.channel === message.member.voiceChannel){
                    var server = servers[message.guild.id];
                    server.queue = [];
                    server.dispatcher.end();
                    message.member.voiceChannel.leave();
                    message.react('👋');
                }
                else{
                    message.channel.send('You dumb? You are not in the same VoiceChannel!!!');
                }

            }
            else{
                message.channel.send("I'm not in a VoiceChannel!")
            }
        }
        else {
            message.channel.send("You are not in a VoiceChannel!");
        }
    },
};