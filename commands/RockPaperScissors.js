module.exports = {
    name: 'rps',
    description: 'rps!',
    execute(message, args) {
        var messages = args;
        var i = Math.floor(Math.random() * 3) ;
        var listEN = [
            'rock' ,
            'paper',
            'scissors'
        ];
        var listNL = [
            'steen',
            'papier',
            'schaar'
        ];
        var choiceEN = listEN[i];
        var choiceNL = listNL[i];
        if(messages == 'rock' || messages == 'paper' || messages == 'scissors'){
            if(messages == 'rock' && choiceEN == 'rock'){
                message.channel.send("**We tied!** I chose Rock.");
            }
            else if(messages == 'rock' && choiceEN == 'paper'){
                message.channel.send("**I won!** I chose Paper.");
            }
            else if(messages == 'rock' && choiceEN == 'scissors'){
                message.channel.send("**You win!** I chose Scissors.");
            }
            else if(messages == 'paper' && choiceEN == 'rock'){
                message.channel.send("**You win!** I chose Rock.");
            }
            else if(messages == 'scissors' && choiceEN == 'rock'){
                message.channel.send("**I won!** I chose Rock.");
            }
            else if(messages == 'paper' && choiceEN == 'paper'){
                message.channel.send("**We tied!** I chose Paper.");
            }
            else if(messages == 'paper' && choiceEN == 'scissors'){
                message.channel.send("**I won!** I chose Scissors");
            }
            else if(messages == 'scissors' && choiceEN == 'scissors'){
                message.channel.send("**We tied!** I chose Scissors.");
            }
            else if(messages == 'scissors' && choiceEN == 'paper'){
                message.channel.send("**You win!** I chose Paper.");
            }
            else{
                message.channel.send("Add another if not everything is implemented yet " + choiceEN + i);
            }
        }
        else if(messages == 'steen' || messages == 'papier' || messages == 'schaar'){

            if(messages == 'steen' && choiceNL == 'steen'){
                message.channel.send("**Het is gelijkspel!** Ik koos Steen.");
            }
            else if(messages == 'steen' && choiceNL == 'papier'){
                message.channel.send("**Ik win!** Ik koos Papier.");
            }
            else if(messages == 'steen' && choiceNL == 'schaar'){
                message.channel.send("**Jij wint!** Ik koos Schaar.");
            }
            else if(messages == 'papier' && choiceNL == 'steen'){
                message.channel.send("**Jij wint!** Ik koos Steen.");
            }
            else if(messages == 'schaar' && choiceNL == 'steen'){
                message.channel.send("**Ik win!** Ik koos Steen.");
            }
            else if(messages == 'papier' && choiceNL == 'papier'){
                message.channel.send("**Het is gelijkspel!** Ik koos Papier.");
            }
            else if(messages == 'papier' && choiceNL == 'schaar'){
                message.channel.send("**Ik win!** Ik koos Schaar");
            }
            else if(messages == 'schaar' && choiceNL == 'schaar'){
                message.channel.send("**Het is gelijkspel!** Ik koos Schaar.");
            }
            else if(messages == 'schaar' && choiceNL == 'papier'){
                message.channel.send("**Jij wint!** Ik koos Papier.");
            }
            else{
                message.channel.send("Add another if not everything is implemented yet " + choiceNL + i);
            }
        }
        else{
            message.channel.send("You didn't choose 1 of the options. The Languages you can play in are NL and EN");
        }
    },
};