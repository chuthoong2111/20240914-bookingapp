 // Function to open the modal
 function openModal(element) {
  const modalId = element.getAttribute('data-target');
  const dimensions = element.getAttribute('data-dimensions');
  const modal = document.getElementById(modalId);

  // Set modal dimensions
  const [width, height] = dimensions.split(';').map(d => d.split(':')[1].trim());
  modal.querySelector('.modal-window').style.width = width;
  modal.querySelector('.modal-window').style.height = height;

  // Show modal
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  const modals = document.getElementsByClassName('modal');
  for (let modal of modals) {
      modal.style.display = "none";
  }
}

// Add event listeners to trigger elements
document.querySelectorAll('.trigger-element').forEach(trigger => {
  trigger.addEventListener('click', function() {
      openModal(this);
  });
});
 // Close modal when clicking the close button or a dismiss attribute
 document.querySelectorAll('[data-dismiss="modal"]').forEach(dismiss => {
  dismiss.addEventListener('click', closeModal);
});
// Close modal when clicking the close button
document.querySelector('.close-modal').addEventListener('click', closeModal);

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modals = document.getElementsByClassName('modal');
  for (let modal of modals) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}