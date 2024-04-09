// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    fetch('index.json')
    .then(response => response.json())
    .then(data => {
        data.main.sections.forEach(section => {
            const sectionElement = document.getElementById(section.id);
            if (sectionElement) {
                const content = section.content;
                const h2 = sectionElement.querySelector('.h2');
                if (h2) h2.textContent = content.h2;

                const img = sectionElement.querySelector('img');
                if (img) img.src = content.diversity_img || content.endemicimg || content.conservimg;

                const parahome = sectionElement.querySelector('.parahome');
                if (parahome) {
                    if (Array.isArray(content.parahome)) {
                        parahome.innerHTML = content.parahome.map(paragraph => `<p>${paragraph}</p>`).join('');
                    } else {
                        parahome.textContent = content.parahome || content.parashome;
                    }
                }

                const bullets = sectionElement.querySelector('.bullets');
                if (bullets && content.bullets) {
                    bullets.innerHTML = content.bullets.map(bullet => `<li>${bullet}</li>`).join('');
                }

                const parashome2 = sectionElement.querySelector('.parashome2');
                if (parashome2) parashome2.textContent = content.parashome2;
            }
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});
