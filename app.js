const btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})

const btn = document.querySelector('button');
var titre = document.getElementById('titre');

btn.addEventListener('click', () => {

titre.innerHTML = "Fait tes valise et explore ce site !";

})



