let registrationForm = document.querySelector('.container');
let formClose = document.querySelector('#form-close');


 formClose.addEventListener('click', () =>{
    registrationForm.classList.remove('active');
  });

  function validateform(event){
    event.preventDefault();
    alert("successfully registered");
  }