/*
								Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:

		1. Print a nice output to the console, saying who has the higher BMI. The message
		is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
		
		2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
		BMI (28.3) is higher than John's (23.9)!"
		
		This challenge and creative thought was created by Jonas Schmedtmann.

*/

// Data Set #1
let marksWeight = 78;
let marksHeight = 1.69;
let marksBMI = marksWeight / marksHeight ** 2;

let johnsWeight = 92;
let johnsHeight = 1.95;
let johnsBMI = johnsWeight / johnsHeight ** 2;

if(marksBMI > johnsBMI){
	console.log(`Data Set 1: Mark\'s BMI (${marksBMI}) is higher than John\'s BMI (${johnsBMI})!`);
}else{
	console.log(`Data Set 1: John\'s BMI (${marksBMI}) is higher than Mark\'s BMI (${johnsBMI})!`);
}

// Data Set #2
marksWeight = 95;
marksHeight = 1.88;
marksBMI = marksWeight / marksHeight ** 2;

johnsWeight = 85;
johnsHeight = 1.76;
johnsBMI = johnsWeight / johnsHeight ** 2;

if(marksBMI > johnsBMI){
	console.log(`Data Set 2: Mark\'s BMI (${marksBMI}) is higher than John\'s BMI (${johnsBMI})!`);
}else{
	console.log(`Data Set 2: John\'s BMI (${johnsBMI}) is higher than Marks\'s BMI (${marksBMI})!`);
}
