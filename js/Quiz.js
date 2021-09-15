class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.input1.hide();
question.button.hide();
question.title.hide();
    //write code to change the background color here
background("pink")
    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here

 Contestant.getContestantInfo();
    //write condition to check if contestantInfor is not undefined
    console.log("outside if")
if(allContestants !== undefined){
  console.log("inside if")
fill("blue")
textSize(20)
text("*NOTE: Contestant who answered correct is in green colour!",130,230)
    //write code to highlight contest who answered correctly
    var y = 250
    for(var i in allContestants){
      var correctAnswer = "3"
      if(correctAnswer === allContestants[i].answer){
      fill("green")
      }
      else{
      fill("red")
      }
      text(allContestants[i].name+":"+allContestants[i].answer,250,y)
      y = y+30      

    }
}
    //write code to add a note here
    
  }

}
