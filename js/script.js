const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: 1.2,
  slidesPerGroup: 1,
  centeredSlides: false,
  loop: true,
  spaceBetween: 10,
  mousewheel: {
    forceToAxis: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1699: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  speed: 700,
  slideActiveClass: "is-active",
  slideDuplicateActiveClass: "is-active",
});
// Modalbox
// ---- ---- ---- ---- ---- //
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
