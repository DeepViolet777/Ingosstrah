

const submitBtn = document.querySelector('.submit_btn');

const userName = document.getElementById('FIO');

const tel = document.getElementById('Tel');

const email = document.getElementById('email');

const field = document.querySelector('.form-field');

const check = document.getElementById('check_submit');

const formAlert = document.querySelector('.form-alert');


const regName = /[яА-ЯёЁ]/;

const regTel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

let im = new Inputmask('+7 (999) 999-99-99');

im.mask(tel);

let inputs = document.querySelectorAll('.form-field');

/*
for(let input of inputs){
input.addEventListener('blur', function(){

});
}*/
/*

userName.onchange = function(){
    if (!regName.test(userName.value)) {
        field.style.borderColor = "#DF0000";
        formAlert.style.opacity = "1";
    } else {
        field.style.borderColor = "#DCDCDC";
        check.style.opacity = "1";
      //  formAlert.style.opacity = "0";
        console.log(userName.value);

    }
}


tel.onchange = function(){
    if (!regTel.test(tel.value)) {
        field.style.borderColor = "#DF0000";
        document.querySelector('.form-alert').style.opacity = "1";
    } else {
        field.style.borderColor = "#DCDCDC";
        check.style.opacity = "1";

    }
}


email.onchange = function(){
    if (!regName.test(email.value)) {
        field.style.borderColor = "#DF0000";
        document.querySelector('.form-alert').style.opacity = "1";
    } else {
        field.style.borderColor = "#DCDCDC";
        check.style.opacity = "1";

    }
}

submitBtn.onclick = function (e) {
    e.preventDefault();
   

   

    if (!regName.test(userName)) {
        field.style.borderColor = "#DF0000";
        document.querySelector('.form-alert').style.opacity = "1";
    } else {
        field.style.borderColor = "#DCDCDC";
        check.style.opacity = "1";

    }

    console.log(userName, tel, email);
}*/
check.onchange = function(){
if (check.checked) {
    submitBtn.disabled = false;

} else {
    submitBtn.disabled = true;

}};