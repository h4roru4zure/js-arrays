// // Las funciones mutables consisten en cambiar el array original.
// //  Estos mΓ©todos son:
// // push
// // unshift
// // pop
// // shift
// // splice
// // sort

const products = [
    { title: "Pizza", price: 121, id: "π" },
    { title: "Burger", price: 121, id: "π" },
    { title: "Hot cakes", price: 121, id: "π₯" },
  ];
  const myProducts = [];
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));
  const productIndex = products.findIndex(item => item.id === 'π');
  if (productIndex !== -1) {
      myProducts.push(products[productIndex]);
      products.splice(productIndex, 1);
  }
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));
  
  // Update
  
  const productsV2 = [
      { title: "Pizza", price: 121, id: "π" },
      { title: "Burger", price: 121, id: "π" },
      { title: "Hot cakes", price: 121, id: "π₯" },
    ];
  const update = {
      id: "π₯",
      changes: {
          price: 200,
          description: 'delicioso'
      }
  }
  const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
  productsV2[productIndexV2] = {
      ...productsV2[productIndexV2],
      ...update.changes,
  };
  console.log(productsV2);


