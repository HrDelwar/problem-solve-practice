//factorial iterative way 

function factorial(n) {
    //set 0! value
    if(n == 0){
        return 1;
    }
    // for loop
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var n = 5;
var result = factorial(n);
console.log(n + "! = ",result);