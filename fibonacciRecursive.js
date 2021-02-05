// fibonacci series in recursive way
function fibonacci(n) {

    if (n == 1) {
        return [0]
    }
    if (n == 2) {
        return [0, 1]
    }
    var arr = fibonacci(n - 1);
    var newElement = arr[n-3] + arr[n - 2];
    arr.push(newElement);
    return arr;

}
var n = 5;
var result = fibonacci(n);
console.log(n + " time fibonacci series is = ", result);