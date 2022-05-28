const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const phoneEl = document.querySelector('#phone');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');


const checkName = () => {

    let valid = false;
    const name = nameEl.value.trim();

    if (!name.match(/^[A-Za-z]*$/)) {
        showError(nameEl, 'Name only have alphabets.');
    } else if (name.length == 0) {
        showError(nameEl, 'Name cannot be blank.');
    } else if (name.length < 3) {
        showError(nameEl, 'Name must have 3 characters.');
    } else {
        showSuccess(nameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (email.length == 0) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPhone = () => {
    let valid = false;
    const phone = phoneEl.value.trim();
    if (phone.length == 0) {
        showError(phoneEl, 'Phone cannot be blank.');
    } else if (isNaN(phone)){
        showError(phoneEl, 'Phone must be number.');
    } else if (phone.length <= 9) {
        showError(phoneEl, 'Enter 10 digit phone number.');
    } else {
        showSuccess(phoneEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (password.length == 0) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (password.length < 6) {
        showError(passwordEl, 'Password must has at least 6 characters.');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const showError = (input, message) => {
    
    const formField = input.parentElement;
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {

    const formField = input.parentElement;
    formField.classList.remove('error');

    const error = formField.querySelector('small');
    error.textContent = '';
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isNameValid = checkName(),
        isEmailValid = checkEmail(),
        isPhoneValid = checkPhone(),
        isPasswordValid = checkPassword()

    let isFormValid = isNameValid &&
        isEmailValid &&
        isPhoneValid &&
        isPasswordValid;

    if (isFormValid) {
        console.log('success')
    }
});