const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[2]) return message.reply("You didn't ask a proper question!"); //Return if the user didn't ask a proper question
    let replies = ["It is certain.", "Without a doubt.", "Signs point to yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Don't count on it.", "My reply is no.", "Very doubtful."]; //Set the possible replies
    let result = Math.floor((Math.random() * replies.length)); //Choose a reply
    let question = args.slice(0).join(" "); //Fetch the question for the embed

    let ballembed = new Discord.RichEmbed()
        //Display in an embed
        .setAuthor(message.author.tag)
        .setThumbnail("https://i.ibb.co/jkdchNc/download-2.jpg")
        .setColor('#0099ff')
        .addField("Question", question)
        .addField("Answer", replies[result]);
    message.channel.send(ballembed);

}

module.exports.help = {
    name: "8ball" //Set command name
}
