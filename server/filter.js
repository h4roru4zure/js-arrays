const words = ["spray", "elites", "limit", "apple", "exuberant"]
const newWords = []

for(let i=0; i< words.length; i++){
    const word = words[i]
    if (word.length >= 6){
        newWords.push(word)
    }
}

console.log("newWords",newWords) ; // [ 'elites', 'exuberant' ]

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

const rpta =    words.filter((word)=>word.length >= 6);
console.log("rpta", rpta); // [ '

const rpta3= orders.filter(x=>x.delivered);
console.log("rpta3", rpta3); // 
const rpta4= orders.filter(x=>x.delivered & x.total>70);
console.log("rpta4", rpta4); // 