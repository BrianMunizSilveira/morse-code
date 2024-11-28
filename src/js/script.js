// Importações do módulo Morse (morse.js)
import { textToMorse, morseToText } from "./morse.js";

// Elementos DOM
const textInput = document.getElementById("textInput");
const morseOutput = document.getElementById("morseOutput");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

// Função para atualizar o histórico
function updateHistory(type, input, output) {
  const newItem = document.createElement("li");
  newItem.textContent = `${type}: "${input}" => "${output}"`;
  historyList.appendChild(newItem);
}

// Função para copiar texto para a área de transferência
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Texto copiado para a área de transferência!");
    })
    .catch((err) => {
      console.error("Erro ao copiar texto:", err);
    });
}

// Botão para traduzir texto para Morse
document.getElementById("toMorseBtn").addEventListener("click", () => {
  const input = textInput.value.trim();
  if (!input) {
    alert("Por favor, insira um texto para traduzir.");
    return;
  }
  const output = textToMorse(input);
  morseOutput.value = output;

  // Atualiza o histórico
  updateHistory("Texto para Morse", input, output);
});

// Botão para traduzir Morse para texto
document.getElementById("toTextBtn").addEventListener("click", () => {
  const input = morseOutput.value.trim();
  if (!input) {
    alert("Por favor, insira um código Morse para traduzir.");
    return;
  }
  const output = morseToText(input);
  textInput.value = output;

  // Atualiza o histórico
  updateHistory("Morse para Texto", input, output);
});

// Botão para copiar o resultado atual
copyBtn.addEventListener("click", () => {
  const output = morseOutput.value.trim();
  if (!output) {
    alert("Nada para copiar! Traduza um texto primeiro.");
    return;
  }
  copyToClipboard(output);
});

// Botão para limpar os campos de entrada e saída
clearBtn.addEventListener("click", () => {
  textInput.value = "";
  morseOutput.value = "";
});

// Botão para limpar o histórico
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});