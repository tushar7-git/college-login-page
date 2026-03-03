function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function showEvent(name){
alert(name + " details coming soon!");
}

function login(e){
e.preventDefault();

let reg = document.getElementById("regno").value.trim();
let dob = document.getElementById("dob").value.trim();
let msg = document.getElementById("loginMessage");

msg.innerText = "";
msg.style.color="red";

let pattern = /^\d{2}\/\d{2}\/\d{2}$/;

if(!pattern.test(dob)){
msg.innerText="Invalid DOB format! Use dd/mm/yy";
return;
}

if(reg.length < 5){
msg.innerText="Invalid Register Number!";
return;
}

msg.style.color="green";
msg.innerText="Login Successful 🎓 Welcome!";
}