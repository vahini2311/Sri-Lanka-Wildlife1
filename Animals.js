// // script.js

// // Fetch command to retrieve JSON data
// fetch('Animals.json')
//   .then(response => response.json())
//   .then(data => {
//     // Storing JSON data in localStorage
//     localStorage.setItem('animalData', JSON.stringify(data));
//   })
//   .catch(error => console.error('Error fetching JSON:', error));



// // Retrieving JSON data from localStorage
// const animalData = JSON.parse(localStorage.getItem('animalData'));

// // Accessing different parts of JSON data
// const headerLogo = animalData.header.logo;
// const navigationLinks = animalData.header.navigation;
// const mainTitle = animalData.main.title;
// const species = animalData.main.species;
// const footerReferences = animalData.footer.references;

// You can use the retrieved data as needed in your JavaScript code
// For example, you can populate HTML elements dynamically using this data
// Remember to handle cases where data might not exist or the fetch fails
// Function to fetch JSON data
document.addEventListener("DOMContentLoaded", function() {
  fetch('Animals.json')
    .then(response => response.json())
    .then(data => {
      const mainContent = document.getElementById('main-content');
      
      // Insert flexboxes
      data.main.flexboxes.forEach(item => {
        const flexbox = document.createElement('div');
        flexbox.classList.add('flexbox1');
        
        const image = document.createElement('img');
        image.classList.add('animals');
        image.src = item.image;
        image.alt = item.alt;
        
        const paragraph = document.createElement('p');
        paragraph.classList.add('para');
        paragraph.textContent = item.text;
        
        flexbox.appendChild(image);
        flexbox.appendChild(paragraph);
        mainContent.appendChild(flexbox);
      });
      
      // Insert link phrase
      const linkPhrase = document.createElement('p');
      linkPhrase.classList.add('linkphrase');
      linkPhrase.textContent = data.main.linkphrase;
      mainContent.appendChild(linkPhrase);
      
      // Insert links
      const linkContainer = document.createElement('div');
      linkContainer.classList.add('clicklink');
      
      data.main.links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.target = link.target;
        
        const image = document.createElement('img');
        image.src = link.image;
        image.alt = link.alt;
        
        anchor.appendChild(image);
        linkContainer.appendChild(anchor);
      });
      
      mainContent.appendChild(linkContainer);
    })
    .catch(error => console.log(error));
});
