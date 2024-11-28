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
  return text
    .toUpperCase()
    .split("")
    .map((char) => morseDictionary[char] || "?")
    .join(" ");
}

// Função para converter Código Morse em texto
export function morseToText(morse) {
  // Inverte o dicionário para mapear Código Morse para texto
  const invertedDictionary = Object.fromEntries(
    Object.entries(morseDictionary).map(([key, value]) => [value, key])
  );

  return morse
    .split(" ")
    .map((code) => invertedDictionary[code] || "?")
    .join("");
}