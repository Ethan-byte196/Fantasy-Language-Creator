// Create an array to store characters
const characters = [];

// Function to add a text box
function addTextBox(placeholder = "Type here...", top = "0", left = "0") {
  // Get a reference to the container element
  const container = document.getElementById("textbox-container");

  // Create a new text input element
  const textBox =  document.createElement("textarea"); // Use <textarea> instead of <input> for multiline input

  textBox.style.width = "450px"; // Set the width to your desired value
  textBox.style.height = "400px"; // Set the height to your desired value

  // Apply CSS styles to set the position
  textBox.style.position = "absolute"; // Set position to absolute
  textBox.style.top = top; // Set the top coordinate
  textBox.style.left = left; // Set the left coordinate

  // Set attributes for the text input
  textBox.type = "text"; // Specifies it's a text input
  textBox.placeholder = placeholder; // Placeholder text (optional)
  textBox.id = "my-input"; // Assign an ID to the input element
  
  
  // Set CSS properties for text wrapping
  textBox.style.overflowX = "hidden"; // Hide horizontal overflow
  textBox.style.overflowY = "auto"; // Enable vertical scrolling

  // Append the text input to the container
  container.appendChild(textBox);

  // Get a reference to the text input element
  const inputElement = document.getElementById("my-input");

  // Listen for input events on the input element
  inputElement.addEventListener("input", function(event) {
    // Get the value of the input element
    const inputValue = event.target.value;

    // Split the input value into an array of characters
    const inputCharacters = inputValue.split("");

    // Update the characters array with the new characters
    characters.length = 0; // Clear the array
    characters.push(...inputCharacters); // Add the new characters to the array
  });
}

// Function to add a display box
function addDisplayBox(top = "0", left = "0") {
  // Get a reference to the container element
  const container = document.getElementById("displaybox-container");

  // Create a new <div> element for displaying text
  const displayBox = document.createElement("div");

  displayBox.style.width = "450px"; // Set the width to your desired value
  displayBox.style.height = "400px"; // Set the height to your desired value

  // Apply CSS styles to set the position
  displayBox.style.position = "absolute"; // Set position to absolute
  displayBox.style.top = top; // Set the top coordinate
  displayBox.style.left = left; // Set the left coordinate

  // Set the text content of the display box
  displayBox.textContent = "This is the display box content"; // Change this text as needed
  displayBox.style.backgroundColor = "white"; // Set the background color to white

  // Append the display box to the container
  container.appendChild(displayBox);
}

function translator(array,dict) {
  
  for(let i = 0; i < array.length;i++)
  {
	  
  }
  
}