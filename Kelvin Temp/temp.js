//sets temp in kelvin//
const kelvin = prompt('What is the Kelvin temperature today');
//calculates temp in celsius//
let celsius = kelvin - 273;
//calculates temp in fahrenheit//
let fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);

