import { backspace } from "./backspace.js"
import { filterEvalText } from "./filter.js"
const topbox = document.getElementById("top_box")
function addDigget(newNumber) {
    const originalNumber = topbox.value;
    topbox.value = (originalNumber.toString()) + (newNumber.toString());
}
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
document.getElementById("equal").addEventListener("click", function () {
    try {
        const inputText = topbox.value;
        inputText = filterEvalText(inputText)
        topbox.value = eval(inputText);
    }
    catch (error) {
        topbox.value = "Error: " + error;
    }
})

// Keyboard


