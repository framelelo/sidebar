const sideBar = document.querySelector('#side-bar');
const btn = document.getElementById('btn');

const content = document.querySelector('.content');

function openSideBar() {
    sideBar.classList.toggle("open");
}


btn.addEventListener('click', openSideBar);

content.addEventListener('click',openSideBar);
