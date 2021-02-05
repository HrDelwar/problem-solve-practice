// swap value in 2 variable 

let x = 2;
let y = 3;
console.log("x = " + x + ",", "y = " + y);// before swap
const temp = x;// use 3rd varialbe 
x = y;
y = temp;
console.log("x = " + x + ",", "y = " + y);//after swap

//swap without 3rd variable 

let p = 10;
let q = 20;
console.log(" p = " + p + ",", "q = " + q)//before swap
q = p + q;
p = q - p;
q = q - p;
console.log(" p = " + p + ",", "q = " + q)//after swap

