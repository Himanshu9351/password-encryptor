// Simple String Encryptor and Decryptor using Caesar Cipher

function encrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        // Check if character is uppercase letter
        if (char >= 65 && char <= 90) {
            result += String.fromCharCode((char - 65 + shift) % 26 + 65);
        }
        // Check if character is lowercase letter
        else if (char >= 97 && char <= 122) {
            result += String.fromCharCode((char - 97 + shift) % 26 + 97);
        }
        // If it's not a letter, keep it as is
        else {
            result += text.charAt(i);
        }
    }
    return result;
}

function decrypt(text, shift) {
    return encrypt(text, 26 - shift); // Decrypting is just encrypting with 26 - shift
}

// Example usage:
let originalText = "Hello, World!";
let shift = 3;
let encryptedText = encrypt(originalText, shift);
let decryptedText = decrypt(encryptedText, shift);

console.log("Original Text: ", originalText);
console.log("Encrypted Text: ", encryptedText);
console.log("Decrypted Text: ", decryptedText);
