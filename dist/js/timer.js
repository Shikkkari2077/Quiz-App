let sec = 0
let min = 0

setInterval(function(){
   if(sec<59){
       sec++
   }else{
       min++
       sec = 0
   }

   let formatedSec = sec<10?`0${sec}`:`${sec}`
   let formatedMin = min<10?`0${min}`:`${min}`

   document.querySelector(".timer").innerHTML=`${formatedMin}:${formatedSec}`
   
},1000)