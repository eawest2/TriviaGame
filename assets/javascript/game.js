//Declare Global Variables
    //time tracker
    var time = 15
    //Working answers array
    var currentAnswers = [0,0,0,0]
    //Correct answers array
    var correctAnswers = [2,3,4,1]
    //final answer tracking
    var correctNum = 0
    var incorrectNum = 0
    var unansweredNum = 0

    //function timer variables
    var timeClock = 0


//Function Logic

    //reset after time over-
    function reset () {
        //release time timer
        clearInterval(timeClock);
        //set time to 45
        time = 45
        //set currentAnswers to [0,0,0,0]
        currentAnswers = [0,0,0,0]
        //set correctNum = 0
        correctNum = 0
        //set incorrectNum = 0
        incorrectNum = 0
        //set unansweredNum = 0
        unansweredNum = 0
        //run start ()
        start();



    };

    //Upon press of the start button-
    function start (){
        timeClock = setInterval(function(){
            time--
            //write displayTime to HTML
            document.getElementById("timer").innerHTML = time;
            console.log(currentAnswers)
        }, 1000);

        //onclick submit, run submit ()
        //if time = 0, run submit () automatically.
        $("#submit").on("click", submit);

        if (time === 0){
            submit ();
        };


    };

    //submit answers for grading-
    function submit () {

        //release time timer
        clearInterval(timeClock);

        //write answers to currentAnswers
        var ans1 = $('input[name=q1]:checked').val();
        currentAnswers.splice(0, ans1);
        // console.log("player ans arr:" + playerAns);
        var ans2 = $('input[name=q2]:checked').val();
        currentAnswers.splice(1, ans2);
        // console.log("player ans arr:" + playerAns);
        var ans3 = $('input[name=q2]:checked').val();
        currentAnswers.splice(2, ans3);
        // console.log("player ans arr:" + playerAns);
        var ans4 = $('input[name=q2]:checked').val();
        currentAnswers.splice(3, ans4);
        console.log(currentAnswers);

        //check currentAnswers array values with for loop
        for (var i = 0; i < correctAnswers.length; i++){
            //if if value of currentAnswers[i] ==== 0, unanswerdNum ++
            if (currentAnswers[i] === 0) {
                unansweredNum++
            }
            //else if value of currentAnswers[i] === correctAnswers[i], correctNum++
            else if (currentAnswers[i] === correctAnswers[i]){
                correctNum++
            }
            //else if value of currentAnswers[i] === 0 && currentAnswers[i] === correctAnswers[i], incorrectNum ++
            else if (currentAnswers[i] !== correctAnswers[i] && currentAnswers[i] !== 0) {
                incorrectNum++
            };
        };
        //write unanswered, correct, and incorrect nums to HTML.
        document.getElementById("correctAns").innerHTML = correctNum;
        document.getElementById("incorrectAns").innerHTML = incorrectNum;
        document.getElementById("unAns").innerHTML = unansweredNum;

        

        //set time to 30
            time = 30
            //timer reduce time-- until end. 
            timeClock = setInterval(function(){
                time--
                //write displayTime to HTML
                document.getElementById("timer").innerHTML = time;
            }, 1000);

        //write restart button to HTML
            //onclick, run reset ()
            //if time = 0, run reset ()
        

    };

start ();
