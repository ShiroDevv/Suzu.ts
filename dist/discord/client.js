//* This is to meet the liscense agreement for you. Just put your name in the modified by part if you modified it.
//? Developer : SuzuDev
//? Modified by :
//? Importing modules
import { Client, Collection, GatewayIntentBits } from 'discord.js';
import reactionRoles from './verifyThings/serverReactions.js';
//! This is in development. May not work.
/**
 * ! THE PARAM, TYPE, OUTPUT, USE, AND ERRORS ARE GOING TO BE REMOVED ONCE I MAKE A DOCS PAGE.
 * ! THE MAIN CODE WILL STILL HAVE COMMENTS, BUT NOT THE OTHERS. IF YOU ARE CONFUSED ON WHAT THEY DO
 * ! CHECK THE DOCS : https://suzudev.000webhostapp.com
 */
/**
 * @param intents
 * @Type : Array : <string>
 *
 * @Output : Array<GatewayIntentBits>
 *
 * ? Use
 * * For people who were fond of the discord.jsv12 / 13 intents way (Like me.) I made it so you can use strings with an oversized function.
 *
 * ! Errors : Invalid intents
 * ! Thrown at : client.ts (setupIntents)
 */
/**
 * ? I forgot to add comments to the part where I convert the types, so here we go.
 *
 * ? This part of the code checks the string in the array for the intent.
 *  if(intents[i].toLowerCase() == 'dmreactions') {
 *       ? This part takes the intent given, and turns it into the corresponding gatewayintent
 *       returnIntents.push(GatewayIntentBits.DirectMessageReactions);
 *       ? Stops the code from going through the rest of the intents, by going to the next loop.
 *       continue;
 *  }
 */
export function setupIntents(intents) {
    //? Creating the return intents array.
    var returnIntents = [];
    //? Checking if the user sent the function intents
    if (intents == [] || !intents) {
        console.warn("No intents were given. Setting intents to 'ALL'");
        intents = ['ALL'];
    }
    //? Going throught the intents
    for (var i = 0; i < intents.length; i++) {
        //? If the user sent the all intents, or the code set it to all.
        if (intents[i].toLowerCase() == 'all') {
            returnIntents.push(GatewayIntentBits.DirectMessageReactions);
            returnIntents.push(GatewayIntentBits.DirectMessageTyping);
            returnIntents.push(GatewayIntentBits.DirectMessages);
            returnIntents.push(GatewayIntentBits.GuildBans);
            returnIntents.push(GatewayIntentBits.GuildEmojisAndStickers);
            returnIntents.push(GatewayIntentBits.GuildIntegrations);
            returnIntents.push(GatewayIntentBits.GuildInvites);
            returnIntents.push(GatewayIntentBits.GuildMembers);
            returnIntents.push(GatewayIntentBits.GuildMessageReactions);
            returnIntents.push(GatewayIntentBits.GuildMessageTyping);
            returnIntents.push(GatewayIntentBits.GuildMessages);
            returnIntents.push(GatewayIntentBits.GuildPresences);
            returnIntents.push(GatewayIntentBits.GuildScheduledEvents);
            returnIntents.push(GatewayIntentBits.GuildVoiceStates);
            returnIntents.push(GatewayIntentBits.GuildScheduledEvents);
            continue;
        }
        if (intents[i].toLowerCase() == 'dmreactions') {
            returnIntents.push(GatewayIntentBits.DirectMessageReactions);
            continue;
        }
        if (intents[i].toLowerCase() == 'dmtyping') {
            returnIntents.push(GatewayIntentBits.DirectMessageTyping);
            continue;
        }
        if (intents[i].toLowerCase() == 'dm') {
            returnIntents.push(GatewayIntentBits.DirectMessages);
            continue;
        }
        if (intents[i].toLowerCase() == 'bans') {
            returnIntents.push(GatewayIntentBits.GuildBans);
            continue;
        }
        if (intents[i].toLowerCase() == 'emojis') {
            returnIntents.push(GatewayIntentBits.GuildEmojisAndStickers);
            continue;
        }
        if (intents[i].toLowerCase() == 'integrations') {
            returnIntents.push(GatewayIntentBits.GuildIntegrations);
            continue;
        }
        if (intents[i].toLowerCase() == 'invites') {
            returnIntents.push(GatewayIntentBits.GuildInvites);
            continue;
        }
        if (intents[i].toLowerCase() == 'members') {
            returnIntents.push(GatewayIntentBits.GuildMembers);
            continue;
        }
        if (intents[i].toLowerCase() == 'guildmessagereactions') {
            returnIntents.push(GatewayIntentBits.GuildMessageReactions);
            continue;
        }
        if (intents[i].toLowerCase() == 'guildmessagetyping') {
            returnIntents.push(GatewayIntentBits.GuildMessageTyping);
            continue;
        }
        if (intents[i].toLowerCase() == 'guildmessages') {
            returnIntents.push(GatewayIntentBits.GuildMessages);
            continue;
        }
        if (intents[i].toLowerCase() == 'presences') {
            returnIntents.push(GatewayIntentBits.GuildPresences);
            continue;
        }
        if (intents[i].toLowerCase() == 'scheduledevents') {
            returnIntents.push(GatewayIntentBits.GuildScheduledEvents);
            continue;
        }
        if (intents[i].toLowerCase() == 'voicestates') {
            returnIntents.push(GatewayIntentBits.GuildVoiceStates);
            continue;
        }
        if (intents[i].toLowerCase() == 'webhooks') {
            returnIntents.push(GatewayIntentBits.GuildWebhooks);
            continue;
        }
        if (intents[i].toLowerCase() == 'guilds') {
            returnIntents.push(GatewayIntentBits.Guilds);
            continue;
        }
        if (intents[i].toLowerCase() == 'messagecontent') {
            returnIntents.push(GatewayIntentBits.MessageContent);
            continue;
        }
        throw new Error("Invalid intents.");
    }
    return returnIntents;
}
/**
 * @param Token
 * @type String
 *
 * @param intents
 * @type Array<String>
 *
 * @output client : Client<boolean>
 *
 * ? Use :
 * * Create a client and return it, with just a single line. Meant to run the above function.
 *
 * ! Errors :
 * ! Invalid intents :
 * ! Thrown at : client.ts (setupIntents)
 *
 * ! Invalid Intents (Discord.js) :
 * ! Thrown at : discord.js
 * ! Fix : Manually put in intents in main file, or check my code for incorrect spelling.
 *
 * ! Missing token
 * !Thrown at : client.ts (clientSetup)
 * ! Fix : Add token into perameters.
 */
export default function clientSetup(token, intents) {
    if (!token) {
        throw new Error("Function missing token (Sorry for this, I had to make it take undefined so people can use environment variables)");
    }
    // *  Correcting the intents
    var correctedIntents = [];
    correctedIntents = setupIntents(intents);
    //* creating a client with the corrected intents
    const client = new Client({
        intents: correctedIntents
    });
    //* Creating collections for the global variables.
    client.commands = new Collection();
    client.slashCommands = new Collection();
    client.on("ready", async () => {
        console.log("Logged in as " + client.user.tag + "~");
        await reactionRoles(client, "");
    });
    //* Exporting the client.
    client.login(token);
    return client;
}
