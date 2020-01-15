const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let replies = [":star:", ":star::star:", ":star::star::star:", ":star::star::star::star:", ":star::star::star::star::star:"]; //List replies
    let result = Math.floor((Math.random() * replies.length)); //Choose replies
    let question = args.slice(0).join(" "); //Fetch thing to be rated for the embed

    let rate_embed = new Discord.RichEmbed()
        //Return embed
        .setAuthor(message.author.tag)
        .setThumbnail("https://i.ibb.co/bKzQNjX/e4d52f4d69d7bba67e5fd70ffe26b70d.png")
        .setColor("#1e74ff")
        .addField(`Arinand gives ${question}...`, replies[result]);
    message.channel.send(rate_embed);
}

module.exports.help = {
    name: "rate" //Set command name
}