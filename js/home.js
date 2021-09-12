
//slide show
var i=0;
var time=2000;
var imgs=[];
imgs[0]="images/fallingball.jpeg";
imgs[1]="images/math.jpeg";
imgs[2]="images/imgagepuzzle.jpeg";
imgs[3]="images/numberpuzzle.jpeg";
imgs[4]="images/sketchmaker.jpeg";
imgs[5]="images/memoryGames.jpeg";
var slider=document.getElementById("slider");
var heading=document.getElementById("hslider");

function nextShow(){
    shangeHead(i)
    //swap img as background of slider div
   slider.style.backgroundImage = `url(${imgs[i]})`;
   //swap header with img
   heading.textContent=imgs[i].split("/")[1].split(".")[0];
   
    
    if(i<imgs.length-1){
        i++;
    }else{
       i=5;
    }
    
}
function prevShow(){
    shangeHead(i)
    slider.style.backgroundImage = `url(${imgs[i]})`;
    //swap header with img
    heading.textContent=imgs[i].split("/")[1].split(".")[0];
    
    if(i>0){
        i--;
    }else{
      i=0;
    }
    //setTimeout("slideShow()",time);
}
function slideShow(){
    myVar=setInterval("slideShow1()", time);
    
    
}
function slideShow1(){
   
    slider.style.backgroundImage = `url(${imgs[i]})`;
    shangeHead(i)
    
    //heading.textContent=`${imgs[i].split("/")[2].split(".")[0]}`;
    
    if(i<imgs.length-1){
        i++;
    }else{
       i=0;
    }
   
}
//debugger;
function stopShow(e){
    var url = e.style.backgroundImage;
    clearInterval(myVar);
    //to get name of image to redirect to its page by clicking on image
    var nameImg=url.replace('url(','').split("/")[1].split(".")[0];
      console.log(nameImg)
    switch(nameImg){ 
        case 'fallingball':
            window.open("games/ball_game/ballgame.html", "_tab");
        break;
        case 'math':
        window.open("games/math/index.html", "_tab");
        
        break;
        case 'imgagepuzzle':
            window.open("games/images puzzle/index.html ", "_tab");
        
        break;
        case 'numberpuzzle':
            window.open("games/puzzle game/puzzle.html", "_tab");
        
        break;
        case 'sketchmaker':
            window.open("games/sketch maker/index.html", "_tab");
       
        break;
        case 'memoryGames':
            window.open("games/memory game/mamory.html", "_tab");
            
        break;
        default:
            heading.textContent="slider show";  
}
    
}
/****function to chang header with slider */
function shangeHead(i){
    switch(i){
        case 0:
            heading.textContent="falling ball";
            break;
            case 1:
            heading.textContent="math";
            break;
            case 2:
            heading.textContent="image puzzle";
            break;
            case 3:
            heading.textContent="number puzzle";
            break;
            case 4:
            heading.textContent="sketch maker";
            break;
            case 5:
            heading.textContent="memory Games";
            break;
            default:
                heading.textContent="slider show";  
    }
}
/***********home page responsive */
var label=document.getElementsByTagName("label")[0];
var menu=document.getElementById("dropmenusm");
label.addEventListener("click",function(){
  menu.style.background="pink";
 
  menu.classList.toggle("display")
  menu.style.clear="both"

})

/*****up button *****/
var upBtn=document.getElementById("up");
window.onscroll=function(){
    console.log(window.pageYOffset);
    if(window.pageYOffset>100){

        upBtn.style.display="block"
    
}else{
    upBtn.style.display="none"
}
}
/***up event*/
upBtn.addEventListener('click',function(){
  
    window.scrollTo({ top:0, behavior: 'smooth' });
  
   
    
})
/*****login button */
var loginBtn=document.getElementById("login");
loginBtn.addEventListener("click",function(){
    location.href="formLogin2.html";
})
