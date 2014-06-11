$(document).ready(function(){
  

    /*---create random number---*/
    var randomNum = Math.floor((Math.random() * 100) + 1);
    console.log(randomNum);
  

  /*---guess submit function---*/ //guess started to change to the number because I had set the selector as the button
    $("form").submit(function (event) {
      event.preventDefault();
    var userGuess = $("#userGuess").val();
    $(this).val(userGuess);

    /*---show user guesses---*/
    $("#guessList").append('<li> '+ userGuess + '</li>');
    $("#guessList").val("");
  });

    /*---userGuess range---*/
     if (userGuess < randomNum) {
      alert ("Too low!")
      console.log("The number is too low")};
     if (userGuess > randomNum) {
      prompt = "Too high!"
      console.log("The number is too high")};


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

