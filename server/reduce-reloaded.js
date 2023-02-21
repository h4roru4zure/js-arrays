const items = [1, 3, 2, 3,2,5,6,7,8,7,9,10,1,2,7,4,5,6,7,8,9];


const rtaRangos =items.reduce((obj,x)=>{
 if (x>=1 && x<=5){
    obj["1-5"] +=1;
 }
 else if (x>5 && x <=8){
    obj["6-8"]+=1;
    
 }
 else {
    obj["9-10"]+=1;
    
 }
 return obj;
},{
    "1-5":0,"6-8":0,"9-10":0
});

console.log(rtaRangos);






const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta1);