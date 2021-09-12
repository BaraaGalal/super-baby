var pictureArray = [["apple.jpg", "apple",], ["ball.jpg","ball"], ["lamp.jpg","lamp"], ["rabbit.jpg","rabbit"], ["dog.jpg","dog"],["zebra.jpg","zebra"], ["egg.jpg", "egg"], ["orange.jpg","orange"]];

randomIndex = "";
var memory_values = [];
var memory_tile_ids = [];
var checkStart = 0;
var attempt = 0;
var score = 0;

var gameLength = 10;


var btnStart = document.getElementById("k-m-game-start-btn");
var deckCover = document.getElementsByClassName("k-memory-game-deck-cover");
var gameOptions = document.getElementById("k-m-game-options-wrap");
var finishMessage= document.getElementById("k-m-gamefinish-message-wrapper");
var finalScore = document.getElementById("k-m-game-final-score");
var gamePlaceHolder = document.getElementById('m-k-m-game-placeholder');
var gameInstruction = document.getElementById("k-m-game-instructions");
var gameInstructionBtn = document.getElementById("k-m-game-instruction-btn");

gameInstructionBtn.addEventListener("click", function(){
    if(gameInstruction.style.display == "block"){
        gameInstruction.style.display = "none";
    }else{
        gameInstruction.style.display = "block";
    }
    
});


var kmGameLength = document.getElementById("k-m-game-length");
document.getElementById("d-g-final-marks").innerHTML = attempt;



Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random()*(i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] =temp;
    }
}

   
function newBoard(){
    randomIndex = Math.floor(Math.random()*pictureArray.length);
    tiles_flipped = 0;
    var output = '';
    pictureArray.memory_tile_shuffle();
    
    for(var i = 0; i < pictureArray.length; i++){
        output += '<div class="d-game-item-wrap" id="d-game-item-wrap'+[i]+'"><div class="k-memory-game-deck-cover" id="k-memory-game-deck-cover'+[i]+'"onclick="gamePlay(this,\''+pictureArray[i][0]+'\')"></div><img class="d-game-item-image-wrap" src="https://yvana.org/yvana_images/yvana_kids-games-images/'+pictureArray[i][0]+'" /></div>'
    }
    gamePlaceHolder.innerHTML = output;
}


newBoard();

function gameinit(){
    newBoard();
    if (checkStart===1){
        boardDisplay();
    }
    
}

function gameOption(){
    gameOptions.innerHTML = pictureArray[randomIndex][1];
    return gameOptions.innerHTML;
};

function boardDisplay(){
   setTimeout(gameOption, 10000);
    var kmgOptionSound = new Audio();
        kmgOptionSound.src = "https://yvana.org/audios/kids-memory-games/"+pictureArray[randomIndex][1]+".ogg";
        setTimeout(function() { kmgOptionSound.play(); }, 10000);
        for(let i=0; i <deckCover.length; i++){
        deckCover[i].style.animation = "lefttorightanimation 10s";
         var kmgsSlideOutSound = new Audio();
            kmgsSlideOutSound.src = "https://yvana.org/audios/slideout.ogg";
            kmgsSlideOutSound.play();
    } 
}

function boardDim(){
    for(let i=0; i <deckCover.length; i++){
        deckCover[i].style.background = "none";
        deckCover[i].style.opacity = ".5";
        deckCover[i].style.backgroundColor = "red";
    }
}


function gamePlay(tile, val){
    if(checkStart === 1){
        if(memory_values.length == 0){
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
        }
        if(memory_values[0] === gameOption()+'.jpg'){
            score++;
            document.getElementById("k-m-game-score").innerHTML= score;
            finalScore.innerHTML = score;
            document.getElementById(memory_tile_ids[0]).style.display="none";
            var kmgSuccessSound = new Audio();
                kmgSuccessSound.src = "https://yvana.org/audios/success1.ogg";
                kmgSuccessSound.play();
            memory_values = [];
            memory_tile_ids = [];
            checkStart = 1;
            boardDim();
            setTimeout(gameinit, 2000);
            gameOptions.innerHTML = "";
    
        }else{
            var kmgfailureSound = new Audio();
            kmgfailureSound.src = "https://yvana.org/audios/s-a-game-wrong.ogg";
            kmgfailureSound.play();
            document.getElementById(memory_tile_ids[0]).style.display="none";
            memory_values = [];
            memory_tile_ids = [];
            checkStart = 1;
            boardDim();
            setTimeout(gameinit, 2000);
            gameOptions.innerHTML = "";
        } 
        
        if (attempt < gameLength-1){
            
            attempt++;
            kmGameLength.innerHTML = attempt;
            var kmgClickSound = new Audio();
            kmgClickSound.src = "https://yvana.org/audios/tic-toc-click.ogg";
            kmgClickSound.play();
             
            }else{
                var kmgFinishSound = new Audio();
                kmgFinishSound.src = "https://yvana.org/audios/finishgame.ogg";
                kmgFinishSound.play();
                document.getElementById("k-m-gamefinish-message-wrapper").style.display = "block";
                checkStart = 0;
                
        }
    }
}


btnStart.addEventListener("click", function(){
    gameInstruction.style.display = "none";
    checkStart = 1;
    attempt=0;
    gameinit();
});

var playAgain = document.getElementById("k-m-game-play-again-btn");
playAgain.addEventListener("click", function(){
    score= 0;
    attempt = 0;
    checkStart = 1;
    gameinit();
    finishMessage.style.display = "none";
});