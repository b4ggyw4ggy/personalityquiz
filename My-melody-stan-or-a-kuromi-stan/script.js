
var kuromiScore = 0;
var melodyScore = 0;

var questionCount = 0;

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var restart = document.getElementById("restart")

q1a1.addEventListener("click",addkuromi);
q1a2.addEventListener("click",addmelody);
q2a1.addEventListener("click",addmelody);
q2a2.addEventListener("click",addkuromi);
q3a1.addEventListener("click",addmelody);
q3a2.addEventListener("click",addkuromi);

restart.addEventListener("click", restartQuiz);

function addkuromi() {
  kuromiScore += 1;
  questionCount += 1;

console.log("questionCount = " + questionCount + " melodyScore = " +melodyScore, "kuromi: "+kuromiScore);

  if (questionCount == 3) {
  console.log("the quiz is done")
  updateResult();
}
}

function addmelody() {
  melodyScore += 1;
  questionCount += 1;

console.log ("Questions: " + questionCount, + "kuromiScore, "melody:"+melodyScore;)

  if (questionCount == 3) {
  console.log("the quiz is done")
  updateResult();
  }
}

if ( kuromiScore >= 2) {
  console.log("You are a kuromi stan!");
} else if (melodyScore >= 2) {
  console.log("You are a melody stan!");
}

function updateResult() {
  if (kuromiScore >= 2) {
        result.innerHTML = "You are a kuromi stan!";
        console.log("You are a kuromi stan!");
        } else if (melodyScore >= 2) {
          result.innerHTML = "You are a melody stan!";
          console.log("You are a melody stan!");
          }
}

function restartQuiz() {
  result.innerHTML = "you are a...";
  kuromiScore = 0;
  melodyScore = 0;
  questionCount = 0;
  enableQ1();
  enableQ2();
  enableQ3();
}









