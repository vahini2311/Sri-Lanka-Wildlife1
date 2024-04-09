// script.js

document.addEventListener("DOMContentLoaded", function() {
  fetch("wildlife intro.json")
    .then(response => response.json())
    .then(data => {
      // Intro Section
      const introSection = data.main.intro;
      document.getElementById("intro-img").src = introSection.img;
      document.getElementById("intro-parashome").textContent = introSection.parashome;

      // Wildlife Introduction Section
      const wildlifeIntroSection = data.main["Wild Life Introduction"];
      const wildlifeIntroDiv = document.getElementById("wildlife-intro");

      wildlifeIntroSection.forEach(location => {
        const locationDiv = document.createElement("div");
        locationDiv.classList.add("location");

        const h2 = document.createElement("h2");
        h2.classList.add("h");
        h2.textContent = location.location;

        const mapDiv = document.createElement("div");
        mapDiv.classList.add("map");
        mapDiv.innerHTML = `<iframe src="${location.map.src}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("description");
        descriptionDiv.innerHTML = `<p class="textintro">${location.description}</p>`;

        const imagesDiv = document.createElement("div");
        imagesDiv.classList.add("images");
        location.images.forEach(image => {
          imagesDiv.innerHTML += `<img src="${image.src}" alt="${image.alt}">`;
        });

        locationDiv.appendChild(h2);
        locationDiv.appendChild(mapDiv);
        locationDiv.appendChild(descriptionDiv);
        locationDiv.appendChild(imagesDiv);

        wildlifeIntroDiv.appendChild(locationDiv);
      });
    })
    .catch(error => console.error("Error fetching data:", error));
});
