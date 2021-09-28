const submitBtn = document.querySelector('.submit_btn');
const regName = /[яА-ЯёЁ]/;
const regTel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

submitBtn.onclick = function (e) {
    e.preventDefault();
    let userName = document.getElementById('FIO').value;

    let tel = document.getElementById('Tel').value;

    let email = document.getElementById('email').value;

    const field = document.querySelector('.form-field');

    if (!regName.test(userName)) {
        field.style.borderColor = "#DF0000";
        document.querySelector('.form-alert').style.opacity = "1";
    } else {
        field.style.borderColor = "#DCDCDC";

    }

    console.log(userName, tel, email);
}