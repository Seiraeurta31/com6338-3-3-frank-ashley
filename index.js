var correctAnswers = 0
var userResponse = true
var finalScore = 0
var scoreAvg = 0

var question = {
    question: "statement",
    answer: true
}

function Question (statement, value) {
    this.question = statement
    this.answer = value
}

var question1 = new Question ("Kittens say coo coo", false)
var question2 = new Question ("Cows say moo", true)
var question3 = new Question ("Pigs say oink", true)
var question4 = new Question ("Sheep say chirp chirp", false)
var question5 = new Question ("Lambs say Nay Nay", false)
var question6 = new Question ("Chickens say Meow", false)
var question7 = new Question ("Roosters say Moo", false)
var question8 = new Question ("Horses say Nay Nay", true)
var question9 = new Question ("Ducks say Quack Quack", true)



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



function runQuiz () {
    for (let i = 0; i <questionsArr.length; i++) {

        userResponse = confirm(questionsArr[i].question)

        if(questionsArr[i].answer === true && userResponse === true){
            correctAnswers++
        }

        else if(questionsArr[i].answer === false && userResponse === false){
            correctAnswers++
        }
    }


    finalScore = Math.round((correctAnswers/questionsArr.length)*100)
    alert('Final Score: ' + finalScore + '%')

}

 
