const inputField = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');
const msgField = document.getElementsByTagName('h4')[2].childNodes[0];
const blankAlertField = document.getElementsByTagName('h5')[0];




submitBtn.addEventListener('click', dispMsg);



function dispMsg() {

     if (inputField.value !== '') {
     msgField.textContent = inputField.value;
     event.preventDefault();
     inputField.value = '';
     }
     else {
          blankAlertField.classList.add("show");
          event.preventDefault();
          setTimeout(function removeAlert(){
          blankAlertField.classList.remove("show");
          }, 2000);

          
     }


}

//©Fuad Ahammed 20/06/2020





