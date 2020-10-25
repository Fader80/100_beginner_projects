const linkButton = document.querySelector('a');
const body = document.querySelector('body');
var textBox = document.getElementById('hex-value');






const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'f'];


body.style.backgroundColor = 'red';


linkButton.addEventListener('click', cycleColor);

 function cycleColor() {
     let hexColor = '#';
    for (var i = 0; i < 6; i++) {
        let arrNum = Math.floor(Math.random() * hexArr.length);
        hexColor += hexArr[arrNum];
      }
            
       body.style.backgroundColor = hexColor;

       textBox.innerHTML = hexColor;


       

}

//©Fuad Ahammed 8/6/20







