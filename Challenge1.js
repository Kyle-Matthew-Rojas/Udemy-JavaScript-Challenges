/*
								Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
		
		BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
		
		Your tasks:
		1. Store Mark's and John's mass and height in variables
		2. Calculate both their BMIs using the formula (you can even implement both
		versions)
		3. Create a Boolean variable 'markHigherBMI' containing information about
		whether Mark has a higher BMI than John.
		Test data:
		§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
		m tall.
		§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
		m tall.
		
		This challenge and creative thought was created by Jonas Schmedtmann.

*/

// Data Set #1
let marksWeight = 78;
let marksHeight = 1.69;
let marksBMI = marksWeight / marksHeight ** 2;

let johnsWeight = 92;
let johnsHeight = 1.95;
let johnsBMI = johnsWeight / johnsHeight ** 2;

let markHigherBMI = (marksBMI > johnsBMI);

console.log("Data Set 1: " + markHigherBMI); 

// Data Set #2

marksWeight = 95;
marksHeight = 1.88;
marksBMI = marksWeight / marksHeight ** 2;

johnsWeight = 85;
johnsHeight = 1.76;
johnsBMI = johnsWeight / johnsHeight ** 2;

markHigherBMI = (marksBMI > johnsBMI);

console.log("Data Set 2: " + markHigherBMI); 
