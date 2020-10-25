var lowerButton = document.getElementsByClassName("btn counterBtn prevBtn text-uppercase m-2")[0];
var addButton = document.getElementsByClassName("btn counterBtn nextBtn text-uppercase m-2")[0];
var counterNum = document.getElementById("counter");

lowerButton.addEventListener('click', minusNum);
addButton.addEventListener('click', addNum);


function minusNum() {
counterNum.innerHTML--;
if (counterNum.innerHTML < 0) {
  counterNum.style.color = 'red';
} 
else if(counterNum.innerHTML > 0) {
  counterNum.style.color = 'green'
}

else {
counterNum.style.color = '#333333';
}

};

function addNum() {
counterNum.innerHTML++; 
if (counterNum.innerHTML > 0) {
  counterNum.style.color = 'green';
}
else if(counterNum.innerHTML < 0) {
  counterNum.style.color = 'red'
}

else {
  counterNum.style.color = '#333333';
}

};



//Ⓒ Fuad Ahammed 26/6/20


