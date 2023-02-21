const letters = ['a','b','c','d','e','f'];

console.time('uno');
for (var i = 0; i < letters.length; i++) {
    const element = letters[i];
    console.log(element);
}
console.timeEnd('uno');
console.time('dos');
letters.forEach(function (letter) {
    console.log(letter);
})
console.timeEnd('dos');
console.time('tres');
letters.forEach((item)=>{console.log(item)});
console.timeEnd('tres');