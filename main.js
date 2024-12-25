const kelvin = 1000;

// Function to convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15; // More accurate conversion considering decimal
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * (9 / 5)) + 32;
}

// Function to convert Celsius to Newton
function celsiusToNewton(celsius) {
    return celsius * (33 / 100);
}

// Convert Kelvin to Celsius
const celsius = kelvinToCelsius(kelvin);
console.log(`The temperature is ${celsius.toFixed(2)} degrees Celsius.`);

// Convert to Fahrenheit and round down
const fahrenheit = Math.floor(celsiusToFahrenheit(celsius));
console.log(`${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton and round down
const newton = Math.floor(celsiusToNewton(celsius));
console.log(`And ${newton} degrees Newton.`);
