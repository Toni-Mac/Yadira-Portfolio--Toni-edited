// const body = document.body;
// const btn = document.querySelector('.menubtn');
// const bar = document.querySelector('.bar');

// btn.addEventListener('click', showMenu);

// function showMenu(){
//     body.classList.toggle('show');
//     bar.classList.toggle('animate');
// }
function toggleMenu() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}