//* This is to meet the liscense agreement for you. Just put your name in the modified by part if you modified it.
//? Developer : SuzuDev
//? Modified by :

//TODO Readd comments to the bots code.
//! This bot is documented!
//! Go to localhost:(port)/docs to go to the docs!
//? Importing my files
import { setupReact } from "./website/setupExpress.js";
import clientSetup from "./discord/client.js";
import { TOKEN, PASSWORD, AUTH } from './importantFiles/env/envExports.js';
import { setUpBot } from "./minecraft/setupBot.js";
import update from "./importantFiles/consoleMods/console.js";
import passthrough from "./minecraft/extras/passthrough.js";
import { Client, Message } from "discord.js";
import { argv } from "process";
import chalk from "chalk";

//? Checking the arguments for starting the bot
//? For checking if the bot is in production mode.
var production: boolean = false;
for (let i = 0; i < argv.length; i++) {
    //? Checking the args for --production
    if (argv[i] == "--production") {
        //? Updating the terminal
        update();
        //? Setting production to true
        production = true;
    }
}

//? checking the production variable
if (!production) {
    //? If it is false, log the warning
    console.warn(chalk.yellow("[WARN] Bot is not in production mode. \n\n The custom terminal will be disabled"));
}

//? Creating the react file
var port = Number(process.env.PORT) || 3000;
setupReact(port);

//? creating the client
const client : any = clientSetup(TOKEN, ["ALL"]);

//? Setting up the auth option
var auth: any = AUTH;
if (auth != "microsoft" && auth != "mojang" && auth != 'offline') {
    auth = "microsoft";
}

//? Creating the bot
//?                   username  Host             password   auth               limits (This says weather or not the bot can kick, ect.)
const bot = setUpBot("_Hakari", "mc.hypixel.net", PASSWORD, auth || 'microsoft', true);
//? They got rid of the new guild already.
// const bot2 = setUpBot("MoonSakuras", "mc.hypixel.net", PASSWORD, auth || 'microsoft', false);

//? If the bots get a message send the message to the passthrough channel.
bot.on("message", async (message: any) => {
    //? This checks if the message includes Guild > and if it doesn't, returns undefined
    //! This can't return something, since it is a void function.
    if (!message.toString().includes("Guild >")) return undefined;
    try {
        var channel = await client.channels.fetch("878026030877663262");
        if (channel) {
            passthrough(message.toString(), channel);
        }
    } catch (err) {

    }
})

client.on("messageCreate", async (message: any) => {
    //! You need this so it doesnt constantly repeat itself
    if(message.author.id == "907385763178627142") return;

    if (message.channel.id == "878026030877663262") {
        //? Sends the message.
        if ((message.author.username.length + 3 + message.content.length) > 100) return message.reply("Message too long!");
        bot.chat(message.author.username + " : " + message.content);
    }

    //! So we dont continue with commands that dont start with .
    if (!message.content.startsWith(".")) { return };
})

//? When someone types something into the console, send it to the guild chat.
process.stdin.on("data", (data) => {
    bot.chat(data.toString().replace("hakari", ""));
});

process.on("exit", (code) => {
    console.log("Process ended with code : " + code);
})