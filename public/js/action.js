var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
}
function faqFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

document.getElementsByClassName("tablink")[0].click();

function openAboutUs(evt, pageName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("page");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].classList.remove("w3-light-grey");
    }
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.classList.add("w3-light-grey");
}
async function loginGoodPay() {
    email = document.getElementById('login').value
    password = document.getElementById('password').value

    try {
        const response = await fetch('./js/user.json')
        const users = await response.json()

        const userValided = users.find(u => u.email === email && u.password === password)

        if (userValided) {
            window.location.href = './dashboard.html'
            localStorage.setItem('email', email)
        } else {
            alert('Erro ao processar, Seu e-mail ou Senha estão incorretos')
        }
    } catch (error) {
        console.log(error)
    }
}

async function loadUser() {
    document.getElementById('nome-card').innerHTML = localStorage.email
    document.getElementById('resumo').innerHTML = `<label>E-mail</label> ${localStorage.email}`
}
document.addEventListener('DOMContentLoaded', () => {
    loadUser()
})

async function logoutUser() {
    if (localStorage.email != null) {
        localStorage.removeItem('email')
        console.info('Sessão Limpa')
        window.location.href = './index.html'
    } else {
        console.error('Sessão não Existe')
    }
}