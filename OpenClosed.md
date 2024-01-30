# Open Closed Principle

Code should be open to extension but closed for modification

We can use Decorator design pattern

```javascript
function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);

    switch (question.type) {
      case "boolean":
        console.log("True");
        console.log("False");
        break;

      case "text":
        console.log("Answer : _____________");
    }
  });
}

const questions = [
  {
    type: "boolean",
    description: "is JS Object Oriented",
  },
  {
    type: "text",
    description: "Current Version of JS",
  },
];

printQuiz(questions);
```

if we want to another question type in the above example we cannot go on to modify the printquiz function

instead we can create a class for each question type

```javascript
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
```
