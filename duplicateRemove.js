const duplicate = [4, 5, 5, 5, 54, 4, 5, 5, 6, 9, 3, 7, 8, 8, 3, 1, 7];
let unique = [];

for(let i = 0; i < duplicate.length ; i++){
    let element = duplicate[i];
    let index = unique.indexOf(element);
    if ( index == -1){
        unique.push(element);
    }
}
unique.sort(function(a,b){return a-b});
console.log(unique);