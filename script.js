var startBtn = document.getElementById('start-btn')
var startPage = document.getElementById('start-page')
var questionsPage = document.getElementById('questions')
var question1 = document.getElementById('q1-w')
var question2 = document.getElementById('q2-w')
var question3 = document.getElementById('q3-w')
var rightAnswer = document.getElementById('q4-r')
var parStart = document.getElementById('p-1')

startBtn.addEventListener('click', function hideStart(){
questionsPage.classList = 'show'
startPage.classList = 'hidden'
    var timeleft = 60;
    var countDown = document.getElementById('timer')
var minuteTimer = setInterval(function(){
  if(timeleft >= 0){
     document.getElementById('timer').innerHTML ="Timer " + timeleft ;
  }
  if(timeleft < 0){
    document.getElementById('timer').innerHTML ="Time up" ;
 }
  timeleft -= 1;
}, 1000);
})


question1.addEventListener('click', function swapQuestions(){
if(question1){
  parStart.innerHTML = "How long is an Olympic swimming pool?";
  question1.innerHTML ="50 Meters";
  question2.innerHTML = "70 Feet";
  question3.innerHTML ="47.3 Meters";
  rightAnswer.innerHTML ="60 Feet"; 
  
}
})
question2.addEventListener('click', function swapQuestions(){
if(question2){
  parStart.innerHTML = "How long is an Olympic swimming pool?";
  question1.innerHTML ="50 Meters";
  question2.innerHTML = "70 Feet";
  question3.innerHTML ="47.3 Meters";
  rightAnswer.innerHTML ="60 Feet"; 
}
})
question3.addEventListener('click', function swapQuestions(){
if(question3){
  parStart.innerHTML = "How long is an Olympic swimming pool?";
  question1.innerHTML ="50 Meters";
  question2.innerHTML = "70 Feet";
  question3.innerHTML ="47.3 Meters";
  rightAnswer.innerHTML ="60 Feet"; 
}
})
rightAnswer.addEventListener('click', function swapQuestions(){
if(rightAnswer){
  parStart.innerHTML = "How long is an Olympic swimming pool?";
  question1.innerHTML ="50 Meters";
  question2.innerHTML = "70 Feet";
  question3.innerHTML ="47.3 Meters";
  rightAnswer.innerHTML ="60 Feet"; 
}
})









