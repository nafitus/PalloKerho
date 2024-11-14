document.addEventListener("DOMContentLoaded", () => {
  const eventCards = document.querySelectorAll(".event-card");

  eventCards.forEach((card) => {
    const eventDate = new Date(card.getAttribute("data-date"));

    const eventDateElement = card.querySelector(".event-date");
    eventDateElement.textContent = `Event Date: ${eventDate.toLocaleDateString()}`;

    function updateCountdown() {
      const now = new Date();
      const timeDifference = eventDate - now;

      if (timeDifference <= 0) {
        card.querySelector(".countdown").textContent = "Event has passed";
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      card.querySelector(
        ".countdown"
      ).textContent = `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateCountdown, 1000);

    updateCountdown();

    card.addEventListener("click", () => {
      const details = card.querySelector(".event-details");

      details.classList.toggle("hidden");
    });
  });

  const images = ["img1.jpg", "img2.jpeg", "img3.jpeg"];
  let currentImageIndex = 0;
  const galleryImage = document.getElementById("galleryImage");

  function changeImage() {
    galleryImage.classList.remove("active");
    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      galleryImage.src = images[currentImageIndex];
      galleryImage.classList.add("active");
    }, 500);
  }

  setInterval(changeImage, 3000);
  galleryImage.classList.add("active");
});
