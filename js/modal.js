document.addEventListener("DOMContentLoaded", function () {
  // Attach event listeners to all elements with data-target attributes
  document.querySelectorAll('[data-target]').forEach(element => {
      element.addEventListener('click', function () {
          const targetModalId = this.getAttribute('data-target');
          const iframeId = this.getAttribute('data-iframe');
          const iframeSrc = this.getAttribute('data-src');
          const dimensions = this.getAttribute('data-dimensions');
          const reloadPage = this.getAttribute('data-reload') === "1";

          // Open the modal by setting display to block
          const modal = document.getElementById(targetModalId);
          if (modal) {
              modal.style.display = 'block';
              // Disable body scroll
              document.body.classList.add('modal-open');

              // Apply dimensions to modal-window
              const modalWindow = modal.querySelector('.modal-window');
              if (dimensions) {
                  dimensions.split(';').forEach(styleRule => {
                      const [key, value] = styleRule.split(':');
                      modalWindow.style[key.trim()] = value.trim();
                  });
              }

              // Set iframe source if applicable
              if (iframeId && iframeSrc) {
                  const iframe = document.getElementById(iframeId);
                  if (iframe) iframe.src = iframeSrc;
              }

              // Close modal logic for all dismiss buttons
              modal.querySelectorAll('[data-dismiss="modal"]').forEach(closeButton => {
                  closeButton.addEventListener('click', function () {
                      modal.style.display = 'none';
                      // Enable body scroll again
                      document.body.classList.remove('modal-open');
                      if (reloadPage) {
                          window.location.reload();
                      }
                  });
              });

              // Close the modal if clicking outside the modal-window
              modal.addEventListener('click', function (event) {
                  if (event.target === modal) {
                      modal.style.display = 'none';
                      // Enable body scroll again
                      document.body.classList.remove('modal-open');
                      if (reloadPage) {
                          window.location.reload();
                      }
                  }
              });
          }
      });
  });
});
