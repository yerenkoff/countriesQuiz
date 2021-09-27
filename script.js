let bd = {
    start: {
        title: "What weather do you like?",
        answers: {
            hot: {
                title: "Do you like countries with big population?",
                answers: {
                    yes: {
                        title: "China",
                    },
                    no: {
                        title: "Algeria",
                    },
                    "i don’t know": {
                        title: "Israel",

                    }
                }
            },
            warm: {
                title: "Do you like big, medium or small countries?",
                answers: {
                    big: {
                        title: "USA",
                    },
                    medium: {
                        title: "Australia",
                    },
                    small: {
                        title: "France",
                    },
                }
            },
            cold: {
                title: "Do you like big, medium or small countries?",
                answers: {
                    big: {
                        title: "Russia",
                    },
                    small: {
                        title: "Iceland",
                    },
                }

            },
        }
    }
}

let chain = "bd";
let questionTitle = document.getElementById("questionTitle");
let quizForm = document.getElementById("quizForm");

function getQuiz(answer) {
    chain += '["' + answer.toLowerCase() + '"]'
    console.log(chain);
    currentQuestion = eval(chain)
    if ("answers" in currentQuestion) {
        questionTitle.innerHTML = currentQuestion.title;
    } else {
        questionTitle.innerHTML = "Your country is " + currentQuestion.title;
    }
    let buttons = "";
    for (answer in currentQuestion.answers) {
        buttons += '<button type="button" onclick="getQuiz(this.innerHTML)">' + answer + '</button>'
    }
    quizForm.innerHTML = buttons
    chain += ".answers";
}

function newGame() {
    chain = "bd";
    questionTitle.innerHTML = "Press this button to start";
    quizForm.innerHTML = '<button type="button" onclick="getQuiz(this.innerHTML)">Start</button>';
}