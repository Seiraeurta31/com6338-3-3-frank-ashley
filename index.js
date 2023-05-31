var score = 0
var answer = true
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
        answer = confirm(questionsArr[i].question)
        console.log("question: " + questionsArr[i].question)
        console.log("answer: " + questionsArr[i].answer)
        console.log("response: " + answer)

        
        if(questionsArr[i].answer === true && answer === true){
            score = (score + 1)
        }
        else if(questionsArr[i].answer === false && answer === false){
            score = (score + 1)

        }

    }

    scoreAvg = Math.round((score/questionsArr.length)*100)
    alert('Your final score is ' + Math.floor(scoreAvg) + '%')
}

 