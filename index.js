// function Seslen (a) {
//   console.log(a)
// }
  
// Seslen(null);

// for (let i =0; i<10; i++){
//   Seslen(`hey arkadas${i}`)
// };


// function zarAt () {
//   let roll = Math.floor(Math.random() * 6)+1;
//   return (roll);
// }

// // console.log(zarAt());
// // // zarAt();

// // function ikiZarAt() {
// //   let bir = zarAt();
// //   let iki = zarAt();
// //   return (console.log(bir+iki))
// // }

// // ikiZarAt()


// function cokZarAt(numberOfRoll) {
//   let total= 0
//   for (let i = 0; i <numberOfRoll; i++){
//       let zar = zarAt();
//       total = total + zar;
//       console.log(i+1,"nci zar",zarAt());
//   }
//   return total; 
// }

// console.log(cokZarAt(5));

// function meanRoll(x, y) {
// 	console.log("ortalama", Math.floor(x / y));
// }

// meanRoll(cokZarAt(10),10); 

function isPanagram (cumle) {
  let alphabet = "abcdefghijklmnopqrstuvxyz"
  let kucukHarfliCumle= cumle.toLowerCase();
  
  for(let char of alphabet){
    if (kucukHarfliCumle.indexOf(char)=== -1){
     return false;
    }
  };
  return true;
};

console.log(isPanagram("The qaaaaasssssssug"))