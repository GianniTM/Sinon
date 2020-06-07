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
    name: 'help',
    description: 'help',
    execute(message, args) {
        var messages = args
        if(messages == "minigames"){
            const embed = new Discord.RichEmbed();
            embed.setTitle("**Minigame Commands**");
            embed.addField(
                '**Rock Paper Scissors**', '`/rps [Rock, paper, scissors]`'
            );
            embed.addField(
                '**Russian Roulette**','`/rr`'
            );
            embed.addField(
                "**Roll a dice**",'`/roll [max number]`'
            );
            embed.addField(
                '**NL Version of Rock Paper Scissors**','`/rps [Steen, Papier, Schaar]`'
            );
            embed.addField(
                '**Coinflip**','`/cf`'
            );
            embed.setFooter('Created By Xealius','https://images-ext-2.discordapp.net/external/koFm2tlX5t7FcS-qEPlTx5S3z-taeo1Ns2K-f2lw4H8/https/cdn.discordapp.com/avatars/271720534767697930/a_f37bd901007d84679f44c4690f9fa364.gif')
            message.channel.send({embed});
        }
        else if(messages == "music"){
            const embed = new Discord.RichEmbed();
            embed.setTitle("**Music Commands**");
            embed.addField(
                '**Play a song**', '`/p [Song Name | Song Link | Playlist Link]`'
            );
            embed.addField(
                '**Pause a song**','`/pause`'
            );
            embed.addField(
                "**Resume a song**",'`/resume`'
            );
            embed.addField(
                '**Skip a song**','`/skip`'
            );
            embed.addField(
                '**Empty the queue**','`/stop`'
            );
            embed.addField(
                '**Show the queue**','`/queue`'
            );
            embed.addField(
                '**Leaves the voicechannel**','`/leave`'
            );
            embed.setFooter('Created By Xealius','https://images-ext-2.discordapp.net/external/koFm2tlX5t7FcS-qEPlTx5S3z-taeo1Ns2K-f2lw4H8/https/cdn.discordapp.com/avatars/271720534767697930/a_f37bd901007d84679f44c4690f9fa364.gif')
            message.channel.send({embed});
        }
        else if(messages == "server"){
            const embed = new Discord.RichEmbed();
            embed.setTitle("**Server Commands**");
            embed.addField(
                '**Get avatar of a user**', '`/avatar [Mentioned user]`'
            );
            embed.addField(
                '**Send private msg to a user**','`/send [Mentioned user] [Message]`'
            );
            embed.setFooter('Created By Xealius','https://images-ext-2.discordapp.net/external/koFm2tlX5t7FcS-qEPlTx5S3z-taeo1Ns2K-f2lw4H8/https/cdn.discordapp.com/avatars/271720534767697930/a_f37bd901007d84679f44c4690f9fa364.gif')
            message.channel.send({embed});
        }
        else if(messages == "main"){
            const embed = new Discord.RichEmbed();
            embed.setTitle("**Bug/Idea Commands**");
            embed.addField(
                '**Give feedback**', '`/feedback`'
            );
            embed.addField(
                '**Get main discord server**','`/discord`'
            );
            embed.setFooter('Created By Xealius','https://images-ext-2.discordapp.net/external/koFm2tlX5t7FcS-qEPlTx5S3z-taeo1Ns2K-f2lw4H8/https/cdn.discordapp.com/avatars/271720534767697930/a_f37bd901007d84679f44c4690f9fa364.gif')
            message.channel.send({embed});
        }
        else{
            const embed = new Discord.RichEmbed();
            embed.setTitle("**Sinon Commands**");
            embed.setThumbnail("https://images-ext-2.discordapp.net/external/C5rK2371x-fIsGosTVXQo1IzhaKIXpe6ol9Zgk8KrIw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/713003111945470013/0a883c7fe46b95b79b79e2e7a0021d5b.png?width=677&height=677");
            embed.setDescription("Enjoyy!!!");
            embed.addField(
                '**Music Commands**', '`/help music`'
            );
            embed.addField(
                '**Minigame Commands**','`/help minigames`'
            );
            embed.addField(
                "**Server Commands**",'`/help server`'
            );
            embed.addField(
                '**Bug/Idea Commands**','`/help main`'
            );
            embed.setFooter('Created By Xealius','https://images-ext-2.discordapp.net/external/koFm2tlX5t7FcS-qEPlTx5S3z-taeo1Ns2K-f2lw4H8/https/cdn.discordapp.com/avatars/271720534767697930/a_f37bd901007d84679f44c4690f9fa364.gif')
            message.channel.send({embed});

        }
    },
};