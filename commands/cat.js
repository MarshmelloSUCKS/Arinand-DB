const Discord = require("discord.js");
const superagent = require("superagent");


module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get('https://aws.random.cat/meow'); //Fetch the adorable little kitty
    
    let cat = new Discord.RichEmbed()
        //Return said pretty little kitty
        .setColor("#1e74ff")
        .setTitle(":cat: Have a random cute cat! :cat:")
        .setImage(body.file);
    message.channel.send(cat);

}
module.exports.help = {
    name: "cat" //Set command name
}