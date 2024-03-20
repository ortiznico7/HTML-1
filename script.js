var newUser = document.querySelector('.input_username').value;
var newPass = document.querySelector('.input_password').value;
let btnLogin = document.querySelector('.btn_login')
let btnRegistar = document.querySelector('.btn_registar')

let usernames = [];
let passwords = [];

function addUser (){
    let userCreate = usernames.push(newUser);
    let passCreate = passwords.push(newPass);
    console.log(userCreate);
    console.log(passCreate);
}

btnRegistar.addEventListener('click', addUser)