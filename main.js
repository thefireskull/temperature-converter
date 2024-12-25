const kelvin = 1000;
const celsius = kelvin - 273; 

console.log(`The temerature is ${celsius} degrees Celsius.`);

// Convert to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
fahrenheit = Math.floor(fahrenheit)
console.log(`${fahrenheit} degrees Fahrenheit.`);

// Round down
newton = Math.floor(newton);
console.log(`And ${newton} degrees Newton.`);
