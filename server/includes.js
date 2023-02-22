const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}

const rta = pets.includes('dog')
console.log('for', includeInArray);
console.log('includes', rta);

// export function filterByTerm(array, term) {
//     // Tu código aquí 👈
   
//     const result = array.filter(x => {
//       return x.includes(term);
//     });
//     return result;
//   }