// inch to feet
function toFeet(inch){
    return inch/12;
}
var inch = 28;
var resultFeet = toFeet(inch).toFixed(1);
console.log (inch + " inch = ",resultFeet + " Feet.");

//feet to inch 
function toInch(feet){
    return feet * 12;
}
var feet = 2.5;
var resultInch = toInch(feet).toFixed(1);
console.log(feet + " feet = ",resultInch + " Inch.")