 //هنا احنا بنعرف المتغيرات بتاعتنا زى الديف اللى فيها محتوى اللعبة والكرة 
 var ball = document.getElementById("ball");
 var game = document.getElementById("game");
 var interval;
 var both = 0;

 // هنا بنعمل فانكشن بتحرك الكرة للشمال
 function moveLeft(){
 var left = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
 if(left>0){
 ball.style.left = left - 2 + "px";
 }
 }
 // هنا بنعمل فانكشن بتحرك الكرة لليمين
 
 function moveRight(){
 var left = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
 if(left<380){
 ball.style.left = left + 2 + "px";
 }
 }
 // هنا بنعمل اسيين لزرار الاتجاه يمين وشمال عشان يشتغلوا مع الفانكشنز اللى عملناها لما ندوس على الزرار
 document.addEventListener("keydown", event => {
 if(both==0){
 both++;
 if(event.key==="ArrowLeft"){
     interval = setInterval(moveLeft, 1);
 }
 if(event.key==="ArrowRight"){
     interval = setInterval(moveRight, 1);
 }
 }
 });
//  هنا بنوقف الحركة لما نشيل ايدينا من على الزرار
 document.addEventListener("keyup", event => {
 clearInterval(interval);
 both=0;
 });


  var counter = 0;  // متغير بنعد بيه عدد البلوكات 
  var currentBlocks = []; //  counterبندخل فيها البلوكات اللى بتتكرييت مع كل array
 
 var blocks = setInterval(function(){
 var blockLast = document.getElementById("block"+(counter-1));
 var holeLast = document.getElementById("hole"+(counter-1));
 if(counter>0){
 var blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));// بجيب مكان اخر بلوك عشان ابدأ اعمل بلوك جديد
 var holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
 }
 if(blockLastTop<400||counter==0){
 var block = document.createElement("div"); //block و hole بنعمل عنصر جديد اسمه 
 var hole = document.createElement("div");
 block.setAttribute("class", "block");
 hole.setAttribute("class", "hole");
 block.setAttribute("id", "block"+counter);
 hole.setAttribute("id", "hole"+counter);
 block.style.top = blockLastTop + 100 + "px";
 hole.style.top = holeLastTop + 100 + "px";
 var random = Math.floor(Math.random() * 360); //بس hole نطبقها على ال randomب بنعمل فانكشن لل و
 hole.style.left = random + "px";
 game.appendChild(block);  
 game.appendChild(hole);
 currentBlocks.push(counter); // هنا بنضيف الكونتر لل اراى عشان اعرف احسب الاسكور
 counter++;
 }
//  هنا بحسب التوب للكرة عشان لو بقا يساوى صفر كدة معناه انه وصل لاخر بلوك ف الجيم وخسر واوقف 
 var ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
 var ballLeft = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
 var drop = 0;
 if(ballTop <= 0){
 // alert("Game over. Score: "+(counter-9));
 window.location.replace("score.html");
 clearInterval(blocks);
//location.reload();
 }

 // هنا احنا بنخلى البلوكات تتحرك فوق بعضها بقيمة 0.5 بيكسل 
//  وكل بلوك بيشيك على البلوك اللى قبليه عشان ياخد مكانه ويشوفه وصل للتوب ولا لسه 
// وبعد كدة بيشيل كل البلوكات اللى اتعملت وعدت عليهم الكرة 

 for(var i = 0; i < currentBlocks.length;i++){
 let current = currentBlocks[i];
 let iblock = document.getElementById("block"+current);
 let ihole = document.getElementById("hole"+current);
 let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
 let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
 iblock.style.top = iblockTop - 0.5 + "px";
 ihole.style.top = iblockTop - 0.5 + "px";

 if(iblockTop < -20){
     currentBlocks.shift();
     iblock.remove();
     ihole.remove();
 }

//  هنا 
 if(iblockTop-20<ballTop && iblockTop>ballTop){
     drop++;
     if(iholeLeft<=ballLeft && iholeLeft+20>=ballLeft){
         drop = 0;
     }
 }
 }
 if(drop==0){
 if(ballTop < 480){
     ball.style.top = ballTop + 2 + "px";
 }
 }else{
 ball.style.top = ballTop - 0.5 + "px";
 }
 },1);
 
  