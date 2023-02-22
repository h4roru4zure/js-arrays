const matriz = [
    [1,2,3],   
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];
const lista1=[7,8,9];
function profundidad(list) {
    let newList = [];
    if (typeof list != "object")
    //console.log("lista tipo ", typeof(list));
    return [list];
    list.forEach(element => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
}

const newArray = profundidad(matriz);

console.log(newArray);

console.log(typeof matriz, typeof lista1);



console.log("------------------------");

const array= [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ]
function countWords(array) {
    // Tu código aquí 👈
    return array.flatMap(x => x.split(" ")).length;
  }

