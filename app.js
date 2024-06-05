// Import necessary functions from api.js module
import { searchDogByBreed, getDogBreeds } from './api.js';

// Get references to HTML elements
const breedDropdown = document.getElementById('breed-dropdown');
const dogImagesContainer = document.querySelector('.dog-images');

// Add event listener to the breed dropdown menu
breedDropdown.addEventListener('change', handleBreedSelection);

// Function to display the selected breed image
function displayDogImage(imageUrl) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Dog breed';
    img.classList.add('dog-image'); // Add class for uniform sizing
    // Clear previous images
    dogImagesContainer.innerHTML = '';
    // Append the image to the container
    dogImagesContainer.appendChild(img);
}

// Function to handle breed selection
async function handleBreedSelection() {
    const selectedBreed = breedDropdown.value;
    try {
        // Fetch the image URL for the selected breed
        const imageUrl = await searchDogByBreed(selectedBreed);
        // Display the image on the page
        displayDogImage(imageUrl);
    } catch (error) {
        console.error('Error handling breed selection:', error);
    }
}
