// src/api/api.js
import { API_BASE_URL } from '../config/api'; // Import endpointu


// Funkcja do pobierania danych publicznych (bez logowania)
export const fetchPublicData = async (endpoint, data = null, method = 'GET') => {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Dodajemy body tylko dla metod POST, PUT, DELETE
    if (['POST', 'PUT', 'DELETE'].includes(method) && data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

    if (!response.ok) {
        throw new Error('Błąd w trakcie pobierania danych!');
    }

    return response.json();
};


// Funkcja do pobierania danych prywatnych (z autoryzacją)
export const fetchPrivateData = async (endpoint, data = null, method = 'GET') => {
    const token = localStorage.getItem('token'); // Pobieramy token z localStorage

    if (!token) {
        throw new Error('Brak tokena autoryzacji. Zaloguj się, aby kontynuować.');
    }

    const options = {
        method: method,
        headers: {
            'Authorization': `Bearer ${token}`, // Wysyłamy token do autoryzacji
            'Content-Type': 'application/json',
        },
    };

    // Dodajemy body tylko dla metod POST, PUT, DELETE
    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

    if (!response.ok) {
        throw new Error('Błąd w trakcie pobierania danych!');
    }

    return response.json();
};

