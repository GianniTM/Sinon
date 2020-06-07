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
    name: 'server',
    description: 'server',
    execute(message, args) {
        const embed = new Discord.RichEmbed();
        embed.setTitle(message.guild.name);
        embed.setThumbnail(message.guild.iconURL)
        embed.setDescription(`Current Members: ${message.guild.memberCount}`);
        message.channel.send({embed});
    },
};