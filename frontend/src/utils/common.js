// Funkcja do haszowania hasła za pomocą SHA-256
export const hashPassword = async (password) => {
    const encoder = new TextEncoder();  // Tworzymy obiekt do kodowania tekstu na bajty
    const data = encoder.encode(password);  // Kodujemy hasło na bajty
  
    // Używamy web crypto API do stworzenia hasza
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data); 
  
    // Przekształcamy buffer do tablicy bajtów
    const hashArray = Array.from(new Uint8Array(hashBuffer)); 
  
    // Zamieniamy tablicę bajtów na ciąg hex
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  
    return hashHex;  // Zwracamy zaszyfrowany wynik haszowania
  };
  