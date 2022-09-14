import { commandList } from "./commandImports.js";

export default async function commandHandler(client : any) {
    const arrayOfSlashCommands : any = [];
    for(let i = 0; i < commandList.length; i++) {
        const command = commandList[i];

        arrayOfSlashCommands.push(command);
    }
    client.once("ready", async () => {
        await client.application.commands.set(arrayOfSlashCommands);
    })
}