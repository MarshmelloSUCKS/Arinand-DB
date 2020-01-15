const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let replies = ["Heads", "Tails"]; //Specify possible replies
    let result = Math.floor((Math.random() * replies.length)); //Choose a reply

    let coinembed = new Discord.RichEmbed()
        //Return the embed
        .setThumbnail("https://i.ibb.co/pfqFq0j/download-1.jpg")
        .setColor("#1e74ff")
        .setTitle("Coin Toss")
        .setDescription(`${message.author.tag}, you tossed a coin and it landed **${'Answer', replies[result]}**!`);
    message.channel.send(coinembed);
}

module.exports.help = {
    name: "coin" //set command name
}