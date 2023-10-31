const sideBar = document.querySelector('#side-bar');
const btn = document.getElementById('btn');

const content = document.querySelector('.content');

let openSidebar = true;

function openSideBar() {
    sideBar.style.left = "0";
    sideBar.classList.add("open");
  }
  
  function closeSideBar() {
    sideBar.style.left = "-230px";
    sideBar.classList.remove("open");
  }

function toggleSideBar() {
  if (openSidebar) {
    openSideBar();
    openSidebar = false;
  } 
  else {
    closeSideBar();
    openSidebar = true;
  }
}


btn.addEventListener('click', toggleSideBar);

content.addEventListener('click', function () {
    if (!openSidebar) {
        closeSideBar();
        openSidebar = true;
        }
    });
