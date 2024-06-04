// Import necessary functions from api.js module
import { searchDogByBreed, getDogBreeds } from './api.js';

// Get references to HTML elements
const breedDropdown = document.getElementById('breed-dropdown');
const dogImagesContainer = document.querySelector('.dog-images');

// Add event listener to the breed dropdown menu
breedDropdown.addEventListener('change', handleBreedSelection);
