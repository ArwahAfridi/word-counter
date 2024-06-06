// import inquirer from "inquirer";

// const answers: {
//     sentence: string
// } = await inquirer.prompt([
//     {

//         name: "sentences",
//         type: "input",
//         message: "Enter your sentence to count the word:"
//     }
// ])
// const words = answers.sentence.trim().split(" ")
// console.log(words)

import inquirer from "inquirer";


function counter(paragraph:string){
   let  freeWhiteSpace = paragraph.replace(/\s/g,"")

   return freeWhiteSpace
}

console.log(counter("hello Amir"))



