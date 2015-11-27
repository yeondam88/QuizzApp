
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
      question: "What is the most famous korea's food?",
      choices: ['Korean-BBQ', 'Kimchi', 'bulgogi', 'rice-cake'],
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
    quizGenerator(currentQuestion);
  });
  

  //Validate the answer
  $('#main-container').on('click', '#option', function(){
      
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



  // //show the questions and options
  // function quiz() {
  //   $('#question').
  // }

  //question counter
  function quizCounter() {

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



