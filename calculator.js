
(function() {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");
  let currentInput = "";

  // Function to update the display
  function updateDisplay(value) {
    display.innerText = value || "0";
  }

  // Button click event listener
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // If button has a data-value attribute, it's a number or operator
      const value = button.getAttribute("data-value");

      if (button.id === "clear") {
        currentInput = "";
        updateDisplay(currentInput);
      } else if (button.id === "equals") {
        try {
          // Evaluate the expression (Note: using eval is simple but be cautious with user inputs)
          let result = eval(currentInput);
          updateDisplay(result);
          currentInput = result.toString();
        } catch (e) {
          updateDisplay("Error");
          currentInput = "";
        }
      } else if (button.id === "heart") {
        // Append the heart symbol to the current input (or use it as a fun element)
        currentInput += "♥";
        updateDisplay(currentInput);
      } else {
        currentInput += value;
        updateDisplay(currentInput);
      }
    });
  });
})();