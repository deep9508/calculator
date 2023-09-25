document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";
    let operatorClicked = false;

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.value;

            if (value === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                    display.value = currentInput;
                } catch (error) {
                    display.value = "Error";
                }
                operatorClicked = false;
            } else if (value === "C") {
                currentInput = "";
                display.value = "";
                operatorClicked = false;
            } else if (value === ".") {
                if (!currentInput.includes(".") && !operatorClicked) {
                    currentInput += value;
                    display.value = currentInput;
                }
            } else if (isOperator(value)) {
                if (!operatorClicked) {
                    currentInput += value;
                    display.value = currentInput;
                    operatorClicked = true;
                } else {
                    // Replace the last operator with the new one
                    currentInput = currentInput.slice(0, -1) + value;
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });

    function isOperator(value) {
        return value === "+" || value === "-" || value === "*" || value === "/";
    }
});
