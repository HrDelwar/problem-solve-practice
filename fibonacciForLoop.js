// fibonacci with for loop

function fibonacci (n){
    //set defult element value
    if(n == 1 ){
        return [0];
    }else if(n == 2){
        return [0, 1]
    }
    var arr= [0, 1];
    for(var i = 2; i < n ; i++){
        arr[i] = arr[i-2] + arr[i-1];
    }
    return arr;
}
var n = 2;
var result =fibonacci(10);
console.log(n +" time fibonacci series is = ",result);