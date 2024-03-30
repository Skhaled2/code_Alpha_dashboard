let PassWord = document.getElementById("password");
let FirstName = document.getElementById("firstname");
let LastName = document.getElementById("lastname");
let Email = document.getElementById("email");
let Register = document.getElementById("submit-link");
let SignIn = document.getElementById("submit-link-1");
let Iemail = document.getElementById("loginemail");
let Ipassword = document.getElementById("loginpassword");

// storing the local storge in the array
let Accdata;
if (localStorage.Account != null) {
    Accdata = JSON.parse(localStorage.Account)
} else { Accdata = []; }


//sigin up butten that do every thing
Register.onclick = function () {
    let newAcc = {
        name: FirstName.value + LastName.value,
        email: Email.value,
        password: PassWord.value,
    }
    if (FirstName.value != '' && LastName.value != '' && Email.value != '' && PassWord.value != '') {
        Accdata.push(newAcc);
        localStorage.setItem('Account', JSON.stringify(Accdata))
        cleardata();
        alert('Registration Done Successfuly')
        location.replace("../index.html")
    }
}

//sigin in butten
SignIn.onclick = function () {
    Email = loginemail.value.toLowerCase();
    PassWord = loginpassword.value.toLowerCase();
    for(const element of Accdata) {
        if (Email == element.email && PassWord == element.password){
            location.replace("../index.html")
            cleardata2()}}
}

function cleardata() {
    FirstName.value = '';
    LastName.value = '';
    Email.value = '';
    PassWord.value = '';
}

function cleardata2() {
    Iemail.value = '';
    Ipassword.value = '';
}
function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
   var a = document.getElementById("loginBtn");
   var b = document.getElementById("registerBtn");
   var x = document.getElementById("login");
   var y = document.getElementById("register");

   function login() {
       x.style.left = "4px";
       y.style.right = "-520px";
       a.className += " white-btn";
       b.className = "btn";
       x.style.opacity = 1;
       y.style.opacity = 0;
   }

   function register() {
       x.style.left = "-510px";
       y.style.right = "5px";
       a.className = "btn";
       b.className += " white-btn";
       x.style.opacity = 0;
       y.style.opacity = 1;
   }
