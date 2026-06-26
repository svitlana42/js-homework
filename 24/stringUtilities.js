function upperText(text) {
    return text.toUpperCase(); 
}

function reverseText(text) {
    let result = "";
    
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }
    return result;
}

export { upperText, reverseText };