// script.js

document.addEventListener("DOMContentLoaded", function() {
  fetch("Wilpattu.json")
    .then(response => response.json())
    .then(data => {
      // Intro Section
      const intro = data.main.intro;
      document.getElementById("intro-h2").textContent = intro.h2;
      document.getElementById("intro-parashome").textContent = intro.parashome;
      document.getElementById("intro-img").src = intro.img.src;
      document.getElementById("intro-img").alt = intro.img.alt;

      // Animals Section
      const animals = data.main.animals;
      document.getElementById("animals-h2").textContent = animals.h2;
      document.getElementById("animals-parashome").textContent = animals.parashome;
      document.getElementById("animals-img").src = animals.img.src;
      document.getElementById("animals-img").alt = animals.img.alt;

      // Activities Section
      const activities = data.main.activities;
      document.getElementById("activities-h2").textContent = activities.h2;
      document.getElementById("activities-parashome").textContent = activities.parashome;
    })
    .catch(error => console.error("Error fetching data:", error));
});
