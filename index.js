
//Constructor for new quiz objects 
function Question (statement, value) {
    this.question = statement
    this.answer = value
}

//Creating various quiz objects from constructor
var question1 = new Question ('Kittens say "Woof Woof!"', false)
var question2 = new Question ('Cows say "Moooooo"', true)
var question3 = new Question ('Pigs say "Oink Oink"', true)
var question4 = new Question ('Sheep say "Chirp chirp"', false)
var question5 = new Question ('Lambs say "Naaaay"', false)
var question6 = new Question ('Chickens say "Meeeoow"', false)
var question7 = new Question ('Roosters say "Hissss"', false)
var question8 = new Question ('Donkeys say "Hee Haw"', true)
var question9 = new Question ('Ducks say "Quack Quack"', true)


//Adding question objects to array
var questionsArr = [
    question1, 
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
]


//Running quiz
function runQuiz () {

    var finalScore = 0
    var userResponse = true
    var questionCount = 0
    var correctAnswers = 0

    //Looping through array of questions
    for (let i = 0; i <questionsArr.length; i++) {

        userResponse = confirm(questionsArr[i].question)

        if((questionsArr[i].answer === true && userResponse === true) || (questionsArr[i].answer === false && userResponse === false)){
            correctAnswers++
        }

        questionCount ++
    }

    //Calculating final score average & displaying to screen
    finalScore = Math.round((correctAnswers/questionCount)*100)
    alert("Final Score: " + finalScore + "%")

}

 
