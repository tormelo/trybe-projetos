# Projeto Color Guess

O objetivo do projeto foi desenvolver um jogo de adivinhação de cores utilizando HTML, CSS e JavaScript, de acordo com os requisitos propostos.

O projeto foi entregue originalmente no repositório privado da Trybe https://github.com/tryber/sd-023-a-project-color-guess/ por meio da criação de uma branch pessoal e um Pull Request, onde seus requisitos foram avaliados automaticamente.

<details>
<summary><strong> Linter e Avaliador automático </strong></summary><br>
Primeiro instale as dependências do projeto com o comando:

```bash
npm install
```

Para rodar o linter localmente no projeto, execute o comando abaixo:

```bash
npm run lint && npm run lint:styles
```

Os requisitos do projeto podem ser testados automaticamente com os comandos abaixo:

```bash
npm test
```
***ou***

```bash
npm run cypress:open
```
</details>

<details>
  <summary><strong> Requisitos </strong></summary><br>

# Requisitos

## 1 - Adicione no seu site um título com o nome do seu jogo

<details>
  <summary>Sua página deve conter um elemento html com o id title</summary><br />

**O que será verificado:**

- Existe um elemento com **id** é `title`.
  
</details>

## 2 - Adicione um texto com o código RGB a ser adivinhado

<details>
  <summary>Sua página deverá conter um texto com a cor a ser adivinhada no formato rgb</summary><br />

**O que será verificado:**

- Se o id do texto é rgb-color;

- Se o texto contem os três números das cores RGB a ser adivinhada, no seguinte formato: `(168, 34, 1)`.

</details>

## 3 - Adicione à página opções de cores para serem adivinhadas

<details>
  <summary>Sua página deverá conter 6 círculos que deverão conter a classe ball</summary><br />

**O que será verificado:**

- Se existem 6 círculos como opção de cor de adivinhação;

- Se a largura e altura dos círculos possuem o mesmo tamanho;

- Se todos os círculos possuem a classe ball.

</details>

## 4 - Adicione cores nas bolas, elas devem ser geradas dinamicamente

<details>
  <summary>As cores dos círculos são geradas por javascript</summary><br />

**O que será verificado:**

- As cores de cada um dos 6 círculos coloridos devem ser geradas via JavaScript ao carregar a página.

</details>

## 5 - Ao clicar em um círculo colorido, deve ser mostrado um texto indicando se está correto

<details>
  <summary>Sua página deverá ter um texto que deverá mudar conforme a situação do jogo</summary><br />

**O que será verificado:**

- O **id** do elemento com o texto da resposta deve ser `answer`;

- Quando o jogo é iniciado, o texto exibido deve ser `"Escolha uma cor"`;

- Se o círculo colorido for o **correto**, deve ser exibido o texto "Acertou!";

- Se o círculo colorido for o **incorreto**, deve ser exibido o texto "Errou! Tente novamente!".

</details>

## 6 - Crie um botão para iniciar/reiniciar o jogo

<details>
  <summary>Sua página deverá contér um botão que possibilite iniciar e jogar novamente</summary><br />

**O que será verificado:**

  - O botão deve ter o id reset-game;

  - Ao clicar no botão, novas cores devem ser geradas via JavaScript e o elemento rgb-color deve ser atualizado;

  - Ao clicar no botão, o elemento answer deve voltar ao estado inicial, exibindo o texto "Escolha uma cor".

  
</details>

# Bônus

## 7 - Crie um placar que incremente 3 pontos para cada acerto no jogo

<details>
  <summary>Sua página deverá conter um elemento que deverá marcar o placar da pessoa jogadora</summary><br />

**O que será verificado:**

- O elemento deve ter o **id** `score`;

- O valor inicial dele deve ser 0;

- A cada acerto, é incrementado 3 pontos ao placar;

- Ao clicar no botão reiniciar, o placar NÃO deve ser redefinido.

</details>
</details>