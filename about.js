let textArr=["Arabic Calligrapher","Graphic Designer","Video Editor","Web Developer","Visual Artist"];
let colArr=["#ff3333","#1fd14f","#00cdcd","#fba505","#4285f4"];
let i=0;
setInterval(function(){    

        document.querySelector(".jobtitle").innerHTML=textArr[i];       
        document.querySelector(".jobtitle").style.cssText=`color: ${colArr[i]}`;       
        i++;
        if(i==5){
            i=0;
        }
    
    }
,1000)
