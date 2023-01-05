
//function for navigating though slides
let counter = 1;
document.getElementById('radio' + counter).checked = true;
counter++;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 4000); //<-- timer for each iteration of the setInterval func(4 sec)

//logic for top nav bar (when scroll, do this)
window.addEventListener("scroll", function() {
    let header = this.document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0)
})

//js for responsive navigation sidebar menu
let menu = document.querySelector(".menu");
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
})