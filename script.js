const games = [
    { id: 1, name: "Aventura Épica", category: "aventura", image: "https://via.placeholder.com/250x150", description: "Una emocionante aventura que te llevará a mundos inexplorados." },
    { id: 2, name: "Desafío de Estrategia", category: "estrategia", image: "https://via.placeholder.com/250x150", description: "Desafía tu mente en este juego de estrategia." },
    { id: 3, name: "Carrera Extrema", category: "deportes", image: "https://via.placeholder.com/250x150", description: "Compite en las carreras más emocionantes." },
    { id: 4, name: "Rompecabezas Místico", category: "acción", image: "https://via.placeholder.com/250x150", description: "Resuelve rompecabezas para descubrir secretos antiguos." },
    { id: 5, name: "Deportes Increíbles", category: "deportes", image: "https://via.placeholder.com/250x150", description: "Disfruta de diferentes deportes en un solo juego." }
];

const reviews = [
    { gameId: 1, username: "Usuario1", text: "Increíble aventura, ¡me encantó!", rating: 5 },
    { gameId: 2, username: "Usuario2", text: "Desafiante y divertido.", rating: 4 },
];

const events = [
    { date: "2024-10-10", name: "Torneo de Carreras", description: "Participa en nuestro torneo de carreras y gana premios." },
    { date: "2024-11-05", name: "Lanzamiento de Aventura Épica", description: "No te pierdas el lanzamiento del juego más esperado del año." }
];

const latestReleases = [
    { name: "Explorador del Espacio", image: "https://via.placeholder.com/250x150", description: "Viaja a través de galaxias desconocidas." },
    { name: "Guerreros de la Luz", image: "https://via.placeholder.com/250x150", description: "Lucha contra las fuerzas oscuras." }
];

// Cargar juegos recomendados
function loadFeaturedGames() {
    const featuredGamesList = document.getElementById('featured-games-list');
    const recommendedGames = games.slice(0, 3); // Tomar los primeros 3 juegos como recomendados
    recommendedGames.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <button onclick="addToFavorites(${game.id})">Añadir a Favoritos</button>
            <button onclick="showReviews(${game.id})">Ver Reseñas</button>
            <button onclick="viewGallery(${game.id})">Galería</button>
        `;
        featuredGamesList.appendChild(card);
    });
}

// Cargar juegos en la lista
function loadGames() {
    const gamesList = document.getElementById('games-list');
    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <button onclick="addToFavorites(${game.id})">Añadir a Favoritos</button>
            <button onclick="showReviews(${game.id})">Ver Reseñas</button>
            <button onclick="viewGallery(${game.id})">Galería</button>
        `;
        gamesList.appendChild(card);
    });
}

// Cargar reseñas
function loadReviews() {
    const reviewsList = document.getElementById('reviews-list');
    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.innerHTML = `
            <strong>${review.username}:</strong>
            <p>${review.text}</p>
            <p>⭐ ${review.rating}</p>
        `;
        reviewsList.appendChild(reviewCard);
    });
}

// Cargar eventos
function loadEvents() {
    const eventsList = document.getElementById('events-list');
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <h4>${event.name}</h4>
            <p>${event.description}</p>
            <p><strong>Fecha:</strong> ${event.date}</p>
        `;
        eventsList.appendChild(eventCard);
    });
}

// Cargar últimos lanzamientos
function loadLatestReleases() {
    const latestReleasesList = document.getElementById('latest-releases-list');
    latestReleases.forEach(release => {
        const releaseCard = document.createElement('div');
        releaseCard.className = 'latest-release-card';
        releaseCard.innerHTML = `
            <img src="${release.image}" alt="${release.name}">
            <h3>${release.name}</h3>
            <p>${release.description}</p>
        `;
        latestReleasesList.appendChild(releaseCard);
    });
}

// Búsqueda de juegos
function searchGames() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchTerm));
    displayFilteredGames(filteredGames);
}

// Filtrar juegos por categoría
function filterGames() {
    const category = document.getElementById('category-filter').value;
    const filteredGames = games.filter(game => !category || game.category === category);
    displayFilteredGames(filteredGames);
}

// Mostrar juegos filtrados
function displayFilteredGames(filteredGames) {
    const gamesList = document.getElementById('games-list');
    gamesList.innerHTML = '';
    filteredGames.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <button onclick="addToFavorites(${game.id})">Añadir a Favoritos</button>
            <button onclick="showReviews(${game.id})">Ver Reseñas</button>
            <button onclick="viewGallery(${game.id})">Galería</button>
        `;
        gamesList.appendChild(card);
    });
}

// Registrar un juego
function registerGame(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const game = document.getElementById('game').value;
    const link = document.getElementById('link').value;

    // Simular registro
    games.push({ id: games.length + 1, name: game, image: "https://via.placeholder.com/250x150", description: "Juego registrado por " + name });
    document.getElementById('notification').innerText = "Juego registrado con éxito!";
    document.getElementById('notification').style.display = 'block';
    document.getElementById('register-form').reset();
    loadGames();
}

// Añadir a favoritos
function addToFavorites(gameId) {
    const game = games.find(g => g.id === gameId);
    const notification = document.getElementById('notification');
    notification.innerText = `${game.name} añadido a favoritos!`;
    notification.style.display = 'block';
}

// Mostrar reseñas
function showReviews(gameId) {
    const reviewList = document.getElementById('reviews-list');
    reviewList.innerHTML = '';
    const gameReviews = reviews.filter(review => review.gameId === gameId);
    gameReviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.innerHTML = `
            <strong>${review.username}:</strong>
            <p>${review.text}</p>
            <p>⭐ ${review.rating}</p>
        `;
        reviewList.appendChild(reviewCard);
    });
}

// Ver galería de juegos (simulada)
function viewGallery(gameId) {
    alert("Galería del juego ID: " + gameId + " (aquí puedes mostrar imágenes o videos del juego).");
}

// Suscribirse al boletín
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    alert(`Te has suscrito con el correo: ${email}`);
}

// Cambiar tema (modo oscuro)
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    this.innerText = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
});

// Cargar todas las secciones al inicio
window.onload = function () {
    loadFeaturedGames();
    loadGames();
    loadReviews();
    loadEvents();
    loadLatestReleases();
};
