// script.js

fetch('depofwildlife.json')
    .then(response => response.json())
    .then(data => {
        // Display paragraphs
        const paragraphsDiv = document.getElementById('paragraphs');
        data.main.paragraphs.forEach(paragraph => {
            const p = document.createElement('p');
            p.className = paragraph.class;
            p.textContent = paragraph.content;
            paragraphsDiv.appendChild(p);
        });

        // Display gallery
        const galleryDiv = document.getElementById('gallery');
        const gallery = data.main.gallery;
        const galleryItems = gallery.items;
        const galleryContainer = document.createElement('div');
        galleryContainer.id = gallery.id;
        galleryItems.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'item';
            const img = document.createElement('img');
            img.src = item.img;
            img.alt = item.alt;
            const h3 = document.createElement('h3');
            h3.textContent = item.title;
            galleryItem.appendChild(img);
            galleryItem.appendChild(h3);
            galleryContainer.appendChild(galleryItem);
        });
        galleryDiv.appendChild(galleryContainer);

        // Display map
        const mapDiv = document.getElementById('map');
        const iframe = document.createElement('iframe');
        const map = data.main.map.iframe;
        for (const [key, value] of Object.entries(map)) {
            iframe.setAttribute(key, value);
        }
        mapDiv.appendChild(iframe);
    })
    .catch(error => console.log('Error fetching JSON:', error));
