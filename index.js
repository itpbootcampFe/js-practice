function topla(x,y) {
  return x+y;
};


function fark(x,y) {
  return x-y;
};

function carp(x,y) {
  return x*y;
};

function bol(x,y) {
  return x/y;
};

// const topla = function (x,y) {
//   return x+y;
// };


const oparations = [topla,fark,carp,bol]

for (islem of oparations ){
   console.log(islem(5,5));
}


// const math = {
//   plus: topla,
//   minus: fark,  
// }