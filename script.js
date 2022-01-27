var form = document.querySelector('.form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var age = document.getElementById('age');
var password = document.getElementById('password');
var cnfpassword = document.getElementById('cnfpassword');

form.addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault();

    checkUserName(username);
    checkEmail(email);
    checkAge(age);
    checkPassword(password);
    checkCnfPassword(cnfpassword);
}

function checkUserName(element){
    var nameOfUser = element.value;
    if(nameOfUser === "") {
        setError(element, "User name cannot be empty");
    }
    else {
        onSuccess(element);
    }
}

function checkEmail(element) {
    var emailValue = element.value;
    if (emailValue === "") {
        setError(element, "Email cannot be empty");
    }
    else if(!isEmail(emailValue)) {
        setError(element, "Invalid email");
    }
    else {
        onSuccess(element);
    }
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkAge(element) {
    var ageValue = element.value;
    if (ageValue === "") {
        setError(element, "Email cannot be empty");
    }
    else {
        onSuccess(element);
    }
}

function checkPassword(element) {
    var specialCharacter = ["(", "@", "#"];
    var passwordValue = element.value;
    if (passwordValue === "") {
      setError(element, "password cannot be empty");
    }
    else {
        var flag = true;
        for ( var i = 0 ; i<specialCharacter.length; i++) {
            if (!passwordValue.incudes(specialCharacter[i])) {
                flag = false;
            }
            if (flag) {
                onSuccess(element);
            } 
            else {
                setError(element, "password should contain '(', '@', '#'");
            }
        }
    }
  }

  function checkCnfPassword(element) {
    var passwordValue = password.value;
    var confirmPasswordValue = element.value;
    if (confirmPasswordValue === "") {
      setError(element, "confirm password cannot be empty");
    } else if (passwordValue !== confirmPasswordValue) {
      setError(element, "passwords do not match");
    } else {
      onSuccess(element);
    }
  }

  function setError(element, errorMessage) {
    var formControl = element.parentElement;
    formControl.className = "form-control failure";
    formControl.querySelector("small").innerText = errorMessage;
  }
  
  function onSuccess(element) {
    var formControl = element.parentElement;
    formControl.className = "form-control success";
  }