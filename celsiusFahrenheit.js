//fahrenheit to celsius
function toCelsius(fahrenheit) {
    var celsius = (5 * (fahrenheit - 32)) / 9;
    return celsius;
}


var numFahrenheit = 98.4;//set fahrenheit for conver celsius
var resultCelsius = toCelsius(numFahrenheit).toFixed(2);// call toCelsius function and stor result 
console.log(numFahrenheit.toFixed(2) + " °F =", resultCelsius , "°C.");// show celsius result in consoel

//celsius to fahrenheit
function toFahrenheit(celsius) {
    var fahrenheit = ((celsius * 9) / 5) + 32;
    return fahrenheit;
}
var numCelsius = 36.89;// set celsius for convert fahrenheit
var resultFahrenheit = toFahrenheit(numCelsius).toFixed(2); //call toFahrenheit function and stor result
console.log(numCelsius.toFixed(2) + " °C =", resultFahrenheit, "°F.");// show fahrenheit result in console


