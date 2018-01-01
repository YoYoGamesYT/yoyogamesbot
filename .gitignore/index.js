const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("y!help");
    console.log("Le bot a bien été connecté");
});

bot.login("Mzk1NjQ3NjYyODQ3ODE5Nzg2.DSu7kQ.oSPvfi2rVC_T_MWrcf28KSfP6Js");
