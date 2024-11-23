// Dicionário de Código Morse
const morseDictionary = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ' ': ' / '  // Espaço entre palavras em Código Morse
};

// Função para converter texto em Código Morse
function textToMorse(text) {
    return text.toUpperCase().split('').map(char => {
        return morseDictionary[char] || ''; // Retorna o Código Morse ou vazio se o caractere não estiver no dicionário
    }).join(' ');
}

// Função para converter Código Morse em texto
function morseToText(morse) {
    // Inverte o dicionário para mapear Código Morse para texto
    const invertedMorseDictionary = Object.fromEntries(
        Object.entries(morseDictionary).map(([key, value]) => [value, key])
    );

    return morse.split(' ').map(code => {
        return invertedMorseDictionary[code] || ''; // Retorna a letra ou vazio se o código não estiver no dicionário
    }).join('');
}

// Configuração dos botões
document.getElementById('toMorseBtn').addEventListener('click', () => {
    const textInput = document.getElementById('textInput').value;
    const morseOutput = textToMorse(textInput);
    document.getElementById('morseOutput').value = morseOutput;
});

document.getElementById('toTextBtn').addEventListener('click', () => {
    const morseInput = document.getElementById('morseOutput').value;
    const textOutput = morseToText(morseInput);
    document.getElementById('textInput').value = textOutput;
});
