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
    while (text.includes("var")) {
        text = text.replace("var", "")
    }
    while (text.includes("const")) {
        text = text.replace("const", "")
    }
    while (text.includes("let")) {
        text = text.replace("let", "")
    }
    while (text.includes("\"")) {
        text = text.replace("\"", "")
    }
    while (text.includes("[")) {
        text = text.replace("[", "")
    }
    while (text.includes("]")) {
        text = text.replace("]", "")
    }
    while (text.includes("'")) {
        text = text.replace("'", "")
    }
    while (text.includes("a")) {
        text = text.replace("a", "")
    }
    while (text.includes("b")) {
        text = text.replace("b", "")
    }
    while (text.includes("c")) {
        text = text.replace("c", "")
    }
    while (text.includes("d")) {
        text = text.replace("d", "")
    }
    while (text.includes("e")) {
        text = text.replace("e", "")
    }
    while (text.includes("f")) {
        text = text.replace("f", "")
    }
    while (text.includes("g")) {
        text = text.replace("g", "")
    }
    while (text.includes("h")) {
        text = text.replace("h", "")
    }
    while (text.includes("i")) {
        text = text.replace("i", "")
    }
    while (text.includes("j")) {
        text = text.replace("j", "")
    }
    while (text.includes("k")) {
        text = text.replace("k", "")
    }
    while (text.includes("l")) {
        text = text.replace("l", "")
    }
    while (text.includes("m")) {
        text = text.replace("m", "")
    }
    while (text.includes("n")) {
        text = text.replace("n", "")
    }
    return text
}