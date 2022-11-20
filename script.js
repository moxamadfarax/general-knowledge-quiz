var currentQuiz = 0;
var currentScore = 0;
var startBtn = document.getElementById('start-btn');
var btn1 = document.getElementById('answer1');
var btn2 = document.getElementById('answer2');
var btn3 = document.getElementById('answer3');
var btn4 = document.getElementById('answer4');
var nextBtn = document.getElementById('next-btn');
var scoreBtn = document.getElementById('score-page-btn');
var homeBtn = document.getElementById('home-page-btn');
var startPage = document.getElementById('start-page');
var questionsPage = document.getElementById('questions-page');
var scorePage = document.getElementById('score-page');
var questionNumber = document.getElementById('question-number');
var questionEl = document.getElementById('question');
var timer = document.getElementById('timer')
var answer = document.querySelectorAll('quiz-answer')
var submitScoreBtn = document.getElementById('submit-score-btn')
var nameInput = document.getElementById('name-input')
var timeleft = 60;
var quizData = [
    {   
        questionNumber:'Question 1',
        question: 'Which of these animals cannot jump?',
        a: 'Rhino',
        b: 'Elephant',
        c: 'Molerat',
        d: 'Giraffe',
        correct: 'b',
    },
    {
        questionNumber:'Question 2',
        question: 'What is the capital of Austria?',
        a: 'Vienna',
        b: 'Bucharest',
        c: 'Munich',
        d: 'Venice',
        correct: 'a',
    },
    {  
        questionNumber:'Question 3',
        question: 'Which prophet parted the red sea?',
        a: 'Jesus',
        b: 'Noah',
        c: 'Moses',
        d: 'Muhammad',
        correct: 'c',
    },
    {
        questionNumber:'Question 4',
        question: 'Which shape is used for stop signs?',
        a: 'Octagon',
        b: 'Hexagon',
        c: 'Heptagon',
        d: 'Pentagon',
        correct: 'a',
    },    
    {
        questionNumber:'Question 5',
        final: '5',
        question: 'Which of these countries is landlocked?',
        a: 'Jordan',
        b: 'Chad',
        c: 'Burundi',
        d: 'Botswana',
        correct: 'd',
    },    

]; 
function countDown (){
    var minuteTimer = setInterval(function(){
        if(timeleft >= 0){timer.innerHTML ="Timer " + timeleft ;}
        if(timeleft <= 0){
            questionsPage.classList = 'hidden';
            startPage.classList = 'hidden';
            scorePage.classList = 'show';
        }
        timeleft -= 1},  1000);
}
function nextQuestion(){
    currentQuiz++;
    const currentQuizData = quizData[currentQuiz];
    questionNumber.innerHTML = currentQuizData.questionNumber
    questionEl.innerHTML = currentQuizData.question;
    btn1.innerHTML = currentQuizData.a
    btn2.innerHTML = currentQuizData.b
    btn3.innerHTML = currentQuizData.c
    btn4.innerHTML = currentQuizData.d
    answer = currentQuizData.correct
    console.log(answer)
    currentScore++;
    console.log(currentScore)
    finalQuestion.value = currentQuizData.final
};
    
startBtn.addEventListener('click', function navQuizPage(){
    
    questionsPage.classList = 'show';
    startPage.classList = 'hidden';
    countDown();
    var currentQuizData = quizData[currentQuiz];
    questionNumber.innerHTML = currentQuizData.questionNumber
    questionEl.innerHTML = currentQuizData.question;
    btn1.innerHTML = currentQuizData.a
    btn2.innerHTML = currentQuizData.b
    btn3.innerHTML = currentQuizData.c
    btn4.innerHTML = currentQuizData.d
    return
});
btn1.addEventListener('click', () => {
    currentQuiz++;
    const currentQuizData = quizData[currentQuiz];
    questionNumber.innerHTML = currentQuizData.questionNumber
    questionEl.innerHTML = currentQuizData.question;
    btn1.innerHTML = currentQuizData.a
    btn2.innerHTML = currentQuizData.b
    btn3.innerHTML = currentQuizData.c
    btn4.innerHTML = currentQuizData.d
    answer = currentQuizData.correct
    console.log(answer)
    currentScore++;
    console.log(currentScore)

if(currentQuizData.final === true){
    homeBtn.addEventListener('click', function navHomePage(){
        startPage.classList = 'show';
        questionsPage.classList = 'hidden';
        scorePage.classList = 'hidden';
    })

}
})
btn2.addEventListener('click', () => {
nextQuestion()
})
btn3.addEventListener('click', () => {
nextQuestion()
})
btn4.addEventListener('click', () => {
nextQuestion()
})
console.log(currentQuiz)

scoreBtn.addEventListener('click', function navScorePage(){
    questionsPage.classList = 'hidden';
    startPage.classList = 'hidden';
    scorePage.classList = 'show';
})

homeBtn.addEventListener('click', function navHomePage(){
    startPage.classList = 'show';
    questionsPage.classList = 'hidden';
    scorePage.classList = 'hidden';
})

var scoreData = [0]

var nameInput = document.querySelector("#score-text");
var submitBtn = document.querySelector("#score-form");
var clearBtn = document.querySelector("#score-list");
var scoreCount = document.querySelector("#score-count");

var scores = [];
function renderScoreBox() {
  clearBtn.innerHTML = "";
  scoreCount.textContent = scores.length;
  
  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];
    var li = document.createElement("li");
    li.textContent = score;
    li.setAttribute("data-index", i);
    var button = document.createElement("button");
    button.textContent = "Clear";
    li.appendChild(button);
    clearBtn.appendChild(li);
}}
function init() {
    var storedScore = JSON.parse(localStorage.getItem("Score"));
    if (storedScore !== null) {
      scores = storedScore;
    }
    renderScoreBox();
}
function storeScores() {
    localStorage.setItem("score", JSON.stringify(scores));
}
submitBtn.addEventListener("submit", function(event) {
    event.preventDefault();
    var scoreText = nameInput.value.trim();
    if (scoreText === "") {
      return;
    }
    scores.push(scoreText);
    nameInput.value= "";
   
    storeScores();
    renderScoreBox();
});
clearBtn.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("button") === true) {
      var index = element.parentElement.getAttribute("data-index");
      scores.splice(index, 1);

      storeScores();
      renderScoreBox();
    }
});
  
  init();

