class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("True");
    console.log("False");
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("Answer : _____________");
  }
}

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestionChoices();
  });
}

const questions = [
  new BooleanQuestion("is JS Object Oriented"),
  new TextQuestion("Current Version of JS"),
];

printQuiz(questions);
