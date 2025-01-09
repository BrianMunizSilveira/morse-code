// Dicionário de Código Morse
export const morseDictionary = {
  // Mapeamento de caracteres para Código Morse
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",

  // Números
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",

  // Caracteres especiais
  ".": ".-.-.-",
  ",": "--..--",
  ":": "---...",
  "?": "..--..",
  "'": ".----.",
  "-": "-....-",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "\"": ".-..-.",
  "@": ".--.-.",
  "=": "-...-",
  "!": "-.-.--",

  // Caracteres com acentuação 
  "Á": ".--.-",
  "Ã": ".--.",
  "Â": ".-..-",
  "É": "..-..",
  "Ê": "-..-.",
  "Í": "..-..",
  "Ó": "---.",
  "Ô": "---.",
  "Õ": "---.",
  "Ú": "..--",
  "Ç": "-.-..",

  // Espaço
  " ": " / ", // Espaço entre palavras em Código Morse
};

const testString = ",";
console.log(textToMorse(testString)); // Deve exibir "--..--"


// Função para converter texto em Código Morse
export function textToMorse(text) {
  console.log("Texto recebido:", text); // Depuração

  // Verificar caracteres inválidos
  const invalidChars = text
    .split("")
    .filter((char) => char !== " " && !morseDictionary[char.toUpperCase()]);
  if (invalidChars.length > 0) {
    throw new Error(
      `Os seguintes caracteres não são suportados: ${invalidChars.join(", ")}`
    );
  }

  // Converter texto em Código Morse
  return text
    .toUpperCase()
    .split("")
    .map((char) => {
      // Espaço é tratado separadamente
      return char === " " ? morseDictionary[" "] : morseDictionary[char] || "?";
    })
    .join(" ");
}


// Função para converter Código Morse em texto
export function morseToText(morse) {
  // Inverter o dicionário para mapear Código Morse para texto
  const invertedDictionary = Object.fromEntries(
    Object.entries(morseDictionary).map(([key, value]) => [value.trim(), key])
  );

  // Separar palavras pelo espaço "/"
  const words = morse.split(" / ");

  // Converter cada palavra separadamente
  const decodedWords = words.map((word) => {
    // Separar os caracteres Morse por espaços simples
    const letters = word.trim().split(" ");

    // Converter cada letra para texto
    return letters
      .map((code) => {
        if (!invertedDictionary[code]) {
          throw new Error(
            `Os seguintes códigos Morse não são suportados: ${code}`
          );
        }
        return invertedDictionary[code];
      })
      .join("");
  });

  // Juntar as palavras decodificadas com espaços
  return decodedWords.join(" ");
}