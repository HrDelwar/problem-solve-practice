function totalSum(num1, num2){
   console.log(arguments);
   let sum = 0;
   for (let i = 0; i < arguments.length; i++) {
       const element = arguments[i];
       sum = sum + element;
   }
   return sum;
}

const sum = totalSum(5,2, 2 , 5, 6);
console.log(sum);