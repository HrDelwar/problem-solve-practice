let sentence = "  I am  Hr  delwar. I am  a  web developer. ";
sentence = sentence.trim();
let count = 0;
for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
    if (character == " " && sentence[i - 1] != " ") {
        count++;
    }
}
count++;
console.log(count);

// word count in split way
function WordCount(str) {
    return str.trim().split(/\s+/).length;
    console.log();
}
let str = "  I am Hr  delwar. I am  a  web developer."
let result = WordCount(str);
console.log(result);