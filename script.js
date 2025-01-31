const c ='QWERTYUIOPASDFGHJKLZXCVBNM1234567890?@#$%^&*()';
const longueur = 12
function passwordGenerator(event) {

  event.preventDefault();

  let password = ""
    let input = document.getElementById("password");

    for (let i=0; i<longueur; i++) {
        const indexC = Math.floor(Math.random() * c.length);
        password += c[indexC];
    }
    input.value = password;
}
function voir(event){
    event.preventDefault();
    let input = document.getElementById("password");
    let togleinput = document.getElementById("toggle");
    if (input.getAttribute("type") == "password") {
        input.setAttribute("type", "text");
        togleinput.innerText="cacher"
    }
    else{
        input.setAttribute("type", "password");
        togleinput.innerText="voir"


    }
}
