let incrementButton = document.querySelector("#increment"); 
let decrementButton = document.querySelector("#decrement"); 
let counter = document.querySelector("#counter"); 



// This line says, "I want to listen for someone to CLICK my
// incrementButton, and any time I 'hear' that event occur,
// I want some code to run.
incrementButton.addEventListener("click", function() {
    // Any code you write in here, will run every time incrementButton
    // is clicked.
    // Run the console.log function to display some text in the console:
    console.log("+ button clicked");

    // Calculate the new value for our counter:
  let newCounterValue = Number(counter.innerHTML) + 1;

  // Calculate the new value for our counter:
  counter.innerHTML = newCounterValue;
  }) // We have to close the curly braces and parentheses we opened above.






  decrementButton.addEventListener("click", function() {
    // Any code you write in here, will run every time incrementButton
    // is clicked.
    // Run the console.log function to display some text in the console:
    console.log("- button clicked");

    // Calculate the new value for our counter:
  let newCounterValue = Number(counter.innerHTML) - 1;

  // Calculate the new value for our counter:
  counter.innerHTML = newCounterValue;
  }) // We have to close the curly braces and parentheses we opened above.let incrementButton = document.querySelector("#increment"); 
let decrementButton = document.querySelector("#decrement"); 
let counter = document.querySelector("#counter"); 



// This line says, "I want to listen for someone to CLICK my
// incrementButton, and any time I 'hear' that event occur,
// I want some code to run.
incrementButton.addEventListener("click", function() {
    // Any code you write in here, will run every time incrementButton
    // is clicked.
    // Run the console.log function to display some text in the console:
    console.log("+ button clicked");

    // Calculate the new value for our counter:
  let newCounterValue = Number(counter.innerHTML) + 1;

  // Calculate the new value for our counter:
  counter.innerHTML = newCounterValue;
  }) // We have to close the curly braces and parentheses we opened above.






  decrementButton.addEventListener("click", function() {
    // Any code you write in here, will run every time incrementButton
    // is clicked.
    // Run the console.log function to display some text in the console:
    console.log("- button clicked");

    // Calculate the new value for our counter:
  let newCounterValue = Number(counter.innerHTML) - 1;

  // Calculate the new value for our counter:
  counter.innerHTML = newCounterValue;
  }) // We have to close the curly braces and parentheses we opened above.
