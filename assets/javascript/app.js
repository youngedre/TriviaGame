//call variables and set 
var q1Ans = false;
var q2Ans = true;
var q3Ans = true;
var q4Ans = true;
var q5Ans = true;
var q6Ans = true;
var q7Ans = true;
var q8Ans = true;
var q9Ans = true;
var q10Ans = true;

// create answer key
var userAnswer = [];
var Ans1 = "Ida";
var Ans2 = "The Drunken Clam";
var Ans3 = "Rupert";
var Ans4 = "Her Skull";
var Ans5 = "Megatron";
var Ans6 = "Adam West High";
var Ans7 = "Quahog";
var Ans8 = "Gilligan";
var Ans9 = "Quagmire";
var Ans10 = "Vinny";
var score = 0;
var timer = 60;
var question;
//run game, hide all questions  
function startGame(){
    timer=60;
        q1Ans = false;
        q2Ans = true;
        q3Ans = true;
        q4Ans = true;
        q5Ans = true;
        q6Ans = true;
        q7Ans = true;
        q8Ans = true;
        q9Ans = true;
        q10Ans = true;
        score = 0;
        QRunning=false;
        $("#Q1").show();
        $("#Q2").hide();
        $("#Q3").hide();
        $("#Q4").hide();
        $("#Q5").hide();
        $("#Q6").hide();
        $("#Q7").hide();
        $("#Q8").hide();
        $("#Q9").hide();
        $("#Q10").hide();

        countDown();
        console.log(timer);
        questionT();
    }
    $(".btn").on("click",function(){
        var text = $(this).attr('value'); 
        userAnswer.splice(0,1, text);
        console.log(userAnswer);
        
    });
    function checkAns(){
        if(userAnswer==Ans1){
            score += 10;
            console.log(score);
        }
        else if (userAnswer==Ans2){
            score +=10;
            console.log(score);
        }
        else if (userAnswer==Ans3){
            score +=10;
            console.log(score);
        }
        else if (userAnswer==Ans4){
            score +=10;
            console.log(score);
        }
        else if (userAnswer==Ans5){
            score +=10;
            console.log(score);
        }
        else if (userAnswer==Ans6){
            score +=10;
            console.log(score);
        }
        else if (userAnswer==Ans7){
            score +=10;
            console.log(score);
        }
        else if (userAnswer==Ans8){
            score +=10;     
            console.log(score);  
        }
        else if (userAnswer==Ans9){
            score +=10;
            console.log(score);
        }
        else if(userAnswer==Ans10){
            score+=10;
            console.log(score);

        }
        
        

    }
    $(".btn").on("click", function hideQs(){
        if (!q1Ans){
            $("#Q1").hide();
            q1Ans = true;
            q2Ans = false;
            $("#Q2").show();
            checkAns();

        }
        else if (!q2Ans){
            $("#Q2").hide()
            q2Ans = true;
            q3Ans = false;
            $("#Q3").show()
            checkAns()
        }
        else if (!q3Ans){
            $("#Q3").hide()
            q3Ans = true;
            q4Ans = false;
            $("#Q4").show()
            checkAns()

        }
        else if (!q4Ans){
            $("#Q4").hide()
            q4Ans = true;
            q5Ans = false;
            $("#Q5").show()
            checkAns()

        }
        else if (!q5Ans){
            $("#Q5").hide()
            q5Ans=true;
            q6Ans = false;
            $("#Q6").show()
            checkAns()

        }
        else if (!q6Ans){
            $("#Q6").hide()
            q6Ans = true;
            q7Ans = false;
            $("#Q7").show()
            checkAns()

        }
        else if (!q7Ans){
            $("#Q7").hide()
            q7Ans = true;
            q8Ans = false;
            $("#Q8").show()
            checkAns()

        }
        else if (!q8Ans){
            $("#Q8").hide()
            q8Ans = true;
            q9Ans = false;
            $("#Q9").show()
            checkAns()

        }
        else if (!q9Ans){
            $("#Q9").hide()
            q9Ans = true;
            q10Ans = false;
            $("#Q10").show()
            checkAns()
        }
        else if (!q10Ans){
            q10Ans=true;
            checkAns()
            alert("You scored "+score+ "/100")
            startGame()
        }
    });

    function questionT(){
        if (!QRunning) {
            timer=60;
            QRunning = true;
            question = setInterval(countDown, 1000);
        }
    }
    //display question timer
    function countDown(){
        timer--;
        $("#displayTimer").html("Time Remaining:" + timer);
        //if not done alert final score
        if(timer === 0){
            alert("Oh No You Ran Out Of Time, You Score is: " + score + "/100");
            
        }
    }
    
startGame();