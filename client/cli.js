const { exec } = require("child_process");
const { existsSync } = require("fs");
const { parseArguments } = require("./argument-parser");

const arguments = parseArguments();
const command = arguments.command;
const app = arguments.app || "auth";
const env = arguments.env || "local";
const appPath = `./projects/${app}`;

if (!command) {
  console.log("Command argument is required!");
  return;
}

if (existsSync(appPath)) {
  if (app === "shared") {
    console.log("The shared project is not runnable!");
  } else {
    console.log(`Starting ${app}...`);
    if (command === "start") {
      const envConfigPath = `./environments/${env}.environment.ts`;

      if (existsSync(envConfigPath)) {
        exec(`cat ${envConfigPath} > ${appPath}/config.ts`);
      } else {
        throw new Error(`Unknown environment ${env}`);
      }
    }

    exec(`cd ${appPath} && npx react-scripts ${command}`);
  }
} else {
  console.log(`App ${app} does not exist!`);
}
