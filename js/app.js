$(document).ready(function(){

  /*---create random number---*/
  var randomNum = Math.floor((Math.random() * 100) + 1);
  console.log(randomNum);

  /*---new Game---*/
  $(".new").click(function(){
    location.reload();
  });

/*---guess submit function---*/ //guess started to change to the number because I had set the selector as the button
$("form").submit(function (event) {
  event.preventDefault();

  var userGuess = $("#userGuess").val();
  if (userGuess !== "" && !$.isNumeric(userGuess)) {
    alert("That's not a number!?!");
  }

  /*---count guess---*/
  var count = 0;
  var guessCount = $("form").submit(function(){
    count++;
  });
 
 /*---userGuess range---*/
  var difference =  Math.abs(userGuess - randomNum); 

  if (difference == 0) {
    setFeedback("You got it!");
  }
  else if (difference <=3 && difference > 0) { //less than 3
    setFeedback("Scolding close!");
  }
  else if (difference <=5 && difference > 0) { //less than 5
    setFeedback("You're sizzling!");
  }

  else if (difference <=10){ //less than 10
    setFeedback("You're getting warmer.");
  } 
  else if (difference <=20 && difference >=10){ //less than 20 & greater than 10
    setFeedback("Getting warm.");
  }
  else if (difference <=30 && difference >=20) {//less than 30 & greater than 20
    setFeedback("Getting chilly!");
  }
  else if (difference >=40 && difference >=30) { //less than 40 & greater than 30
    setFeedback("You're very cold!");
  }
  else {
    setFeedback("You're freezing cold!");
  }

  /*--- Set the feedback ---*/
  function setFeedback(feedback) {
    $('#feedback').text(feedback);
  }
  
    /*---show user guesses---*/
    $("#guessList").append('<li> '+ userGuess + '</li>');
    $("#guessList").val("");
  });


/*--- Display information modal box ---*/
$(".what").click(function(){
  $(".overlay").fadeIn(1000);

});

/*--- Hide information modal box ---*/
$("a.close").click(function(){
  $(".overlay").fadeOut(1000);
});

});
/*Break the App Logic Down Into Steps and Write Functions: We already said that you’ll need a newGame() function 
that does everything necessary to start a new game. This function will itself need to call other functions to 
take care of specific tasks—for instance, setting the randomly generated secret number. 
You should break the application logic down into discrete steps, then work on one step at a time.

===================
the plan
===================


*/

