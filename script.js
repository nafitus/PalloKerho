// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select all event cards
  const eventCards = document.querySelectorAll(".event-card");

  // Loop through each event card and add a click event listener
  eventCards.forEach((card) => {
    // Get the event date from the data attribute
    const eventDate = new Date(card.getAttribute("data-date"));

    // Get the event date element and display the date
    const eventDateElement = card.querySelector(".event-date");
    eventDateElement.textContent = `Event Date: ${eventDate.toLocaleDateString()}`;

    // Function to update the countdown
    function updateCountdown() {
      const now = new Date();
      const timeDifference = eventDate - now;

      if (timeDifference <= 0) {
        // If the event date is in the past, display 'Event has passed'
        card.querySelector(".countdown").textContent = "Event has passed";
        return;
      }

      // Calculate remaining time
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Display countdown in the event card
      card.querySelector(
        ".countdown"
      ).textContent = `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    // Initial countdown update
    updateCountdown();

    // Add a click event listener for toggling event details
    card.addEventListener("click", () => {
      // Find the event details inside the clicked card
      const details = card.querySelector(".event-details");

      // Toggle the 'hidden' class on the event details to show or hide it
      details.classList.toggle("hidden");
    });
  });

  // Gallery image functionality (unchanged from your original code)
  const images = ["img1.jpg", "img2.jpeg", "img3.jpeg"];
  let currentImageIndex = 0;
  const galleryImage = document.getElementById("galleryImage");

  function changeImage() {
    galleryImage.classList.remove("active"); // Fade-out
    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      galleryImage.src = images[currentImageIndex];
      galleryImage.classList.add("active"); // Fade-in
    }, 500);
  }

  setInterval(changeImage, 3000); // Change image every 3 seconds
  galleryImage.classList.add("active"); // Initial activation
});
