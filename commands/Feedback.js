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
    name: 'feedback',
    description: 'feedback!',
    execute(message, args) {
        const embed = new Discord.RichEmbed();
        embed.setTitle('**Feedback for bugs and ideas!**');
        embed.setThumbnail("https://images-ext-2.discordapp.net/external/C5rK2371x-fIsGosTVXQo1IzhaKIXpe6ol9Zgk8KrIw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/713003111945470013/0a883c7fe46b95b79b79e2e7a0021d5b.png?width=677&height=677");
        embed.setDescription(`You can report a bug or give us ideas for more stuff to implement in the bot using the link in the title!`);
        embed.setURL("https://forms.gle/V5jdU9sBuVPWBzEk8");
        message.channel.send({embed});
    },
};