function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;
        return fahrenheit;
}
console.log(celsiusToFahrenheit(80));


function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius;
}

console.log(fahrenheitToCelsius(25));
