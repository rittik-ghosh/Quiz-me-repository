var readlineSync = require('readline-sync');
var score = 0;
var name = readlineSync.question("What is your name??");
console.log("\n");
console.log("Wecome "+name+" to DO YOU KNOW RITTIK?"+"\n");

var highscore =
  {
    name:"rittik",
    score:3
  }
;
function highs(score,hscore){
  if(score>hscore){
    console.log("Congratulations "+name+" you have made a new high score of "+score+"\n");
  }
  return 0;
}

function play (question, answer){
  var ans = readlineSync.question(question);
  if(ans.toUpperCase()===answer.toUpperCase()){
      console.log("You are right!!!");
      score++;
  }
  else{
      console.log("Sorry you missed!!!");
  }
  console.log("Your current score is: "+score);
  console.log("----------------------------"+"\n");
  return 0;
};

var questionOne ={
  question :"Where have I done my schooling from?",
  answer:"DPS"
};
var questionTwo ={
  question :"Where have I done my graduation from?",
  answer: "MIT Manipal"
};
var questionThree ={
  question :"Where I am from?",
  answer: "Ranchi"
};

var questions = [questionOne,questionTwo,questionThree];

for(var i=0;i<questions.length;i++){
  var currentques= questions[i];
  play(currentques.question,currentques.answer);
};

console.log("Hi "+name+" your final score is: "+score+" and the highscore is "+highscore.score );

highs(score,highscore.score);

