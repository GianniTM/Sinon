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
    name: 'cf',
    description: 'coinflip!',
    execute(message, args) {
        var i = Math.floor(Math.random() * 2 + 1);
        if(i == '1'){
            const embed = new Discord.RichEmbed();
            embed.setTitle('Coin Toss')
            embed.setDescription("The coin landed on Heads!")
            embed.setThumbnail("https://gianni.sinners.be/DiscordBotImg/heads.png");
            embed.setColor("#DCDCDC");
            message.channel.send({embed});
        }
        else{
            const embed = new Discord.RichEmbed();
            embed.setTitle('Coin Toss')
            embed.setDescription("The coin landed on Tails!")
            embed.setThumbnail("https://gianni.sinners.be/DiscordBotImg/tails.png");
            embed.setColor("#DCDCDC")
            message.channel.send({embed});
        }

    },
};