//* This is to meet the liscense agreement for you. Just put your name in the modified by part if you modified it.
//? Developer : SuzuDev
//? Modified by :

//! This bot is documented!
//! Go to localhost:(port)/docs to go to the docs!
//? Importing my files
import { setupReact } from "./website/setupExpress.js";
import clientSetup from "./discord/client.js";
import { TOKEN, PASSWORD, AUTH } from './importantFiles/env/envExports.js';
import { setUpBot } from "./minecraft/setupBot.js";
import update from "./importantFiles/consoleMods/console.js";

//? Updating the terminal
update();

//? Creating the react file
var port = Number(process.env.PORT) || 3000;
setupReact(port);

//? creating the client
const client = clientSetup(TOKEN, ["ALL"]);

//? Setting up the auth option
var auth : any = AUTH;
if(auth != "microsoft" && auth != "mojang" && auth != 'offline') {
    auth = "microsoft";
}

//? Creating the bot
const bot = setUpBot("_Hakari","mc.hypixel.net", PASSWORD, auth || 'microsoft' );

//? When someone types something into the console, send it to the guild chat.
process.stdin.on("data", (data) => {
    bot.chat(data.toString());
});

process.on("exit", (code) => {
    console.log("Process ended with code : " + code);
})