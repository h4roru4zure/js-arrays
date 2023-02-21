
const totals = [1,2,3,4];

 function calcSum(numbers) {
    // Tu código aquí 👈
    let sum1 = 0;
    return  numbers.reduce((sum1, x) => sum1 + x  , 0);
  }
console.log( calcSum(totals) ) ;



let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);

const rta = totals.reduce((sum, element) => sum + element, 0)
console.log('rta', rta);