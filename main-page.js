setInterval(() =>{
    var xRandom=Math.floor(Math.random()*10);
    document.getElementById("imgtochange").src=`assets/main-page/landingimgs/img${xRandom}.jpg`;
},(3400));

function landing(){
    document.querySelector(".landing").style.cssText="transform:scale(102%);";
    document.querySelector(".limg").style.cssText="filter: brightness(100%); ";
}
function landingout(){
    document.querySelector(".landing").style.cssText="transform:scale(100%);";
    document.querySelector(".limg").style.cssText="filter: brightness(40%);";
}

var i=0,text;
text="Abdullah\nMon3em!!";
setInterval(function(){
    if(i<text.length){
        document.querySelector(".abdullah").innerHTML +=text.charAt(i);
        i++;
        if(i==text.length){
            document.querySelector(".abdullah").innerHTML="";
            i=0;
        }       
    }
},200)


function servscard(card){
    card.style.cssText="transform:scale(105%); color:var(--green); mix-blend-mode: screen;";
}
function servscardout(card){
    card.style.cssText="transform:scale(100%); color:var(--white); mix-blend-mode: screen;";
}

let nums=document.querySelectorAll(".stats #count");
let div=document.querySelector(".stats");
let start=false;

window.onscroll = function(){
    if(window.scrollY>=div.scrollTop){
    if(!start){
        nums.forEach((num)=>counting(num)); 
    } 
    start=true;
    }
}
function counting(el){
     let goal=el.dataset.goal;
     let counter=setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(counter);
        }
     },1500 / goal);
}
counting(document.querySelectorAll(".stats #count"));
