#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import {createSpinner} from 'nanospinner';



const sleep = () => {
    return new Promise((r) =>
     {setTimeout(r,3000)});
};


async function spinAct(){
    const spinner = createSpinner('OK! Counting your words...').start();
    await sleep();
    spinner.stop();
};

async function welcome(){
    let title = chalkAnimation.rainbow("WORD COUNTER"); //start heading
    await sleep();
    title.stop();
}
await welcome();

//To count words
async function countingWords(sentence: string) {
    const myArr = sentence.split(" "); 
    let countValue = myArr.length;
    return countValue;
}


//To take user input and generate output
async function userInput(){
    const answer = await inquirer.
     prompt([
       /* Pass your questions in here */
       {
         type: "input",
         name: "userWords",
         message: "Type your sentence \n",
         
       },
    ]);
     var result = await countingWords(answer.userWords);
     await spinAct();
     console.log(chalk.blue(`There are ${chalk.red(result)} words in your paragraph.`));
}



await userInput();

