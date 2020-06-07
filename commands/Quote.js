module.exports = {
    name: 'q',
    description: 'q',
    execute(message, args) {
        var i = Math.floor(Math.random() * 15) + 1;
        var randomImg = "Images/sinon" + i + ".jpg"
        message.channel.send({files: [randomImg]});
    },
};