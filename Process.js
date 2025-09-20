function getPreviousDigget(text, i) {
    return text[i - 1];
}

function getNextDigget(text, i) {
    return text[i + 1];
}

function factorial(input) {
    let n = input
    let result = 1;
    for (let i = n; i > 1; i--) {
        result = result * i;
    }
    return result;
}

export function calculate(input) {

    // Process plus sign
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "+") {
            if (!(getPreviousDigget(input, i) == "|") && !(getNextDigget(input, i) == "|")) {
                input = input.substring(0, i) + "|+|" + input.substring(i + 1, input.length)
                input = input.replace("||", "|")
            }
        }
    }

    // Process minus sign
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "-") {
            if (!(getPreviousDigget(input, i) == "|") && !(getNextDigget(input, i) == "|")) {
                input = input.substring(0, i) + "|-|" + input.substring(i + 1, input.length)
                input = input.replace("||", "|");
            }
        }
    }

    // Process times sign
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "*") {
            if (!(getPreviousDigget(input, i) == "|") && !(getNextDigget(input, i) == "|")) {
                input = input.substring(0, i) + "|*|" + input.substring(i + 1, input.length)
                input = input.replace("||", "|");
            }
        }
    }

    // Process divide sign
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "/") {
            if (!(getPreviousDigget(input, i) == "|") && !(getNextDigget(input, i) == "|")) {
                input = input.substring(0, i) + "|/|" + input.substring(i + 1, input.length)
                input = input.replace("||", "|");
            }
        }
    }

    input = input.split("|")

    // convert precent to decimal
    for (let i = 0; i < input.length; i = i + 1) {
        if ((input[i].includes("%")) && (input[i].substring(input[i].length - 1, input[i].length) == "%")) {
            input[i] = input[i].replace("%", "");
            input[i] = parseFloat(input[i]) * 0.01;
            input[i] = input[i].toString();
        }
    }
    // Calculating power
    for (let i = 0; i < input.length; i = i + 1) {
        if (input[i].includes("^")) {
            input[i] = input[i].split("^");
            if (input[i].length <= 2) {
                input[i] = Math.pow(input[i][0], input[i][1])
                input[i] = input[i].toString();
            }
        }
    }
    // Calculating root
    for (let i = 0; i < input.length; i = i + 1) {
        if (input[i].includes("√")) {
            if (input[i].substring(0, 1) == "√") {
                input[i] = input[i].replace("√", "");
                input[i] = Math.sqrt(input[i]).toString();
            } else {
                throw new Error("Numbers should be in front of the root");
            }
        }
    }

    // Calculating factorial
    for (let i = 0; i < input.length; i = i + 1) {
        if (input[i].includes("!")) {
            if (input[i].substring(input[i].length - 1, input[i].length) == "!") {
                input[i] = input[i].replace("!", "");
                input[i] = factorial(input[i]).toString();
            } else {
                throw new Error("There should have any numbers after the factorial sign");
            }
        }
    }

    // Convert list back to text
    input = input.join("")

    //Calculate the text
    return eval(input);
}



