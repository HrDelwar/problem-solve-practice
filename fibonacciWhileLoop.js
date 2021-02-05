function fibonacci(n) {
    // set default serise 
    if (n == 1) {
        return [0];
    } else if (n == 2) {
        return [0, 1];
    }
    var arr = [0, 1]
    var i = 3;
    while (i <= n) {
        arr[i-1] = arr[i - 3] + arr[i - 2];
        i++;
    }
    return arr;
}
var n = 10;
var result = fibonacci(n);
console.log(n + " time fibonacci series is = ",result);