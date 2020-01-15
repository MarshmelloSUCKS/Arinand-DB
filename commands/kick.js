const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
	let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); //Fetch the user to kick	
	let kickReason = args.join(" ").slice(22); //Fetch kick reason
	
	if(!kickedUser) {
		//Send when user is 404'd
		let NotFound = new Discord.RichEmbed()
		.addField("User not found!", `Sorry, but ${kickedUser} was not found.`)
		.setColor("#FF0000");

		return message.channel.send(NotFound);
	}

	if(!message.member.hasPermission("KICK_MEMBERS")) {
		//Send when user is too weak
		let InsufficientPerms = new Discord.RichEmbed()
		.addField("Insufficient Permissions!", "You do not have the `Kick Members` permission.")
		.setColor("#FF0000");

		return message.channel.send(InsufficientPerms);
	}
	if(kickedUser.hasPermission('KICK_MEMBERS')) {
		//send when user is too powerful
		let UnableToKick = new Discord.RichEmbed()
		.addField("Unable to kick!", "The member you are trying to kick has the `Kick Members` permission. I would suggest a demotion. :shrug:")
		.setColor("#FF0000");

		return message.channel.send(UnableToKick); 
	}

	if (!kickReason) {
	        kickReason = "Unstated"; //Set kick reason to "unstated" if no reason was specified
	    }

	let kickEmbed = new Discord.RichEmbed()
		//Set embed for the b o o t embed
		.addField("User was kicked!", `Log created at ${message.createdAt}`)
		.setColor("#FF0000")
		.addField("Kicked User:", `${kickedUser}, ${kickedUser.id}`)
		.addField("Kicked by:", `<@${message.author.id}>`)
		.addField("Reason for kick:", kickReason);

	let logs = message.guild.channels.find('name', 'logs') //Set logs channel
	if(!logs) kickedUser.kick() + message.channel.send (`User was kicked by command of **${message.author.tag}** due to "**${kickReason}**".`); //Alternate message if no logs channel was found
	if(logs) logs.send(kickEmbed); //Send if logs channel was found
	kickedUser.kick() //kick the user

}

module.exports.help = {
    name: "kick" //set command name
}
