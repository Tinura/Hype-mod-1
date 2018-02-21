exports.run = (client, message) => {
	var img = system.findImage("food");
	message.channel.send({
		file: {
			attachment: img[0],
			name: `photo.${img[1]}`
		}
	});
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 1,
	type: 4
};

exports.help = {
	name: `food`,
	description: `Random food pictures.`,
	usage: `${client.settings.prefix}food`
};
