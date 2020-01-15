const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
	let bannedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); //Fetch the user to ban
	let BanReason = args.join(" ").slice(22); //Fetch the ban reason
	
	if(!bannedUser) {
		//Send when user is 404'd
		let NotFound = new Discord.RichEmbed()
		.addField("User not found!", `Sorry, but ${bannedUser} wasn't found.`)
		.setColor("#FF0000");

		return message.channel.send(NotFound);
	}
	
	
	if(!message.member.hasPermission("BAN_MEMBERS")) {
		//Send when user has insufficient privelages
		let InsufficientPerms = new Discord.RichEmbed()
		.addField("Insufficient Permissions!", "You do not have the `Ban Members` permission.")
		.setColor("#FF0000");

		return message.channel.send(InsufficientPerms);
	}
	if(bannedUser.hasPermission('BAN_MEMBERS')) {
		//Send when the user that's about to be banned is just a little bit too powerful
		let UnableToBan = new Discord.RichEmbed()
		.addField("Unable to ban!", "The member you are trying to kick has the `Ban Members` permission. I would suggest manually doing so, or strip their roles and try again. :shrug:")
		.setColor("#FF0000");

		return message.channel.send(UnableToBan);
	}
		if (!BanReason) {
		        BanReason = "Unstated";
		    }

	let banEmbed = new Discord.RichEmbed()
	//Send if user was successfully banned and if a logs channel is found
		.addField("User was banned!", `Log created at ${message.createdAt}`)
		.setColor("#FF0000")
		.addField("Banned User:", `${bannedUser}, ${bannedUser.id}`)
		.addField("Banned by:", `<@${message.author.id}>`)
		.addField("Reason for ban:", BanReason);

	let logs = message.guild.channels.find('name', 'logs'); //Set name of logs channel
	if(!logs) message.guild.member(bannedUser).ban(BanReason) + 
	message.channel.send (`User was banned by command of **${message.author.tag}** due to "**${BanReason}**".`); //Alternate message for if there is no logs channel

	message.guild.member(bannedUser).ban(BanReason); //Actually ban the user
	if(logs) logs.send(banEmbed); //Send embed if logs are found

	return;
}

module.exports.help = {
    name: "ban"
}
