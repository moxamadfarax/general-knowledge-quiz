var startBtn = document.getElementById('start-btn')
var btn1 = document.getElementById('answer1 button')
var btn2 = document.getElementById('answer2 button')
var btn3 = document.getElementById('answer3 button')
var btn4 = document.getElementById('answer4 button')
var nextBtn = document.getElementById('next-btn')
var scoreBtn = document.getElementById('score-btn')
var startPage = document.getElementById('start-page')
var questionsPage = document.getElementById('questions-page')
var scorePage = document.getElementById('score-page')

startBtn.addEventListener('click', function startQuiz(){
  questionsPage.classList = 'show'
  startPage.classList = 'hidden'
    var timeleft = 60;
    var countDown = document.getElementById('timer')
    var minuteTimer = setInterval(function(){
      if(timeleft >= 0){
         document.getElementById('timer').innerHTML ="Timer " + timeleft ;}
      if(timeleft < 0){
        document.getElementById('timer').innerHTML ="Time up" ;}
      timeleft -= 1;});});
       
scoreBtn.addEventListener('click', function navToScorePage(){
    startPage.classList = 'hide'
})
















