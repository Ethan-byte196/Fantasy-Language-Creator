/**
 * 
 */
 function addTextBox() {
  // Get a reference to the container element
  const container = document.getElementById("textbox-container");

  // Create a new text input element
  const textBox = document.createElement("input");

  // Set attributes for the text input
  textBox.type = "text"; // Specifies it's a text input
  textBox.placeholder = "Type English Here!!"; // Placeholder text (optional)

  // Append the text input to the container
  container.appendChild(textBox);
}

 // Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function() {
	
	addTextBox();
});