
const arrListMail = ["marcorossi@gmail.com","henrysalmon@gmail.com","pippobaudo@gmail.com","lucatoni@cannelloni.com", "zeus@gmail.com"];

const eleEmail = document.querySelector('#user-email');
const eleForm = document.querySelector('form');
const eleOutput = document.querySelector('#output');


eleForm.addEventListener('submit',function (event){
  event.preventDefault();

  let emailFound = false;
  for (let i = 0; i < arrListMail.length; i++) {
    if(eleEmail.value === arrListMail[i]) {
       console.log('Trovata');
       emailFound= true;
    } else {}
}

  if (emailFound) {
      eleOutput.innerHTML = 'Mail esatta';
      emailFound = true;
    } else {
      eleOutput.innerHTML = 'Mail sbagliata';
    }
})
  








