const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let replies = ["1", "2", "3", "4", "5", "6"]; //Specify the replies
    let result = Math.floor((Math.random() * replies.length)); //Choose a reply

    let diceembed = new Discord.RichEmbed()
        //Return an embed
        .setThumbnail("https://i.ibb.co/0ZWdMjQ/download.jpg")
        .setColor('#0099ff')
        .setTitle("Dice :game_die:")
        .setDescription(`${message.author.tag}, you rolled a ${'Answer', replies[result]}!`);
    message.channel.send(diceembed);
}

module.exports.help = {
    name: "dice" //Set command name
}
