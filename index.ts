#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//Asking questions friom users to inquirer
const answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber"},
    { message: "Enter Second Number", type:"number", name: "secondNumber"},
    {
        message: "Select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);

//conditional statements If-Else

if(answers.operator === "Addition"){
console.log(answers.firstNumber + answers.secondNumber)
} 
else if (answers.operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("Invalid Input")
}