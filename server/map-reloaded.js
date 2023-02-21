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
  console.log("original", orders);
  const rta = orders.map((item) => item.total);
  console.log("rta", rta);
  const corchetes = orders.map(x=> x.delivered?x.total + 10 + ' ': x.total +' ');

  console.log("corchetes", corchetes);
  console.log(corchetes.map(Number));
  // const rta2 = orders.map((x) => {
  //   x.tax = 0.19;
  //   return x;
  // });
  // console.log("rta2", rta2);
  // console.log("original", orders);
  const rta3 = orders.map((item) => {
    return {
      ...item,
      tax: 0.19,
    };
  });
  console.log("rta3", rta3);
  console.log("original", orders);
console.log("--------------------------");

  const spreadOpertators = function (num,abc, ...arr) {
    this.num =num;
    this.abc =abc;
    const rta1 = arr.map((item) =>{
      // return{
      //   ...item,
      //   igv :  .03
      // }
      item.igv = 120
    } );
    //const y = orders.map((x )=> x.total+parseInt(num));
    
    //x=> x.delivered?x.total + 10 + ' ': x.total +' '
    console.log(rta1);
    //console.log(y,arr);
   // return abc ;
  }
console.log("====================");
  spreadOpertators(100,"letras",orders)


const arr = [1,2,3]
console.log('logging...')
arr.map(e => console.log('sync item', e)) // This is a synchronous callback

arr.map(e => setTimeout(() => console.log('async item', e), 2000+e*1000)) // This is an asynchronous callback
console.log('the stuff')

   
