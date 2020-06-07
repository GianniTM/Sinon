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
    name: 'rr',
    description: 'rr!',
    execute(message, args) {
        participants = [];
        const embed = new Discord.RichEmbed();
        embed.setTitle('**Russian Roulette**');
        embed.setThumbnail("https://images-ext-2.discordapp.net/external/C5rK2371x-fIsGosTVXQo1IzhaKIXpe6ol9Zgk8KrIw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/713003111945470013/0a883c7fe46b95b79b79e2e7a0021d5b.png?width=677&height=677");
        embed.setDescription(`Started by <@${message.author.id}>\nReact with the 🔫 emoji to partcipate!`);
        embed.setFooter("Time remaining 15 seconds");
        message.channel.send(embed).then(sentEmbed => {
            sentEmbed.react("🔫");
            const filter = (reaction, user) => {
                if (reaction.emoji.name === "🔫"){
                    participants.push(user.id);
                }
                return reaction.emoji.name === "🔫";
            };
            setTimeout(function(){
                embed.setTitle('**Russian Roulette**');
                embed.setThumbnail("https://images-ext-2.discordapp.net/external/C5rK2371x-fIsGosTVXQo1IzhaKIXpe6ol9Zgk8KrIw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/713003111945470013/0a883c7fe46b95b79b79e2e7a0021d5b.png?width=677&height=677");
                embed.setDescription(`Started by <@${message.author.id}>\nReact with the 🔫 emoji to partcipate!`);
                embed.setFooter("Time remaining 10 seconds");
                sentEmbed.edit(embed);
            }, 5000);
            setTimeout(function(){
                embed.setTitle('**Russian Roulette**');
                embed.setThumbnail("https://images-ext-2.discordapp.net/external/C5rK2371x-fIsGosTVXQo1IzhaKIXpe6ol9Zgk8KrIw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/713003111945470013/0a883c7fe46b95b79b79e2e7a0021d5b.png?width=677&height=677");
                embed.setDescription(`Started by <@${message.author.id}>\nReact with the 🔫 emoji to partcipate!`);
                embed.setFooter("Time remaining 5 seconds");
                sentEmbed.edit(embed);
            }, 10000);
            sentEmbed.awaitReactions(filter, { time: 15000 })
                .then(collected => {var i = Math.floor(Math.random() * (participants.length - 1) + 1);
                    embed.setTitle('**Russian Roulette**');
                    embed.setThumbnail("https://images-ext-2.discordapp.net/external/C5rK2371x-fIsGosTVXQo1IzhaKIXpe6ol9Zgk8KrIw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/713003111945470013/0a883c7fe46b95b79b79e2e7a0021d5b.png?width=677&height=677");
                    embed.setDescription(`Started by <@${message.author.id}>\nReact with the 🔫 emoji to partcipate!\n**Winner:** <@${participants[i]}> was shot to death!`);
                    embed.setFooter("Time remaining 0 seconds");
                    const shot = sentEmbed.guild.members.get(participants[i]);
                    if(shot.id === '271720534767697930') {
                        embed.setDescription(`Started by <@${message.author.id}>\nReact with the 🔫 emoji to partcipate!\n**Winner:** <@${participants[i]}> was shot to death!\nHas **Not** been muted due to **Owner** rights`);
                        sentEmbed.edit(embed);
                    }
                    else{
                        let muterole = message.guild.roles.find(`name`, "muted");
                        //start of create role
                        if(!muterole){
                            try{
                                muterole =  message.guild.createRole({
                                    name: "muted",
                                    color: "#000000",
                                    permissions:[]
                                })
                                message.guild.channels.forEach(async (channel, id) => {
                                    await channel.overwritePermissions(muterole, {
                                        SEND_MESSAGES: false,
                                        ADD_REACTIONS: false
                                    });
                                });
                            }catch(e){
                                console.log(e.stack);
                            }
                            shot.addRole(muterole.id);
                        }
                        //end of create role
                        mutetime = 120000;
                        shot.addRole(muterole.id);
                        embed.setDescription(`Started by <@${message.author.id}>\nReact with the 🔫 emoji to partcipate!\n**Winner:** <@${participants[i]}> was shot to death!\nAnd has been muted for 2 Minutes.`);
                        sentEmbed.edit(embed);
                        setTimeout(function(){
                            shot.removeRole(muterole.id);
                        }, mutetime);
                    }


                })
        })
    },
};