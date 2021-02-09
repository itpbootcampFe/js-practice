const firstPazar = function(yil, ay) {
  var date = new Date(yil,ay);
  let indexInWeek = date.getDay();
  let indexInMonth = date.getDate();
  if(indexInWeek!==0){
    while (indexInWeek < 7) {
      indexInWeek++;
      indexInMonth++;
    }
  }
  return console.log(`${ay} ayinin ilk pazari ${indexInMonth}. gundur.`);
};


firstPazar(2030,5);

const itpa = {
  users:[
  {
    name:"Mahmut",
    githubLink:"githum.com/MAT-IT",
    assignments: [0,1,0,1]   
  },
  ]
} 

itpa.users[0].name="Hasan";

console.log(itpa);


let title= document.createElement("h3")
title.style.color="#fff";
title.style.placeSelf="center";
//title.innerText="Assignments Table";
title.innerText=itpa.users[0].name;


let section2 = document.querySelector(".section2").appendChild(title)
