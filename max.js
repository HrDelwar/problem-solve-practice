// find max in 2 value
function maxOrMin(x, y) {
    if (x > y) {
        return true;
    } else {
        return false;
    }
}
let x = 4000;
let y = 200;
const resultTwoNumber = maxOrMin(x, y);
if (resultTwoNumber) {
    console.log(x + ' is geter than ' + y);
} else {
    console.log(y + ' is geter than ' + x);
}
// find max in 3 value 
function maxBetweenThreeValue(a,b,c){
    let msg = "";
    if (a > b && a > c) {
        msg = a + " is gater than " + b + " and " + c;
    } else if (b > a && b > c) {
        msg = b + " is gater than " + a + " and " + c;      
    }else{
        msg = c + " is gater than " + a + " and " + b;  
    }
    return msg;
}
let a = 300;
let b = 200;
let c = 400;
const resultThreeNumber = maxBetweenThreeValue(a,b,c);
console.log(resultThreeNumber);

// use math to find max value
let p = 100;
let q = 50;
let r = 30;
const maxResult = Math.max(p,q,r);
console.log(maxResult);