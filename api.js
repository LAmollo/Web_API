// API endpoint URLs
const DOG_API_BASE_URL = 'https://dog.ceo/api';

// Function to search dog images by breed
export async function searchDogByBreed(breed) {
    try {
        const response = await fetch(`${DOG_API_BASE_URL}/breed/${breed}/images/random`);
        if (!response.ok) {
            throw new Error('Failed to fetch dog image by breed');
        }
        const data = await response.json();
        return data.message;

    } catch (error) {
        console.error('Error fetching dog image by breed:', error);
        throw error;
    }
}

// Function to get list of dog breeds
export async function getDogBreeds() {
    try {
        const response = await fetch(`${DOG_API_BASE_URL}/breeds/list/all`);
        if (!response.ok) {
            throw new Error('Failed to fetch dog breeds');
        }
        const data = await response.json();
        return Object.keys(data.message);
    } catch (error) {
        console.error('Error fetching dog breeds:', error);
        throw error;
    }
}

// Function to get breed information
export async function getBreedInfo(breed) {
    try {
        const response = await fetch(`${DOG_API_BASE_URL}/breeds/search?q=${breed}`);
        if (!response.ok) {
            throw new Error('Failed to fetch breed information');
        }
        const data = await response.json();
        if (data.length > 0) {
            return data[0].description || 'No information available';
        } else {
            return 'No information available';
        }
    } catch (error) {
        console.error('Error fetching breed information:', error);
        throw error;
    }
}


