// src/api/api.js
import { API_BASE_URL } from '../config/api'; // Import endpointu

// Funkcja do pobierania danych publicznych (bez logowania)
export const fetchPublicData = async (endpoint) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
        throw new Error('Błąd w trakcie pobierania danych!');
    }
    return response.json();
};

// Funkcja do pobierania danych prywatnych (z autoryzacją)
export const fetchPrivateData = async (endpoint, token) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,  // Wysyłamy token do autoryzacji
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Błąd w trakcie pobierania danych!');
    }
    return response.json();
};
