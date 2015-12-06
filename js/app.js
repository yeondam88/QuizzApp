
$(document).ready(function() {

  var questions = [
    //question 1
    {
      question: "Where is the Korea's capitol?",
      choices: ['Seoul', 'DaeJeon', 'Gwang-Ju', 'Jeju'],
      correct: 0

    },
    //question 2
    {
      question: "What is the most famous korea's food?",
      choices: ['Korean-BBQ', 'Kimchi', 'bulgogi', 'rice-cake'],
      correct: 1

    },
    //question 3
    {
      question: "North Korea and South Korea are same country? ?",
      choices: ['True', 'False'],
      correct: 1

    },
    //question 4
    {
      question: "What is the biggest company in South Korea? ",
      choices: ['LG', 'Hyundai', 'SK', 'Samsung'],
      correct: 3

    },
    //question 5
    {
      question: "Which continent South Korea located in ?",
      choices: ['Asia', 'Europe', 'America', 'Africa'],
      correct: 0

    },
    //question 6
    {
      question: "What year the South Korea gained independence from Japan?",
      choices: ['1950', '1960', '1963', '1945'],
      correct: 3

    },
    //question 7
    {
      question: "Who created Korean language called 'Hangul'?",
      choices: ['Sejong', 'Gojong', 'Taejong', 'JeongJo'],
      correct: 0

    },
    //question 8
    {
      question: "How to say 'Hello' in Korean?",
      choices: ['An Nyung', 'Jalga', 'Sa rang hae yo', 'Go ma wuh yo'],
      correct: 0

    },
    //question 9
    {
      question: "Who is the most famous soccer player in Korea? ",
      choices: ['Cha Bum Keun', 'Ahn Jung Hwan', 'Ji sung Park', 'Lee Dong Kuk'],
      correct: 2

    },
    //question 10
    {
      question: "What is Korea Currency?",
      choices: ['Dollar', 'Euro', 'Won', 'Yen'],
      correct: 2

    }
  ];
  
  /*-----Variables-----*/
  var feedback = "Well done";
  var questionNum = 0;
  var questionTotal = questions.length;
  var correctTotal = 0;
  var currentQuestion = questionNum;


  $('#result').hide();
  $('#main-container').hide();
  $('#intro').show();
  
  /*----- Start Quiz ------*/
  $('#start-btn').click(function(){
    $('#intro').hide();
    $('#result').hide();
    $('#main-container').show();
    quizGenerator(questionNum);
  });
  
  $('#result-btn').click(function(){

    var answer = $("input[id='option']:checked").val();
      console.log(answer);
    if (answer == undefined) {
      alert('Please select the answer!');
    } else {
      quizGenerator(currentQuestion);
      
    }

  });
  

  //Validate the answer
  $(document).on('click', '#option', function(){

      var answer = $("input[id='option']:checked").val();
      var correctAnswer = questions[(currentQuestion -1)].correct;
      console.log("Your Answer is: " + answer);
      console.log("Correct Answer is: " + correctAnswer);
      if (answer == correctAnswer){
      
        correctTotal++;
      }
  });
  
  
  //Show the intro page and start button
  function gameStart() {
    $('#intro').hide();
    $('#result').hide();
    $('#main-container').show();
  }


  //Score tracker
  function scoreTracker() {
    if (questions[question].correct){
      correctTotal++;
    }
  }

  //display result
  function result() {
    $('#intro').hide();
    $('#main-container').hide();
    $('#result').show();
    $('#result h2').text("Your Score is " + correctTotal + " Out of " + questionTotal);
    
    //Feedback depends on how many questions got right by User
    if ( correctTotal >= 8 ) { 
      $('#result').append("<p>Great Job!! You almost got every questions!!</p>");
    } else if ( correctTotal >= 5 && correctTotal < 8 ){
      $('#result').append("<p>Nice Job!! You got quite a few questions!!</p>");
    } else if ( correctTotal > 0 && correctTotal < 5 ){
      $('#result').append("<p>Nice Try!! Lets study more about Korea!!</p>");
    } else {
      $('#result').append("<p>Come On!! You did not answer anything!! </p>");
    }
  }

  //display quiz container
  function quizGenerator(questionNumValue) {
    if((currentQuestion + 1) <= questionTotal) {
      $('#choices').empty();
      $('#questionNum').text("Question " + ((questionNumValue + 1) + " of" + questionTotal));
      $('#question').text(questions[questionNumValue].question);
  
      var choiceTotal = questions[questionNumValue].choices.length;
      for (var i = 0; i < choiceTotal; i++){
        //displays the answer choices
        $('#choices').append("<input type='radio' id='option' name='option' value=" + i + ">" + " " + questions[questionNumValue].choices[i] + "<br>");
      }
      currentQuestion++;
    } else {
      result();
    }
  }
  
  
});



