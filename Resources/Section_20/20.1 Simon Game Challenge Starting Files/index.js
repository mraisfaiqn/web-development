// Game Pattern
var gamePattern = [];

// Button Colour Array
var buttonColours = ["red", "blue", "green", "yellow"];

// Game Pattern Array
var gamePattern = [];

function nextSequence() {
	// Random Number Generator
	var randomNumber = Math.floor(Math.random() * 4);
	console.log("Random: " + randomNumber);
	// Random Chosen Button Colour
	var randomChosenColour = buttonColours[randomNumber];
	// Game Pattern Recognition
	gamePattern.push(randomChosenColour);
	console.log("Game: " + gamePattern);
	// Animate visual and sound
	// buttonAnimation(randomChosenColour);
	// soundControl(randomChosenColour);
	$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
	var soundAnimation = new Audio("./sounds/" + randomChosenColour + ".mp3");
	soundAnimation.play();
}

// function buttonAnimation(colour){
// 	var activeButton = $("#" + colour);
// 	activeButton.addClass("pressed");
// 	setTimeout(function() {
// 		activeButton.removeClass("pressed");
// 	}, 100);
// }

// function soundControl(button) {
// 	switch (button) {
// 		case 'red':
// 			var redButton = new Audio("./sounds/red.mp3");
// 			redButton.play();
// 		break;

// 		case 'blue':
// 			var blueButton = new Audio("./sounds/blue.mp3");
// 			blueButton.play();
// 		break;

// 		case 'green':
// 			var greenButton = new Audio("./sounds/green.mp3");
// 			greenButton.play();
// 		break;

// 		case 'yellow':
// 			var yellowButton = new Audio("./sounds/yellow.mp3");
// 			yellowButton.play();
// 		break;

// 		default: console.log(key);

// 	}
// }

// $("button").remove();

// $("body").addClass("reset-border");
// $("h1").addClass("big-title set-font");

// $("h1").text("This is my Website");
// $("button").text("Don't Click!");
// $("button").html("<em>Dont Click!</em>");

// $("img").attr("src", "./images/image2.png");
// $("a").attr("href", "https://www.yahoo.com");

// $("body").keydown(function(event) {
// 	console.log(event.key);
// 	$("h1").text(event.key);
// })

// // $("h1").on("mouseover", function() {
// // 	$("h1").html("<s>This is my Website</s>");
// // })

// $("h1").before("<button>New</button");
// $("h1").after("<button>New</button");
// $("h1").prepend("<button>New</button");
// $("h1").append("<button>New</button");

// $("button").click(function() {
// 	$("h1").css("color", "purple");
// })

// $("h1").click(function() {
// 	$("h1").css("color", "black");
// })

// // $("button").on("click", function() {
// // 	$("h1").hide();
// // })

// // $("button").on("click", function() {
// // 	$("h1").show();
// // })

// // $("button").on("click", function() {
// // 	$("h1").toggle();
// // })

// // $("h1").on("click", function() {
// // 	$("h1").fadeOut();
// // })

// // $("button").on("click", function() {
// // 	$("h1").fadeIn();
// // })

// // $("button").on("click", function() {
// // 	$("h1").fadeToggle();
// // })

// // $("button").on("click", function() {
// // 	$("h1").slideUp();
// // })

// // $("button").on("click", function() {
// // 	$("h1").slideDown();
// // })

// // $("button").on("click", function() {
// // 	$("h1").animate({opacity: 0.5});
// // })

// $("button").on("click", function() {
// 	$("h1").slideUp().slideDown().animate({opacity: 0.5});
// })