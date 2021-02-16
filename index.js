//functions as Values

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


// const oparations = [topla,fark,carp,bol]

// for (islem of oparations ){
//    console.log(islem(5,5));
// }

// for (let islem=0; islem<oparations.length; islem++ ){
//   console.log(oparations[islem](5,5));

// }

// const math = {
//   plus: topla,
//   minus: fark,  
// }


//functions as arguments;

function mean (t,b,a,c){
   return b(t(a,c),2);
}

const result = mean(topla,bol,8,12);

console.log(`result: `, result);

// console.log ( mean(topla(5,4),bol));

///Calback to call afunction inside a function

function say() {
  alert("bugunluk bukadar!")
}

say();


setTimeout( function(){
  alert("bye bye")
}, 5000
);


