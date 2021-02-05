// chack year is leap year or not
function leapYear(year) {
    var result = false;
    if (!(year % 400)) {
         result = true;
    } else if (!(year % 100)) {
        result = false;
    } else if (!(year % 4)) {
        result = true;
    } else {
        result = false;
    }

    return result;
}
var year = 2021;
var result = leapYear(year);
if( result == true){
    var msg = "a leap year!"
}else{
    msg = "not a leap  year."
}
console.log(year + " is " + msg);