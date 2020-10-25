
var buttons = document.querySelectorAll('.btn');
var backImg = document.querySelector('.img-container');
var imgArr = ["contBcg-0.jpeg", "contBcg-1.jpeg", "contBcg-2.jpeg", "contBcg-3.jpeg", "contBcg-4.jpeg"]

let i = 0;



buttons.forEach(function(button){
  button.addEventListener('click', function(){    

    if (button.classList.contains('btn-left')){      
      if (i > 0 ) {
        i--;
      }
      else {
        i = imgArr.length -1;

      }
            
    }
     if (button.classList.contains('btn-right')) {  
      if (i < imgArr.length - 1) {
        i++;
      }
      else {
        i = 0;
      }
    }

    backImg.style.backgroundImage = `url('img/${imgArr[i]}')`;
   

  })
});



//© Fuad Ahammed 10/07/2020
