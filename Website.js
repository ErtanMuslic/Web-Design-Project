function myFunction() {
    location.replace("/app/src/app.vue")
  }




const from = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const address = document.getElementById('address');

from.addEventListener('submit', (e) => {
    e.preventDefault();

    check();
});

function check() {
    const uservalue = username.value.trim();
    const emailvalue = email.value.trim();
    const numbervalue = number.value.trim();
    const addressvalue = address.value.trim();

    if(uservalue === ''){
        seterror(username, 'Username can`t be blank');
    } else {
        setsucc(username);
    };

    if(emailvalue === ''){
        seterror(email, 'Email can`t be blank');
    } else if(!checkemail(emailvalue)){
        seterror(email, 'Email is not valid');
    } else {
        setsucc(email);
    };

    if(numbervalue === ''){
        seterror(number, 'Number can`t be empty');
    } else if(numbervalue.length < 10){
        seterror(number, 'Number can`t be any less than 10 characters');
    } else {
        setsucc(number);
    }
}

function seterror(input, message){
    const formgroup = input.parentElement;
    const small = formgroup.querySelector('small');

    small.innerText = message;
    formgroup.className = 'form-group fail';
}

function setsucc(input){
    const formgroup = input.parentElement;

    formgroup.className = 'form-group succ';
}

function checkemail(e){
    return e.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}