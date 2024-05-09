#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let amount = 10000;
console.log(chalk.bgCyanBright.bold("*****   Welcome To Easypaisa Customer Account*****"));
console.log((chalk.bgCyanBright.bold.italic("       ******  Miss Khan    *****    ")));
let balance = 80000;

let accountAns = await inquirer.prompt([{
        name: "easypaisa",
        type: "list",
        messge: chalk.bgCyanBright.bold.italic("select options"),
        choices: ["Transfer money", "Bill payments", "Easy load bundle"]
    }]);
console.log(accountAns);
if (accountAns.easypaisa === "Transfer money") {
    let transferAns = await inquirer.prompt([{
            name: "transfer",
            type: "number",
            message:chalk.italic.bold.bgCyanBright("****=====****     Enter Amount For Transfer    ****=====****"),
        }]);
    amount -= transferAns.transfer;
    console.log(chalk.bgCyanBright.bold.italic("  *****       Money Transfer Successfully........        *****  "));
}
else if (accountAns.easypaisa === "Bill payments") {
    let billAns = await inquirer.prompt([{
            name: "bill amount",
            type: "number",
            messge:chalk.bold.bgBlueBright.italic("<<<<<<<<<<<<<<<<<<    Enter Amount For bill   <<<<<<<<<<<<<<<<<"),
        }]);
    amount -= billAns.billamount;
    console.log(chalk.bold.bgBlueBright("  *-*-*-*-*-*-*-*-*-*    Bill Paid Successfully     *-*-*-*-*-*-*-*-*-*  "));
}
else if (accountAns.easypaisa === "Easy load bundle") {
    let bundleAns = await inquirer.prompt([{
            name: "bundle network",
            type: "list",
            message:chalk.bold.bgBlueBright.italic("*-*-*-*-*-*-*-*-*-*  Enter amount for bundle  *-*-*-*-*-*-*-*-*-*"),
            choices: ["Zong bundle", "Jazz bundle", "Ufone bundle"]
        }]);
    {
        let bundleType = await inquirer.prompt([{
                name: "bundle type",
                type: "list",
                message:chalk.bold.bgBlueBright.italic ("xxxxxxxxxxxxxxxxxx   Select your bundle   xxxxxxxxxxxxxxxxxx"),
                choices: ["Monthly bundle", "Weekly bundle"],
            }]);
        let bundlePrize = await inquirer.prompt([{
                name: "bundle prize",
                type: "list",
                message:chalk.bold.bgBlueBright.italic("xxxxxxxxxxxxxxxxxxxxx   Bundle prize  xxxxxxxxxxxxxxxxxxxx"),
            
                choices: ["1000", "1500", "2000", "2500"]
            }]);
    }
    console.log(chalk.bold.bgGreenBright("    *********  Congratulation bundle successfully activated  *********    "));
}
else {
    console.log(chalk.bold.bgRedBright("    ~**~***~**~***~   Please Select The Right Option   ~***~**~***~**~  "));
}