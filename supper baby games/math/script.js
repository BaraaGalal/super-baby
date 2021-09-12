// the input fild 
var input = document.querySelector('#input-number');
// the message text will appear when win the user click the button
var textMss = document.getElementById('text');

 // random number for two element
var firstNumber =  parseInt(Math.random()*10) +1;
var secondNumber =  parseInt(Math.random()*10) +1;

// random operation
var op = ["*", "+", "-"][Math.floor(Math.random()*3)];
// make the random operation appear
var operation = document.getElementById('operation');
operation.innerHTML = op;

// make the first number appear in first div
// if the first number > second 
var first = document.getElementById('first-number');
first.innerHTML = firstNumber;

// make the second number appear in second div
var second = document.getElementById('second-number');
second.innerHTML = secondNumber;

if(op == "-" && firstNumber < secondNumber)  {
        var temp = first.innerText;
        var tempTwo = second.innerText;
        second.innerText = temp;
        first.innerText = tempTwo;
}

// to calculate the operation mathematic
var total = eval(firstNumber + op + secondNumber);

// the check button 
var btn =document.querySelector('#btn');

// add event listener to the button when the user write his answer 
btn.addEventListener('click', function () {
    // the input value 
    var userInput = document.querySelector('#input-number').value;
    // check if is correct answer
    if (userInput == total) {
        input.style.backgroundColor = "green";
        input.style.color = "white";
        textMss.style.color = "green";
        textMss.innerHTML = 'Correct';
        

        setTimeout(function() {
            window.location.reload();
        }, 1000)
    }
    // check if the user didn't enter a number
    else if (userInput == '') {
        textMss.style.color = "black";
        textMss.innerHTML = 'Please Inter Your Answer';
    }
    // check if is Incorrect answer

    else {
        input.style.backgroundColor = "red";
        input.style.color = "white";
        textMss.style.color = " rgb(153, 15, 15)";
        textMss.innerHTML = 'Sorry. Incorrect Please Try Again';
    }
});