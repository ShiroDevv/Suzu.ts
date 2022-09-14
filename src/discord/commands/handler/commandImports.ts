import { info } from "../slashCommands/info/info.js";

//? Exporting it as a default so its easier to make the things for the commands.
export default interface Commands { 
    name : string;
    options : Array<{
        name : string;
        description : string;
        type : string;
        required : boolean;
    }> | undefined;
    description : string;
    run : Function;
    aliases : string | undefined;
    messageCommand : boolean;
}

export const commandList: Array<Commands> = [
    info
];