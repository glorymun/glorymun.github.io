function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

const countDown = () => {
  const launchDate = new Date('5 September, 2025 00:00:00').getTime();
  const presentDate = new Date().getTime();
  const difference = launchDate - presentDate;

  // Get the second, minute,hour, day
  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;

  const dayText = Math.floor(difference / day);
  const hourText = Math.floor((difference % day) / hour);
  const minuteText = Math.floor((difference % hour) / minute);
  const secondText = Math.floor((difference % minute) / second);

  //   add text to the html document or dom
  document.querySelector('.day').textContent = dayText;
  document.querySelector('.hour').textContent = hourText;
  document.querySelector('.minute').textContent = minuteText;
  document.querySelector('.second').textContent = secondText;
};

setInterval(countDown, 1000);


let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

// Ensure slideshow initializes after DOM is loaded
window.addEventListener('DOMContentLoaded', function() {
  showSlides(slideIndex);
});