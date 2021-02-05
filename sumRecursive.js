
//total sum of n'th element in recursive way
function sum(n) {
    if (n != 0) {
        return n + sum(n - 1);

    } else {
        return n;
    }
}
var numOfSum = 10;
var nthSum = sum(numOfSum);
console.log('The sum of the numbers from 1 to '+ numOfSum+' is =', nthSum);