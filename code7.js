function doubleChar(str) {
    // Your code here
    return str.split("").map(item => item + item).join("")
}
console.log(doubleChar("abs javascript"));
