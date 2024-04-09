document.addEventListener('DOMContentLoaded', () => {
  fetch('leopard.json')
      .then(response => response.json())
      .then(data => {
          // Display venues
          const venuesSection = document.getElementById('venues');
          venuesSection.querySelector('h2').textContent = data.main.venues.h2.content;

          const venuesContent = document.getElementById('venuesContent');
          const venueParagraphs = data.main.venues.paragraphs;
          venueParagraphs.forEach(paragraph => {
              const p = document.createElement('p');
              p.className = paragraph.class;
              p.textContent = paragraph.content;
              venuesContent.appendChild(p);
          });

          // Display threats
          const threatsSection = document.getElementById('threats');
          const threatsContent = document.getElementById('threatsContent');
          const threats = data.main.threats1.threats;
          threats.forEach(threat => {
              const threatDiv = document.createElement('div');
              threatDiv.className = threat.class;

              const img = document.createElement('img');
              img.src = threat.img;
              img.alt = threat.alt;
              threatDiv.appendChild(img);

              const definition = document.createElement('p');
              definition.textContent = threat.definition;
              threatDiv.appendChild(definition);

              if (threat.mechanisms) {
                  const mechanismsList = document.createElement('ul');
                  threat.mechanisms.forEach(mechanism => {
                      const li = document.createElement('li');
                      li.textContent = mechanism;
                      mechanismsList.appendChild(li);
                  });
                  threatDiv.appendChild(mechanismsList);
              }

              if (threat.link) {
                  const link = document.createElement('a');
                  link.href = threat.link;
                  link.textContent = 'For further information please click this link';
                  link.target = '_blank';
                  threatDiv.appendChild(link);
              }

              threatsContent.appendChild(threatDiv);
          });
      })
      .catch(error => console.log('Error fetching JSON:', error));
});
