var currentQuiz = 0;
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

startBtn.addEventListener('click', function navQuizPage(){
  questionsPage.classList = 'show';
  startPage.classList = 'hidden';
    var timeleft = 60;
    var countDown = document.getElementById('timer');
    var minuteTimer = setInterval(function(){
      if(timeleft >= 0){
         document.getElementById('timer').innerHTML ="Timer " + timeleft ;}
      if(timeleft < 0){
        document.getElementById('timer').innerHTML ="Time up" ;}
      timeleft -= 1},  1000);
      
      var currentQuizData = quizData[currentQuiz];
      questionNumber.innerHTML = currentQuizData.questionNumber
      questionEl.innerHTML = currentQuizData.question;
      btn1.innerHTML = currentQuizData.a;
      btn2.innerHTML = currentQuizData.b;
      btn3.innerHTML = currentQuizData.c;
      btn4.innerHTML = currentQuizData.d;
});

function nextQuestion(){
    currentQuiz++;
    var currentQuizData = quizData[currentQuiz];
    questionNumber.innerHTML = currentQuizData.questionNumber
    questionEl.innerHTML = currentQuizData.question;
    btn1.innerHTML = currentQuizData.a
    btn2.innerHTML = currentQuizData.b
    btn3.innerHTML = currentQuizData.c
    btn4.innerHTML = currentQuizData.d

};

btn1.addEventListener('click', () => {
    nextQuestion()
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

var quizData = [
    {   
        currentQuestion: 1,
        questionNumber:'Question 1',
        question: 'Which of these animals cannot jump?',
        a: 'Rhino',
        b: 'Elephant',
        c: 'Molerat',
        d: 'Giraffe',
        correct: 'b',
    },
    {
        currentQuestion: 1,
        questionNumber:'Question 2',
        question: 'What is the capital of austria?',
        a: 'Vienna',
        b: 'Bucharest',
        c: 'Muncih',
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
        question: 'Which of these countries is landlocked?',
        a: 'Jordan',
        b: 'Chad',
        c: 'Burundi',
        d: 'Botswana',
        correct: 'd',
    },    

];


