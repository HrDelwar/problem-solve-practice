// sum all array element 
let arraySum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        sum = sum + element;
    }
    return sum;
}
let marks = [41, 45, 46, 54, 73, 83, 72, 68, 98];
const result = arraySum(marks);
console.log("Total sum of all array element =" , result);