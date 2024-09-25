const apiUrl = 'https://hp-api.onrender.com/api/characters';
const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/HP_-_Harry_Potter_wordmark.svg/640px-HP_-_Harry_Potter_wordmark.svg.png';


        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('');
                }
                return response.json();
            })
            .then(data => {
                const cardsContainer = document.getElementById('cards-container');

                data.forEach(harry => {
                    const card = document.createElement('div');
                    card.classList.add('card');
                    const imageUrl = harry.image ? harry.image : defaultImage;
                    const unknow = harry.house ? harry.house : "Desconocido";
                    card.innerHTML = `
                        <h3>${harry.name}</h3>
                        <img src="${imageUrl}" alt="${harry.name}">
                        <h3>${unknow}</h3>
                    `;
                    cardsContainer.appendChild(card);
                });
            })
            .catch(error => console.error('Error al obtener detalles del personaje:', error));
    