//array that we use to push img on it when we clicked
var clickedImg=[];
num=0;
//array that we put number random in it to use it for getting img randomly
grid=[];
 var randomImgs=[];
 //array to use random number for getting img randomly

 var arrimgs=["1.gif","4.gif","5.gif","6.gif","1.gif","2.gif","4.gif","3.gif","2.gif","5.gif","3.gif","6.gif"]

 //1-function to get number randomly push it in grid array and fill img with random img
function random(){
   reset();
 for(var i = 0;i<12; i++){
   var temp = Math.floor((Math.random()*12));
   
   if(grid.indexOf(temp) == -1){
       grid.push(temp);
      
      
   }
   else
    i--;
}
fillgrid()
console.log(grid);


}
//fill img randomly
function fillgrid(){
   
    for(s in  grid){
        
        randomImgs.push(arrimgs[grid[s]]);

       //replace alt with src to use it in appera img
        document.getElementsByTagName("img")[s].alt=randomImgs[s];
        console.log(document.getElementsByTagName("img")[s].alt);
        console.log(randomImgs[s]);
        
    }
    
   // randomImgs.splice(0,12);
}
function reset(){
    for(a=0;a<12;a++){
        document.getElementsByTagName("img")[a].alt="Moon.gif";
        document.getElementsByTagName("img")[a].src="Moon.gif";
    }
    grid.splice(0,12);
    
}
//button play
document.getElementsByTagName("button")[0].addEventListener("click",
function(){
//; 
random();
document.getElementsByTagName("button")[0].textContent="restart";



});
//btn to close game
document.getElementsByTagName("button")[1].addEventListener("click",
function(){
//; 
window.close();

});
//functio to appear img when click on moon
function appimg(e){
   tempp=e.alt;
    e.src=e.alt;
    clickedImg.push(tempp);
    console.log(clickedImg);
    var i=clickedImg.length;
        
      //to appear congratulation msg
       //get index of img1 to delet it from array
        x=clickedImg.indexOf(clickedImg[i-2]);
    
      if(clickedImg[i-2]==clickedImg[i-1]) {
        num++;
        console.log(num)
    }
       if(num>5){
        alert("congratulation you win!");
       //to rest elemnets
      
      location.reload(); 
       }
}
//function to apper or hide images when mouse over in image
function check(e){
    if(clickedImg.length==1){
        var myImg=clickedImg[0].src
        myImg=e.alt;
        
        
      
        
    }else{
        
        //to test if two following img is identical or not
        var i=clickedImg.length;
        
         
         x=clickedImg.indexOf(clickedImg[i-2]);
        
           if(clickedImg[i-2]==clickedImg[i-1]) {
              var img1=document.querySelector("img[src='"+clickedImg[i-2]+"]'");
              var img2=document.querySelector("img[src='"+clickedImg[i-1]+"]'");
              
              //delet elemnt that identical from array to compare next time correctly
              clickedImg.splice(x,2);
              }
              else{
                  
           //to change src of img if are differen to moon i get it from imgs array
            var img1=document.querySelector("img[src='"+clickedImg[i-2]+"']");
            var img2=document.querySelector("img[src='"+clickedImg[i-1]+"']");
            img1.src="moon.gif";
            img2.src="moon.gif";
            clickedImg.splice(x,2)
            console.log(clickedImg);
           
            console.log("different");
           }
         
            
        

    }
}
