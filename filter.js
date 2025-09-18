export function filterEvalText(text) {
    while (text.includes("document.")) {
        text = text.replace("document.", "")
    }
    while (text.includes("window.")) {
        text = text.replace("window.", "")
    }
    while (text.includes("navigator.")) {
        text = text.replace("navigator.", "")
    }
    while (text.includes("alert(")) {
        text = text.replace("alert(", "")
    }
    while (text.includes("fetch(")) {
        text = text.replace("fetch(", "")
    }
    while (text.includes("while(")) {
        text = text.replace("while(", "")
    }
    while (text.includes("setInterval(")) {
        text = text.replace("setInterval(", "")
    }
    return text;
}