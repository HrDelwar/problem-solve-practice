// factorial while loop

function factorial(n){
    //set 0! value 
    if(n == 0){
        return 1;
    }
    var factorial = 1;
    var i = 1;
    while(i <= n ){
        factorial = factorial * i ;
        i++;
    }
    return factorial;
}
var n = 4;
var result = factorial(n);
console.log(n + "! = ",result);