// reversing string

function reverse(str){
    let content = "";
    for(let i = 0; i < str.length ; i++){
        let character = str[i];
        content = character + content;
    }
    return content;
}
let str = "I am nobody!";

let result = reverse(str);
console.log(result);