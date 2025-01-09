// Dicionário de Código Morse
export const morseDictionary = {
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
  " ": " / ", // Espaço entre palavras em Código Morse
};

// Função para converter texto em Código Morse
export function textToMorse(text) {
  // Identificar caracteres inválidos
  const invalidChars = text
    .toUpperCase()
    .split("")
    .filter((char) => !morseDictionary[char]);

  if (invalidChars.length > 0) {
    throw new Error(
      `Os seguintes caracteres não são suportados: ${invalidChars.join(", ")}`
    );
  }

  // Converter texto em Código Morse
  return text
    .toUpperCase()
    .split("")
    .map((char) => morseDictionary[char])
    .join(" ");
}

// Função para converter Código Morse em texto
export function morseToText(morse) {
  // Inverter o dicionário para mapear Código Morse para texto
  const invertedDictionary = Object.fromEntries(
    Object.entries(morseDictionary).map(([key, value]) => [value.trim(), key])
  );

  // Identificar códigos Morse inválidos
  const invalidCodes = morse
    .split(" ")
    .filter((code) => !invertedDictionary[code]);

  if (invalidCodes.length > 0) {
    throw new Error(
      `Os seguintes códigos Morse não são suportados: ${invalidCodes.join(", ")}`
    );
  }

  // Converter Código Morse em texto
  return morse
    .split(" ")
    .map((code) => invertedDictionary[code])
    .join("");
}
