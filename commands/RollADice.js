module.exports = {
    name: 'roll',
    description: 'roll!',
    execute(message, args) {
        let member = message.guild.member(message.author);
        let nickname = member ? member.displayName : null;
        var messages = message.content.slice(6).toLowerCase();
        var i = Math.floor(Math.random() * parseInt(messages)) + 1 ;
        if(i == '69'){
            message.channel.send("https://tenor.com/view/kevin-the-office-smirk-gif-5248324");}
        if(messages == '69'){
            message.channel.send("https://tenor.com/view/office-the-kevin-from-wine-gif-13397053");
        }
        else if(messages == '420'){
            message.channel.send("https://tenor.com/view/afroman-high-baked-gif-5764943");
        }
        else{
            message.channel.send(nickname + ', You rolled a ' + i + '!');
        }
    },
};