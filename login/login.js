
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let btnLogin = document.querySelector(".btn-login");

  
    btnLogin.addEventListener("click", (e)=> {
        e.preventDefault();
        let user = {
            username: username.value,
            email: email.value,           
            password: password.value,
        };
        let json = JSON.stringify(user);
        // console.log(json)
        if(!username.value || !password.value || !email.value) {
            alert("vui lòng nhập đủ thông tin")
        }
        else if(localStorage.getItem(username) === json) {
            alert("Đăng nhập thành công")
            window.location.href = "../index.html";

            const userUi = document.querySelector(".header__navbar-user-name")
            userUi.textContent = `${username}`
        }else {
            alert("Đăng nhập thất bại.")
            // window.location.href = "./register.html"
        }
    })

    