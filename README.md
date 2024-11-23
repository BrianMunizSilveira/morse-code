# 📡 Tradutor e Codificador de Código Morse

Este projeto é um simples tradutor e codificador de Código Morse. Ele permite converter texto em Código Morse e vice-versa, utilizando uma interface amigável.

## ✨ Funcionalidades

* **Traduzir texto para Código Morse** 📝: Digite um texto na área de entrada e clique no botão "Traduzir para Morse" para ver a conversão em Código Morse.
* **Traduzir Código Morse para texto** 💬: Digite ou cole um código Morse na área de entrada e clique no botão "Traduzir para Texto" para ver a conversão de volta para texto.

## 🛠️ Tecnologias Utilizadas

* **HTML** 🌐: Estruturação da página.
* **CSS** 🎨: Estilos da interface.
* **JavaScript** ⚡: Funcionalidade para conversão entre texto e Código Morse.

## 📖 Como Usar

1. **Entrada de Texto** ⌨️: Digite o texto que deseja traduzir para Código Morse na área de texto "Digite seu texto aqui...".
2. **Traduzir para Morse** 🔄: Clique no botão "Traduzir para Morse" e o Código Morse correspondente aparecerá na área abaixo.
3. **Entrada de Código Morse** 📊: Digite ou cole um Código Morse na área "Código Morse aparecerá aqui...".
4. **Traduzir para Texto** 🔄: Clique no botão "Traduzir para Texto" e o texto correspondente será exibido na área de entrada de texto.

## ⚙️ Como Funciona

* **Conversão de Texto para Código Morse** 📝: O código JavaScript utiliza um dicionário de mapeamento entre caracteres do alfabeto (letras e números) e seus respectivos símbolos em Código Morse. Ao clicar no botão, cada caractere é convertido e mostrado na área de saída.
* **Conversão de Código Morse para Texto** 💬: Da mesma forma, o Código Morse inserido é convertido de volta para texto, utilizando um dicionário invertido que mapeia os códigos para seus caracteres correspondentes.

## 🚀 Como Rodar o Projeto

1. Clone o repositório para o seu computador.
2. Abra o arquivo `index.html` no seu navegador para começar a usar o tradutor.

## 📁 Estrutura do Projeto

```
/src
  /css
    styles.css   (Estilos do projeto)
  /js
    script.js    (Funções para conversão entre texto e Morse)
  index.html     (Página principal com a interface)
```

## 💡 Exemplo de Uso

### 📥 Entrada:
* **Texto**: "Olá Mundo"

### 📤 Saída (Morse):
```
--- .-.. .- / -- ..- -. -.. ---
```

### 📥 Entrada:
* **Código Morse**: `--- .-.. .- / -- ..- -. -.. ---`

### 📤 Saída (Texto):
```
Olá Mundo
```

### 📸 Screenshot
![morse-code](https://i.imgur.com/vjk1uHD.png)

## 🎨 Personalização

Sinta-se à vontade para modificar o código e melhorar o projeto conforme necessário.

## 🤝 Contribuições

Se você tiver sugestões ou melhorias, fique à vontade para contribuir! Abra um *Pull Request* ou crie um *Issue*.

## 📄 Licença

Este projeto é de código aberto. Você pode usar, modificar e distribuir o código conforme a licença [MIT](./LICENSE).
