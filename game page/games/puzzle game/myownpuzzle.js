//two way binding betwwen grid and grid that contain button

var grid=[];

//to count number of move
var moveNumbs=0;

//handle html elemnt  
var move= document.getElementById("move");
var time= document.getElementById("time");
var msg=document.getElementsByClassName("message")[0];
var btnPlay=document.getElementById("play");
var valueBtn=document.getElementsByClassName("btn");
var blankBtn=document.getElementsByClassName("btn");


//fill grid and grid array with random numbers
function RandomNumbs(){
    for(var i = 0;i<16; i++){
        var temp = Math.floor((Math.random()*16)+1);
        console.log(temp);
        if(grid.indexOf(temp) == -1){
            grid.push(temp);
        }
        else
         i--;
    }
    fillGrid();
    console.log(grid);
     
    btnPlay.innerText="reset";
}
// when click btn play

btnPlay.addEventListener("click",function(){

   //to intialize move content(nimber of move)

   move.innerText="move:0";
   moveNumbs=0;
   console.log(grid);
    grid.splice(0);

    //to reset time to zero if we click on reset again
    if(count>1){
        myStopFunction();
        count=0;
        countTimer(); 
        console.log(grid);
        RandomNumbs();
         
    }
    else{
    countTimer(); 
  
//to prevent repeating of random number
RandomNumbs();
    
}});


//timer start when we click on reset or play button//
count=1;
function countTimer(){
    
    timer=setInterval(function(){
    time.innerText=`time:${count}`;
        count++;
        },1000)
    
}
//to stop time
function myStopFunction() {
    clearInterval(timer);
  }

//clear btn when page loading

function clear(){
   
    for(i=0;i<valueBtn.length;i++){
        valueBtn[i].textContent=null;
    }
    move.textContent="move:0";
    time.textContent="time:0";
    msg.textContent=null;
   
}

//function to move boxes

function d(el){
   
     //btn content to get index of this conntent in grid array
     boxCont=el.textContent;

     //blankBox=grid[grid.indexOf(16)];
      blankBox=grid.indexOf(16);
     
     //convert btn content to int value to use it in grid array

     boxNum=parseInt(el.textContent);

     console.log(blankBox);
     
     if(boxCont==""){//to check if boxcont==null
   
     boxIndx=grid.indexOf(16);
  // console.log(grid.indexOf(16));
        box();
     if((topbox==16)||(rightbox==16)||(leftbox==16)||(bottombox==16)){
            console.log("swap")
            swap();
            console.log(grid);
     }
     else{//else2 of swap prevent
        console.log("prevent");
         /*el.onclick= function (e) { 
           
            e.preventDefault(); 
          };*/

    }//else2
}
    else{
    console.log();
    boxIndx=grid.indexOf(boxNum);
    box();
    if((topbox==16)||(rightbox==16)||(leftbox==16)||(bottombox==16)){
        console.log(grid);
        swap();
        console.log("swap");
        console.log(moveNumbs);
        
 }
 else{
    /*el.onclick= function (e) { 
        console.log("prevent");
        e.preventDefault(); 
      };*/
      console.log("prevent");
 }
    
 isSolved();  
 
   
    
   

    }
    
}
//find boxes arround current box

function box(){
    topbox=grid[boxIndx-4];//value in top box
    leftbox=grid[boxIndx-1];//value in left box
    rightbox=grid[boxIndx+1];//value in right box
    bottombox=grid[boxIndx+4];//value in bottom box
    console.log(boxCont);
    //topbox
    if(boxCont==0||boxCont==1||boxCont==2||boxCont==3){
        topbox==undefined;
        console.log(topbox);
    }else{
        console.log(topbox);
    }
    //left box
    if(boxIndx==0||boxIndx==4||boxIndx==8||boxIndx==12){
        leftbox==undefined;
        console.log(leftbox);
    }else{
        console.log(leftbox);
    }
    //right box
    if(boxIndx==3||boxIndx==7||boxIndx==11||boxIndx==15){
        rightbox==undefined;
        console.log(rightbox);
    }else{
        console.log(rightbox);
    }
    //bottom box
    if(boxIndx==12||boxIndx==13||boxIndx==14||boxIndx==15){
        bottombox==undefined;
        console.log(bottombox);
    }else{
        console.log(bottombox);
    }
  
}
//fuction to fill grid
function fillGrid(){
    for(var l=0;l<16;l++){
        if(grid[l]==16){
        valueBtn[l].textContent="";
        }else{
           valueBtn[l].textContent=grid[l];
        }
       
       
    }   
}
//function to swap elements
function swap(){
    console.log(grid);
        var tem=grid[boxIndx];
        grid[grid.indexOf(16)]=tem;
        grid[boxIndx]=16;
        boxNum=grid.indexOf("");
        console.log(grid.indexOf(boxNum))
        fillGrid();
        moveNumbs++;
        move.innerText=`move:${moveNumbs}`;
}
function isSolved(){
   if( 
    grid[0]==1&&
    grid[1]==2&&
    grid[2]==3&&
    grid[3]==4&&
    grid[4]==5&&
    grid[5]==6&&
    grid[6]==7&&
    grid[7]==8&&
    grid[8]==9&&
    grid[9]==10&&
    grid[10]==11&&
    grid[11]==12&&
    grid[12]==13&&
    grid[13]==14&&
    grid[14]==15&&
    grid[15]==16){
        msg.innerText="congratulation you win!";
    }

    }
    
//function to check box arroundcurrentbox
function checkBox(){
    if((topbox==16)||(rightbox==16)||(leftbox==16)||(bottombox==16)){
        console.log("swap")
        swap();
        console.log(grid);
 }
 else{//else2 of swap prevent
    
     el.onclick= function (e) { 
        console.log("prevent");
        e.preventDefault(); 
      };
    }
}






