// different distence count different value and  add all of sum like first 10 mile per mile = 80 animal, secend 10 mile per mile 160 animal, third 20 mile per mile 230 animal and next all of per mile 420 animal.

function animalCount (mile){
    let count = 0;
    let first = 10;
    let second = 10;
    let third = 20;
    let firstDistence = first; // set first 10 mile distence
    let secondDistence = first + second; // set second 20 mile;
    let thirdDistence = first + second + third ; // set trird distence 40 mile 
    let firstLimit = 50; // set how animal contai per mile in first distence
    let secondLimit = 100; // set how animal contai per mile in second distence
    let thirdLimit = 200; // set how animal contai per mile in third distence
    let upperThirdLimit = 400; // set how animal contai per mile in upper third distence
    if(mile <= firstDistence){
        count = (mile * firstLimit);
    }else if(mile <= secondDistence){
        let remainNum = mile - firstDistence;
        let firstAnimalNum = firstLimit * first;
        let secondAnimalNum = secondLimit * remainNum;
        count = firstAnimalNum + secondAnimalNum;
    }else if ( mile <= thirdDistence){
        let remainNum = mile - secondDistence;
        let firstAnimalNum = firstLimit * first;
        let secondAnimalNum = secondLimit * second;
        let thirdAnimalNum = thirdLimit * remainNum ;
        count = firstAnimalNum + secondAnimalNum + thirdAnimalNum ;
    }
    else {
        let remainNum = mile - thirdDistence;
        let firstAnimalNum = firstLimit * first;
        let secondAnimalNum = secondLimit * second;
        let thirdAnimalNum = thirdLimit * third;
        let upperThirdAnimalNum = upperThirdLimit * remainNum;
        count = firstAnimalNum + secondAnimalNum + thirdAnimalNum + upperThirdAnimalNum;
    }
    return count;
}

let mile = 45;
let result = animalCount(mile);
console.log ("Total animal of " + mile+ " mile =" , result);