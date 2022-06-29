
var slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("wraps");
  var dots = document.getElementsByClassName("swap");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Tilt function

// VanillaTilt.init(document.querySelector(".floats"), {
// 		max: 25,
// 		speed: 400
// });

  


// scroll section btns


// jet-seed-clone.netlify.app

var header = document.getElementById("nums");
var btns = header.getElementsByClassName("num");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

//faq

const plus = document.getElementsByClassName('add')[0];
const plus2 = document.getElementsByClassName('add2')[0];
const plus3 = document.getElementsByClassName('add3')[0];
const plus4 = document.getElementsByClassName('add4')[0];

const remove = document.getElementsByClassName('remove')[0];
const remove2 = document.getElementsByClassName('remove2')[0];
const remove3 = document.getElementsByClassName('remove3')[0];
const remove4 = document.getElementsByClassName('remove4')[0];

const answer = document.getElementsByClassName('accordion-content')[0];
const answer2 = document.getElementsByClassName('accordion-content2')[0];
const answer3 = document.getElementsByClassName('accordion-content3')[0];
const answer4 = document.getElementsByClassName('accordion-content4')[0];

plus.addEventListener('click', function () {
    plus.style.display = 'none'
  remove.style.display = 'block'

  answer.classList.toggle('active');
})

remove.addEventListener('click', function () {
    remove.style.display = 'none'
    plus.style.display = 'flex'
  answer.classList.toggle('active');
})

plus2.addEventListener('click', function () {
    plus2.style.display = 'none'
  remove2.style.display = 'block'

  answer2.classList.toggle('active');
})

remove2.addEventListener('click', function () {
    remove2.style.display = 'none'
    plus2.style.display = 'flex'
  answer2.classList.toggle('active');
})

plus3.addEventListener('click', function () {
    plus3.style.display = 'none'
  remove3.style.display = 'block'

  answer3.classList.toggle('active');
})

remove3.addEventListener('click', function () {
    remove3.style.display = 'none'
    plus3.style.display = 'flex'
  answer3.classList.toggle('active');
})

plus4.addEventListener('click', function () {
    plus4.style.display = 'none'
  remove4.style.display = 'block'

  answer4.classList.toggle('active');
})

remove4.addEventListener('click', function () {
    remove4.style.display = 'none'
    plus4.style.display = 'flex'
  answer4.classList.toggle('active');
})