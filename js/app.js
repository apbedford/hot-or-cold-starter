$(document).ready(function(){

  /*---create random number---*/
  var randomNum = Math.floor((Math.random() * 100) + 1);
  console.log(randomNum);

/*---guess submit function---*/
$("form").submit(function (event) {
  event.preventDefault();

  var userGuess = $("#userGuess").val();
  if (userGuess !== "" && !$.isNumeric(userGuess)|| userGuess % 1 !== 0|| userGuess < 1 || userGuess > 100) {
    setFeedback("That's not a whole number between 1 and 100!");
  return false;
  }

  /*---count guess---*/
  var count = 0;
  var guessCount = $("form").submit(function(){
    if (difference!==0)
    count++;
    $('#count').text(guessCount);
});


 /*---userGuess range---*/
  var difference =  Math.abs(userGuess - randomNum); 

  if (difference == 0) {
    setFeedback("You got it!");
        return;
  }
  else if (difference <=3) { //less than 3
    setFeedback("So close!");
  }
  else if (difference <=5) { //less than 5
    setFeedback("Sizzling!");
  }

  else if (difference <=10){ //less than 10
    setFeedback("Warmer!");
  } 
  else if (difference <=20){ //less than 20 & greater than 10
    setFeedback("Warm");
  }
  else if (difference <=30) {//less than 30 & greater than 20
    setFeedback("Chilly!");
  }
  else if (difference <=40) { //less than 40 & greater than 30
    setFeedback("Cold!");
  }
  else {
    setFeedback("Freezing!");
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
