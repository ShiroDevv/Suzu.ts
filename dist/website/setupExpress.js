//* This is to meet the liscense agreement for you. Just put your name in the modified by part if you modified it.
//? Developer : SuzuDev
//? Modified by :
//! I am not that good with express. This will become a large file for now, I might try to seperate it at some point.
//? importing my files
import getNetworth from "./networth/calculateNetworth.js";
//? Importing react
import express from "express";
import path from "path";
import glob from "glob";
//? Creating an app
const app = express();
//? Creating a export thing
export function setupReact(port) {
    //? Listening to the port
    app.listen(port, () => {
        console.log(`Started express on port ${port}`);
    });
    //? Creating a array to hold the functions.
    var functionArray = [];
    //? Getting the files
    //? I forgot to record this but it took longer than I would like to say.
    app.use(express.static('public'));
    glob(`${process
        .cwd()
        .toString()
        .replaceAll("\\", "/")}/website/routes/extraPages/docs/**/*.html`, (err, files) => {
        for (var i = 0; i < files.length; i++) {
            var dirname = files[i].replace("/home/suzudev/Desktop/Coding/Suzu/website/routes/extraPages/docs", "");
            functionArray[i] = (name) => {
                ;
                app.get("/docs" + name.replace(".html", ""), (req, res) => {
                    res.sendFile(process.cwd().toString().replaceAll("\\", "/") +
                        `/website/routes/extraPages/docs${name}`);
                });
                return "done";
            };
            var text = functionArray[i](dirname);
            if (!text) {
                while (!text) {
                    continue;
                }
            }
        }
        //? if they want to see the docs
        app.use("/docs", (req, res) => {
            res.sendFile(path.join(process.cwd().toString().replaceAll("\\", "/") +
                "/website/routes/extraPages/docs.html"));
        });
        app.use("/experiments/selfDrivingCar", (req, res) => {
            res.sendFile(path.join(process.cwd().toString().replaceAll("\\", "/") +
                "/website/routes/extraPages/testing/games/car.html"));
        });
        app.use("/experiments", (req, res) => {
            res.sendFile(path.join(process.cwd().toString().replaceAll("\\", "/") +
                "/website/routes/extraPages/experiments.html"));
        });
        app.get("/api/networth", async (req, res) => {
            //TODO Create a base /api page to show routes and uses for those routes.
            const username = req.query.username;
            const profileName = req.query.profile;
            if (!username)
                return res.send("Error : Missing username");
            res.send(await getNetworth(username, profileName));
        });
        //? Using the index.html file.
        app.use("/", (req, res) => {
            res.sendFile(path.join(process.cwd().toString().replaceAll("\\", "/") +
                "/website/routes/index.html"));
        });
    });
}
