// 11 steps for this advanced quiz

// 1. Build a function constructor called Question to describe a question. A question should include:
// a) question itself
// b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
// c) correct answer using a number
// 2. Create a couple of questions using the constructor
// 3. Store them all inside an array
// 4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
// 5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
// 6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
// 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
// 8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
// 9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
// 10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
// 11. Display the score in the console. Use yet another method for this.

(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question);
    for (let i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function (ans) {
    ans === this.correct
      ? console.log("Correct")
      : console.log("Not so fast wise guy that is incorrect.");
  };
  const firstQuestion = new Question("Can dogs speak?", ["Yes", "No"], 1);
  const secondQuestion = new Question(
    "What is your dogs name?",
    ["Rosie", "Sandy", "Rhoady"],
    0
  );
  const thirdQuestion = new Question(
    "How does your dog act around other dogs?",
    ["Nervous", "Aggressive", "Excited", "Friendly"],
    1
  );

  let questions = [firstQuestion, secondQuestion, thirdQuestion];

  let randomQuestion = Math.floor(Math.random() * questions.length);

  questions[randomQuestion].displayQuestion();

  const answer = parseInt(prompt("Please select the correct answer!"));
  questions[randomQuestion].checkAnswer(answer);
})();
