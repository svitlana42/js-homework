<<<<<<< HEAD
// 1
let textStr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";
let letter = textStr.match(/[A-Z]/g);

console.log(letter);

// 2
let operation = "5 плюс 7 = 3";
let num = operation.match(/\d+/g);

console.log(num);

// 3
let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";
let word = text.match(/\b[a-zA-Z]{5}\b/g);

=======
// 1
let textStr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";
let letter = textStr.match(/[A-Z]/g);

console.log(letter);

// 2
let operation = "5 плюс 7 = 3";
let num = operation.match(/\d+/g);

console.log(num);

// 3
let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";
let word = text.match(/\b[a-zA-Z]{5}\b/g);

>>>>>>> e4a3a4e2c779064bbf5de385e579de93c796ad23
console.log(word);