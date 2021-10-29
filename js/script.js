// Declare a variable called dailyBudget.
// In the value, use querySelector() to select the paragraph with a class of daily-budget.

var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

// Write a function called tripInfo.
// Inside the function body, declare a variable called totalBudget.
// n the value of totalBudget, use prompt() to ask “What is your total budget?”.
// The resulting number will be part of a calculation, so remember to wrap your prompt in Number().
// Under totalBudget, create a variable called accommodation that will prompt and ask, “What are your accommodation costs?”.
// Under the accommodation variable, create another variable called numDays that will prompt and ask, “How many days does your trip last?”.
// Just like for the totalBudget variable, the values of accommodation and numDays need to be numbers that you can use as part of a calculation.

var tripInfo = function () {
	var totalBudget = Number(prompt("What is your total budget for this trip? "));
	var accomodation = Number(prompt("What are your accomodation costs? "));
	var numDays = Number(prompt("How many days does your trip last? "));

	// Below your tripInfo function, write a function called calculateDailyBudget
	// This function will accept three parameters: totalBudget, accommodation, and numDays.
	calculateDailyBudget(totalBudget, accomodation, numDays);
};
// Inside the body of the calculateDailyBudget function, create variable
// daily variable will result the totalBudget minus acccomodation costs divided by
// numDays, wrap calculation with toFixed(2)

var calculateDailyBudget = function (totalBudget, accomodation, numDays) {
	var daily = ((totalBudget - accomodation) / numDays).toFixed(2);

	// Set InnerText of DailyBudget element to Template String /w Output Msg
	dailyBudget.innerText = `You can spend $${daily} a day on food and fun.`;
};

// At the bottom of your tripInfo function body, call the calculateDailyBudget function by passing it three arguments:
// totalBudget, accomodation, and numDays.

tripInfoButton.addEventListener("click", tripInfo);
