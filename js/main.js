const toggleBtn = document.querySelector('.toggle-btn')

toggleBtn.addEventListener('click', () => {
  const nav = document.querySelector('nav')
  nav.classList.toggle('show-nav');
});

const accordion = document.querySelectorAll(".accordion");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let accordionBody = this.nextElementSibling;
    if (accordionBody.style.maxHeight) {
      accordionBody.style.maxHeight = null;
    } else {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } 
  });
}