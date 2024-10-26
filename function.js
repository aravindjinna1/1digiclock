

let date;

setInterval(()=>{
let d=new Date();

heading.innerHTML=d;
let time=d.toLocaleTimeString();
date=d.toLocaleDateString();
heading.innerHTML=`${time} ${date}`;
},100);