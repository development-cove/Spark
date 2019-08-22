var Discord = await require("discord.js"); // Imports the module, discord.js.
var client = new Discord.Client(); // Defines "client" as a new Discord Client.
var { prefix, token } = require("./data/settings.json"); // Imports the prefix and the token from the settings.json file.
client.on("ready", async () => { // This is one of the client's events, ready.
    await console.log(`I am logged in as ${client.user.tag} and ready to go.`); // Logs text in the console to inform the bot developer that the client is ready.
}); // End of the ready event.
client.on("message", async message => { // This is one of the client's events, message.
    if (message.content === `${prefix}ping`) { // The ping command. Introduces commands.
        var pingEmbed = new Discord.RichEmbed() // Introduces embeds.
            .setTitle("Ping") // Sets the title of the embed.
            .setColor("RANDOM") // Sets the colour of the embed to random.
            .setDescription(`Pong! My latency to Discord is ${client.ping} milliseconds.`); // Sets the description of the embed.
        return message.channel.send(pingEmbed); // Sends the ping embed to the respective channel.
    };
}); // End of the message event.
client.login(token); // Logs in the client to Discord.