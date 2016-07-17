window.confirm("I'm ready to play!");
var age = prompt("What is your age?");

if (age < 13) {
	var getAge = 13 - age.valueOf();
	document.write("<span>You are to young. Try after: </span>" + getAge + " years!");
} else {
	document.write("<p>Let's play!</p>");
	document.write("<p>You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'</p>");

	document.write("<p>Suddenly, Bieber stops and says, 'Who wants to race me?'</p>");

	var userAnswer = prompt("Do you want to race Bieber on stage?");

	if (userAnswer === "yes") {
		document.write("<p>You and Bieber start racing. It's neck and neck! You win by a shoelace!</p>");
	} else {
		document.write("<p>Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'</p>");
	}

	var feedback = prompt("Please, rate my game from 1 to 10!");

	if (feedback === 8) {
		document.write("<p>Thank you! We should race at the next concert!</p>");
	} else {
		document.write("<p>I'll keep practicing coding and racing.</p>");
	}
}