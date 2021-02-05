function random(n) {
    let randomArr = [];
    for (var i = 0; i < n; i++) {
        var random = Math.random() * 6;
        random = Math.round(random);
        randomArr.unshift(random);
    }
    return randomArr;
}
var n = 6;
var result = random(n);
console.log(result)