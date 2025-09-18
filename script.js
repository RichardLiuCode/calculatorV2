import { backspace } from "./backspace.js"
import { filterEvalText } from "./filter.js"
const topbox = document.getElementById("top_box")
let inputText = "";
function addDigget(newNumber) {
    const originalNumber = topbox.value;
    topbox.value = (originalNumber.toString()) + (newNumber.toString());
}

// Buttons

document.getElementById("1").addEventListener("click", function () {
    addDigget(1)
});
document.getElementById("2").addEventListener("click", function () {
    addDigget(2)
});
document.getElementById("3").addEventListener("click", function () {
    addDigget(3)
});
document.getElementById("4").addEventListener("click", function () {
    addDigget(4)
});
document.getElementById("5").addEventListener("click", function () {
    addDigget(5)
});
document.getElementById("6").addEventListener("click", function () {
    addDigget(6)
});
document.getElementById("7").addEventListener("click", function () {
    addDigget(7)
});
document.getElementById("8").addEventListener("click", function () {
    addDigget(8)
});
document.getElementById("9").addEventListener("click", function () {
    addDigget(9)
});
document.getElementById("0").addEventListener("click", function () {
    addDigget(0)
});
document.getElementById("(").addEventListener("click", function () {
    addDigget("(")
});
document.getElementById(")").addEventListener("click", function () {
    addDigget(")")
});
document.getElementById(".").addEventListener("click", function () {
    addDigget(".")
});
document.getElementById("plus").addEventListener("click", function () {
    addDigget("+")
});
document.getElementById("minus").addEventListener("click", function () {
    addDigget("-")
});
document.getElementById("times").addEventListener("click", function () {
    addDigget("×")
});
document.getElementById("divide").addEventListener("click", function () {
    addDigget("÷")
});
document.getElementById("%").addEventListener("click", function () {
    addDigget("%")
});
document.getElementById("pie").addEventListener("click", function () {
    addDigget("𝜋");
})
document.getElementById("ac").addEventListener("click", function () {
    document.getElementById("top_box").value = ""
});
document.getElementById("backspace").addEventListener("click", function () {
    topbox.value = backspace(topbox.value);
})

// Calaulate

document.getElementById("equal").addEventListener("click", function () {
    try {
        inputText = topbox.value;
        inputText = filterEvalText(inputText)
        while (inputText.includes("×")) {
            inputText = inputText.replace("×", "*")
        }
        while (inputText.includes("÷")) {
            inputText = inputText.replace("÷", "/")
        }
        topbox.value = eval(inputText);
    }
    catch (error) {
        topbox.value = "Error: " + error;
    }
})

// Keyboard

topbox.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key == "1") {
        document.getElementById("1").click();
    } else if (e.key == ("2")) {
        document.getElementById("2").click();
    } else if (e.key == "3") {
        document.getElementById("3").click();
    } else if (e.key == "4") {
        document.getElementById("4").click();
    } else if (e.key == "5") {
        document.getElementById("5").click();
    } else if (e.key == "6") {
        document.getElementById("6").click();
    } else if (e.key == "7") {
        document.getElementById("7").click();
    } else if (e.key == "8") {
        document.getElementById("8").click();
    } else if (e.key == "9") {
        document.getElementById("9").click();
    } else if (e.key == "0") {
        document.getElementById("0").click();
    } else if (e.key == "+") {
        document.getElementById("plus").click();
    } else if (e.key == "-") {
        document.getElementById("minus").click();
    } else if (e.key == "*") {
        document.getElementById("times").click();
    } else if (e.key == "/") {
        document.getElementById("divide").click();
    } else if (e.key == "(") {
        document.getElementById("(").click();
    } else if (e.key == ")") {
        document.getElementById(")").click();
    } else if (e.key == "=") {
        document.getElementById("equal").click();
    } else if (e.key == "Enter") {
        document.getElementById("equal").click();
    } else if (e.key == "Delete") {
        document.getElementById("ac").click();
    } else if (e.key == "Backspace") {
        document.getElementById("backspace").click();
    }
})
