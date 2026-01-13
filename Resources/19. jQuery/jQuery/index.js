$("button").remove();

$("body").addClass("reset-border");
$("h1").addClass("big-title set-font");

$("h1").text("This is my Website");
$("button").text("Don't Click!");
$("button").html("<em>Dont Click!</em>");

$("img").attr("src", "./images/image2.png");
$("a").attr("href", "https://www.yahoo.com");

$("body").keydown(function(event) {
	console.log(event.key);
	$("h1").text(event.key);
})

// $("h1").on("mouseover", function() {
// 	$("h1").html("<s>This is my Website</s>");
// })

$("h1").before("<button>New</button");
$("h1").after("<button>New</button");
$("h1").prepend("<button>New</button");
$("h1").append("<button>New</button");

$("button").click(function() {
	$("h1").css("color", "purple");
})

$("h1").click(function() {
	$("h1").css("color", "black");
})

// $("button").on("click", function() {
// 	$("h1").hide();
// })

// $("button").on("click", function() {
// 	$("h1").show();
// })

// $("button").on("click", function() {
// 	$("h1").toggle();
// })

// $("h1").on("click", function() {
// 	$("h1").fadeOut();
// })

// $("button").on("click", function() {
// 	$("h1").fadeIn();
// })

// $("button").on("click", function() {
// 	$("h1").fadeToggle();
// })

// $("button").on("click", function() {
// 	$("h1").slideUp();
// })

// $("button").on("click", function() {
// 	$("h1").slideDown();
// })

// $("button").on("click", function() {
// 	$("h1").animate({opacity: 0.5});
// })

$("button").on("click", function() {
	$("h1").slideUp().slideDown().animate({opacity: 0.5});
})