const sideBar = document.querySelector('#side-bar');
const btn = document.getElementById('btn');

const content = document.querySelector('.content');

let openSidebar = false;

function openSideBar() {
    sideBar.style.left = "0";
    sideBar.classList.add("open");
  }
  
  function closeSideBar() {
    sideBar.style.left = "-230px";
    sideBar.classList.remove("open");
  }

function toggleSideBar() {
  if (!openSidebar) {
    openSideBar();
    openSidebar = true;
  } 
  else {
    closeSideBar();
    openSidebar = false;
  }
}


btn.addEventListener('click', toggleSideBar);

content.addEventListener('click', function () {
    if (openSidebar) {
        closeSideBar();
        openSidebar = false;
        }
    });
