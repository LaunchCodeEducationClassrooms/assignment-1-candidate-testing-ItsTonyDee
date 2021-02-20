const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride ";
let candidateAnswer = " ";
let questions = [ "1: Who was the first American woman in space? ",
                 "2: True or false: 5000 meters = 5 kilometers? ",
                 "3: (5+3)/2*10 = ? ",
                 "4: Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
                 "5: What is the minimum crew size for the ISS? " ];

let correctAnswers = [ "Sally Ride",
                      "True",
                      "40",
                      "Trajectory",
                      "3" ];

let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("State your name: ");
  console.log("\n");
  
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    for (let i = 0; i < questions.length; i++) {
      candidateAnswers[i] = input.question(questions[i]);
      console.log(`You answered: ${candidateAnswers[i]} \nThe correct answer was: ${correctAnswers[i]} \n`);
    }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 /* if (candidateAnswer.toLowerCase() == correctAnswer.toLowerCase()) {
      console.log("Correct!");
   } else {
      console.log("Sorry, that's incorrect.");
   }*/

  let grade = 0;
  let overall = 0;

  for (let i = 0; i < candidateAnswers.length; i++) 
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      overall += 1;
      grade = (overall/5) * 100;
    }
   
  console.log(`80% required percent to pass.\n`)
  console.log(`Candidate got ${overall}/5 answers correct for an overall of ${grade}%.\n`);


  if (grade >= 80) {
    console.log(`Candidate: Passed the test.`);
  } else {
    console.log(`Candidate: Did not pass the test.`);
  }


  return grade;

}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(candidateName + ", " + "please answer the following to the best of your abilities:");
  console.log("\n");

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};