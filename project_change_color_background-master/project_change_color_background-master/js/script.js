
const button = document.querySelector('button');

const body = document.querySelector('body');
const colourArr = ['#fff06J', 'magenta', 'blue', 'olive', 'maroon', 'aliceblue', 'orange', 'azure'];


body.style.backgroundColor = 'cyan';
button.addEventListener('click', cycleColor);


function cycleColor() {
    let cycleNum = Math.floor(Math.random() * 7);
    body.style.backgroundColor = colourArr[cycleNum];    
};



//© Fuad Ahammed 6/6/20
