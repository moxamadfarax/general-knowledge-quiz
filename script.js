var startBtn = document.getElementById('start-btn')
var startPage = document.getElementById('start-page')
var questionsPage = document.getElementById('questions')
questionsPage.classList = 'hidden'


startBtn.addEventListener('click', function hideStart(){
questionsPage.classList = 'show'
startPage.classList = 'hidden'
    var timeleft = 60;
    var countDown = document.getElementById('timer')
var minuteTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById('timer').innerHTML = "Finished";
  } else {
    document.getElementById('timer').innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

})

var countDown = document.getElementById('timer')






