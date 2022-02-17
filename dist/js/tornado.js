const listMobile = document.getElementById('list-mobile');
const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const allLinks = document.querySelectorAll('.mobile-list li a');

openNav.addEventListener('click', () => {
  listMobile.classList.add('show-nav');
});
closeNav.addEventListener('click', () => {
  listMobile.classList.remove('show-nav');
});

// close mobile nav on links click
function closeOnClick() {
  allLinks.forEach((link) => {
    link.addEventListener('click', () => {
      listMobile.classList.remove('show-nav');
    });
  });
}
closeOnClick();

// close mobile ul above 900
function windowWidth() {
  window.addEventListener('resize', () => {
    let width = window.innerWidth;
    if (width > 900) {
      listMobile.classList.remove('show-nav');
    }
  });
}
windowWidth();
