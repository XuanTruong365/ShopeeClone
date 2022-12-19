const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs(); 
    
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    var user = {
        username: usernameValue,
        email: emailValue,
        password: passwordValue,
    };

    // if(usernameValue === '') {
    //     setError(username, 'Username không được để trống');
    // } else {
    //     setSuccess(username);
    // }

    // if(emailValue === '') {
    //     setError(email, 'Email không được để trống');
    // } else if (!isValidEmail(emailValue)) {
    //     setError(email, 'Địa chỉ Email không trùng khớp');
    // } else {
    //     setSuccess(email);
    // }

    // if(passwordValue === '') {
    //     setError(password, 'Password không được để trống');
    // } else if (passwordValue.length < 6 ) {
    //     setError(password, 'Password phải có ít nhất 8 ký tự.')
    // } else {
    //     setSuccess(password);
    // }

    // if(password2Value === '') {
    //     setError(password2, 'Vui lòng nhập lại password');
    // } else if (password2Value !== passwordValue) {
    //     setError(password2, "Passwords không trùng khớp");
    // } else {
    //     setSuccess(password2);
    // }

    if(usernameValue === '') {
        setError(username, 'Username không được để trống');
    } else if(emailValue === '') 
    {
        setError(email, 'Email không được để trống');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Địa chỉ Email không trùng khớp');
    } else if(passwordValue === '') 
    {
        setError(password, 'Password không được để trống');
    } else if (passwordValue.length < 6 ) {
        setError(password, 'Password phải có ít nhất 8 ký tự.')
    } else if(password2Value === '') 
    {
        setError(password2, 'Vui lòng nhập lại password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords không trùng khớp");
    } else {
        setSuccess(username);
        setSuccess(email);
        setSuccess(password);
        setSuccess(password2);
        var json = JSON.stringify(user);
        localStorage.setItem(username, json);
        alert("Đăng nhập thành công")
        window.location.href = "login.html"
    }

};

