// is number prime or not
function primeOrNot(num) {
    if (num <= 1) {
        return false;//for nagative vlue an 1
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
var num = 89;
var result = primeOrNot(num);
var msg = "";
if(result){
  msg ='a prime number!'
}else{
    msg = "not a prime number."
}
console.log(num + " is",msg);