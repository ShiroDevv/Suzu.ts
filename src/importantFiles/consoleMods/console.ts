//* This is to meet the liscense agreement for you. Just put your name in the modified by part if you modified it.
//? Developer : SuzuDev
//? Modified by :

//? Imports
import process from "process";
import chalk from 'chalk';

//? Exports

/**
 * @params None
 * 
 * !Errors : 
 * 
 * * You can get rid of this file from the code. Since its just adding [LOG], [WARN], and [ERROR] to the start of a message and coloring it, its unneeded but nice.
 *  
 * ! Not a string
 * ! Fix : Convert text into a string before logging
 * 
 */
export default function update () {
    // console.log = function (text : any) {
    //     var oldText = text;
    //     // if(typeof(text) != "string") {
    //     //     try {
    //     //         text = text.toString();
    //     //     } catch(err) {
    //     //         text = oldText;

    //     //         try {
    //     //             JSON.stringify(text);
    //     //         } catch(err) {
    //     //             console.error("Failed converting to string.");
    //     //         }
    //     //     }
    //     // }
    //     try {
    //         process.stdout.write(chalk.greenBright('[LOG] ' + text + "\n"));
    //     } catch(err : any) {
    //         throw new Error(err);
    //     }
    // }
    console.warn = function (text : any) {
        try {
            process.stdout.write(chalk.yellow('[WARN] ' + text + "\n"));
        } catch(err : any) {
            throw new Error(err);
        }
    }

    console.error = function (text : any) {
        try {
            process.stdout.write(chalk.red('[ERROR] ' + text + "\n"));
        } catch(err : any) {
            throw new Error(err);
        }
    }
}