const userMail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');
const message = document.getElementById('show-messages');

const confirmBtn = () => {
    userMailValue = userMail.value;
    userPasswordValue = userPassword.value;

    const mailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordValidation = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if (userMailValue.match(mailValidation) && userPasswordValue.match(passwordValidation)) {
        message.innerHTML = `
            <h3 class="text-success text-center">Thanks for your Email and Password...</h3>
        `;
        userMail.value = '';
        userPassword.value = '';
    }
    else {
        message.innerHTML = `
        <h3 class="text-danger text-center">Invalid Email or Password!!!</h3>
    `;
        userMail.value = '';
        userPassword.value = '';
    }
}