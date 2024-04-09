// script.js

document.addEventListener("DOMContentLoaded", function() {
  fetch("yala.json")
    .then(response => response.json())
    .then(data => {
      const introSection = data.main.intro;
      const animalsSection = data.main.animals;
      const activitiesSection = data.main.activities;

      // Fill in intro section
      document.querySelector("#intro .h2").textContent = introSection.h2.content;
      document.querySelector("#intro .parashome").textContent = introSection.paragraph.content;
      document.querySelector("#intro .yalaimg").setAttribute("src", introSection.image.src);
      document.querySelector("#intro .yalaimg").setAttribute("alt", introSection.image.alt);

      // Fill in animals section
      document.querySelector("#animals .h2").textContent = animalsSection.h2.content;
      document.querySelector("#animals .parashome").textContent = animalsSection.paragraph.content;
      document.querySelector("#animals .yalaimg").setAttribute("src", animalsSection.image.src);
      document.querySelector("#animals .yalaimg").setAttribute("alt", animalsSection.image.alt);

      // Fill in activities section
      document.querySelector("#activities .h2").textContent = activitiesSection.h2.content;
      document.querySelector("#activities .parashome").textContent = activitiesSection.paragraph.content;
      const activitiesList = document.querySelector("#activitiesList");
      activitiesSection.activitiesList.forEach(activity => {
        const listItem = document.createElement("li");
        listItem.textContent = activity;
        activitiesList.appendChild(listItem);
      });
    })
    .catch(error => console.log("Error fetching data:", error));
});
