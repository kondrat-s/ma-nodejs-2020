let text = 'Hello World!';
let regexp = /o/g;
let matchAll = text.matchAll(regexp);
let posArray = Array.from(matchAll);

console.log(posArray);

console.log( text.replace(/l/g , '') );
