// find max value in array element 
function arrayMax(arrmax) {
    let max = arrmax[0];
    for (let i = 0; i < arrmax.length; i++) {
        let element = arrmax[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}
let arrmax = [45, 58, 75, 456, 852, 45, 81, 2, 411, 4567, 54565, 6585, 45665];
const resultMax = arrayMax(arrmax);
console.log("The large number is :" + resultMax);
//find min value in array element

function arrayMin(arrmin) {
    let min = arrmin[0];
    for (let i = 0; i < arrmin.length; i++) {
        let element = arrmin[i];
        if (element <  min) {
            min = element;
        }
    }
    return min;
}
let arrmin = [45, 58, 75, 456, 852, 45, 81, 2, 411, 4567, 54565, 6585, 45665];
const resultMin = arrayMin(arrmin);
console.log("The smaller number is :" + resultMin);