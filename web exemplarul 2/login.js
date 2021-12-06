$(document).ready(function () {
  var usernameField = $("#username");
  var passwordField = $("#password");

  $("#submitBtn").on("click", function (e) {
    e.preventDefault()
    size = checkInputs();
    console.log(size);
    if (size === 0) {
      document.getElementById("form").submit();
    }
  });
  });


function checkInputs() {

  const usernameValue = username.value.trim();

  const passwordValue = password.value.trim();

  
  if (usernameValue === '') {
  setErrorFor(username, 'Numele de utilizator nu este completat!');

  }
  
  else {
  setSuccesFor (username);
  }

    
    var textLength = passwordValue.length;

    if (passwordValue === '') {
      setErrorFor(password, 'Introduceti campul!');
     
      } else if (textLength<=8) {
        setErrorFor(password, 'Completati campul cu minim 8 caractere!');
      
      }
      
      else {
      setSuccesFor (password);
      }

    return c;
  }


function setErrorFor (input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;

  formControl.className = 'form-control error';
}

function setSuccesFor (input, message) {

  const formControl = input.parentElement;

  formControl.className = 'form-control succes';

}