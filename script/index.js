'use strict';

const elResult = document.querySelector('.result');
const elCards = document.querySelector('.cards');
const genreSelect = document.getElementById('genreSelect');

// Display all films initially
displayFilms(films);

// Event listener for genre select change
genreSelect.addEventListener('change', () => {
    const selectedGenre = genreSelect.value;
    
    // Filter films based on selected genre
    const filteredFilms = films.filter(film => {
        if (selectedGenre === 'all') {
            return true; // Show all films if "All" is selected
        } else {
            return film.genres.includes(selectedGenre);
        }
    });
    
    // Display filtered films
    displayFilms(filteredFilms);
});

// Function to display films
function displayFilms(filmsToDisplay) {
    // Clear existing cards
    elCards.innerHTML = '';
    
    // Update result count
    elResult.textContent = filmsToDisplay.length;
    
    // Display each film
    filmsToDisplay.forEach(film =>{
        const genresList = film.genres.map(genre => `<li>${genre}</li>`).join('');
    
        elCards.innerHTML += `
        <div class="js-card rounded-md bg-white w-[250px] ">
                <div class="card-image"><img  class=" rounded-t-md h-[350px] w-[250px]" src="${film.poster}" alt="${film.title}"></div>
                <div class="ml-3 h-[260px]">
                    <h3 class="font-semibold text-lg pt-3">${film.title}</h3>
                    <ul class="list-disc pl-7 pb-3 ">
                        ${genresList}
                    </ul>
                    <button type="button" class="btn btn-outline-primary mb-4">Bookmark</button>
        
                </div>
            </div>`;
    });
}
