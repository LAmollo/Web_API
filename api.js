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

