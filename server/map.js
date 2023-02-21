const letters = ['a','b','c','d','e','f'];
const newArray = [];
console.time("For")
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];;
    newArray.push(element+'++');
}
console.timeEnd("For");

console.time("Map");
const newMap = letters.map(item => item + '++');
console.timeEnd("Map");

console.log(newMap);
console.log(newArray);
const numeros =["1","2","3.01","4.8","5","6","7"];

console.time("Map2");
const mapNumeros2= numeros.map(item=>parseInt(item));
console.timeEnd("Map2");
console.log(mapNumeros2);

console.time("Map1");
const mapNumeros1= numeros.map(Number);
console.timeEnd("Map1");
console.log(mapNumeros1);


// const kvArray = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 },
//   ];
  
//   const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
  
//   console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
//   console.log(kvArray);