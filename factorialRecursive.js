// factorial recursive way

function factorial(n){
    if(n == 0){
        return 1;
    }
    factorial = n * factorial(n-1);
    return factorial ;
}

var n = 5;
var result = factorial(n);
console.log(n + "! = ", result)