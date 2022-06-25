# Projeto Mystery Letter

O objetivo do projeto foi desenvolver um site que gera cartas misteriosas a partir do input da pessoa usuária.

O projeto foi entregue originalmente no repositório privado da Trybe https://github.com/tryber/sd-023-a-project-mistery-letter/ por meio da criação de uma branch pessoal e um Pull Request, onde seus requisitos foram avaliados automaticamente.

<details>
  <summary><strong> Linter e Avaliador automático </strong></summary>
  <br>
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
<summary><strong> Requisitos </strong></summary>
<br>

# Requisitos Obrigatórios:

## 1 - Deve haver um `input` com o id=\"carta-texto\" onde a pessoa usuária poderá digitar o conteúdo da carta

<details>
  <summary>Sua página deve conter um input com id="carta-texto"</summary><br />

**O que será verificado**

- Existe um elemento `input`
  - Com `id=carta-texto`

</details>

## 2 - Deve haver um parágrafo com o id=\"carta-gerada\" onde a pessoa usuária verá o resultado de sua carta misteriosa

<details>
  <summary>Sua página deve conter um parágrafo com id="carta-gerada"</summary><br />

**O que será verificado**

- Existe um elemento `p` 
  - Com o `id="carta-gerada"`

</details>

## 3 - Deve haver um botão com id=\"criar-carta\" e ao clicar nesse botão, a carta misteriosa deve ser gerada

<details>
  <summary>Sua página deve conter um botão com id="criar-carta"</summary><br />

**Pontos importantes:**

* Cada palavra deve aparecer dentro de uma tag `span`.
* As tags `span` devem ser adicionadas como filhas do parágrafo que possui o id `carta-gerada`.

**O que será verificado**

- Existe um elemento `button` 
  - Com `id="criar-carta"`

- Ao clicar no botão, a carta misteriosa deve ser gerada

</details>

## 4 - Ao criar uma carta através do botão com id="criar-carta", o `input` com id="carta-texto" deve permanecer com o texto digitado

<details>
  <summary>O input com o id="carta-texto" deve permanecer com o texto digitado</summary><br />

**O que será verificado**

- Ao criar uma carta através do botão `id="criar-carta"` o input com `id="carta-texto"` permanece com o texto digitado

</details>

## 5 - Se a pessoa usuária não preencher o campo ou preencher com apenas espaços vazios adicionar a mensagem 'Por favor, digite o conteúdo da carta.'

<details>
  <summary>Quando não houver texto, a mensagem "Por favor, digite o conteúdo da carta" deve aparecer em um parágrafo</summary><br />

**O que será verificado**

- Ao deixar em branco, irá exibir a mensagem "Por favor, digite o conteúdo da carta." no elemento `p` com o `id="carta-gerada"`
- Ao digitar espaços em branco irá exibir a mensagem "Por favor, digite o conteúdo da carta." no elemento `p` com o `id="carta-gerada"`

</details>

## 6 - Crie a classe `newspaper`

<details>
  <summary>A classe <code>newspaper</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `background-color` com o valor `rgb(250, 235, 215)`
  - `font-family` com o valor `Times New Roman`
  - `font-weight` com o valor `700`

**O que será verificado**

- Será validado se a classe `newspaper` possui as propriedades:
  - `background-color` igual a `rgb(250, 235, 215)`;
  - `font-family` igual a `Times New Roman`;
  - `font-weight` igual a `700`.

</details>

## 7 - Crie a classe `magazine1`.

<details>
  <summary>A classe <code>magazine1</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `background-color` com o valor `rgb(0, 128, 128)`
  - `color` com o valor `rgb(255, 255, 255)`
  - `font-family` com o valor `Verdana`
  - `font-weight` com o valor `900`
  - `text-transform` com o valor `uppercase`

**O que será verificado**

- Será validado se a classe `magazine1` possui as propriedades:
  - `background-color` igual a ` rgb(0, 128, 128)`;
  - `color` igual a `rgb(255, 255, 255)`;
  - `font-family` igual a `Verdana`;
  - `font-weight` igual a `900`;
  - `text-transform` igual a `uppercase`.

</details>

## 8 - Crie a classe `magazine2`.

<details>
  <summary>A classe <code>magazine2</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `background-image` com a imagem `images/pink-pattern.png`
  - `color` com o valor `rgb(255, 0, 255)`
  - `font-family` com o valor `Verdana`
  - `font-weight` com o valor `900`

**O que será verificado**

- A classe `magazine2` possui as propriedades:
  - `background-image` igual a `images/pink-pattern.png`;
  - `color` igual a `rgb(255, 0, 255)`;
  - `font-family` igual a `Verdana`;
  - `font-weight` igual a `900`.

</details>

## 9 - Crie a classe `medium`.

<details>
  <summary>A classe <code>medium</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `font-size` com o valor `20px`
  - `padding` com o valor `8px`

**O que será verificado**

- A classe `medium` possui a propriedade:
  - `font-size` igual a  `20px`;
  - `padding` igual a `8px`.

</details>

## 10 - Crie a classe `big`.

<details>
  <summary>A classe <code>big</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `font-size` com o valor `30px`;
  - `padding` com o valor `10px`.

**O que será verificado**

- A classe `big` possui as propriedades:
  - `font-size` com o valor `30px`;
  - `padding` com o valor `10px`.

</details>

## 11 - Crie a classe `reallybig`.

<details>
  <summary>A classe <code>reallybig</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `font-size` com o valor `40px`;
  - `padding` com o valor `15px`.

**O que será verificado**

- A classe `reallybig` possui as propriedades:
  - `font-size` com o valor `40px`;
  - `padding` com o valor `15px`.

</details>

## 12 - Crie a classe `rotateleft`.

<details>
  <summary>A classe <code>rotateleft</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `transform` com o valor `matrix(0.996195, -0.0871557, 0.0871557, 0.996195, 0, 0)`

**O que será verificado**

- A classe `rotateleft` possui a propriedade `transform` igual a `matrix(0.996195, -0.0871557, 0.0871557, 0.996195, 0, 0)`

</details>

## 13 - Crie a classe `rotateright`.

<details>
  <summary>A classe <code>rotateright</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `transform` com o valor `matrix(0.996195, 0.0871557, -0.0871557, 0.996195, 0, 0)`

**O que será verificado**

- A classe `rotateright` possui a propriedade `transform` igual a `matrix(0.996195, 0.0871557, -0.0871557, 0.996195, 0, 0)`

</details>

## 14 - Crie a classe `skewleft`.

<details>
  <summary>A classe <code>skewleft</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `transform` com o valor `matrix(1, 0, 0.176327, 1, 0, 0)`;

**O que será verificado**

- A classe `skewleft` possui a propriedade `transform` igual a `matrix(1, 0, 0.176327, 1, 0, 0)`

</details>

## 15 - Crie a classe `skewright`.

<details>
  <summary>A classe <code>skewright</code> deve possuir propriedades específicas</summary><br />

**Pontos importantes:**

* Defina as propriedades:
  - `transform` com o valor `matrix(1, 0, -0.176327, 1, 0, 0)`;

**O que será verificado**

- A classe `skewright` possui a propriedade `transform` igual a `matrix(1, 0, -0.176327, 1, 0, 0)`

</details>

## 16 - Adicione as classes de forma aleatória a fim de estilizar as palavras.

<details>
  <summary>Utilize o <code>Javascript</code> para atribuir as classes de forma aleatória</summary><br />

**Pontos importantes:**

* As classes devem ser adicionadas às tags `span` de forma **aleatória**.
* Sempre adicione mais de uma classe em uma palavra.
* Utilize as classes:
  - `newspaper`, `magazine1`, `magazine2` (Grupo estilo)
  - `medium`, `big`, `reallybig` (Grupo tamanho)
  - `rotateleft`, `rotateright` (Grupo rotação)
  - `skewleft`, `skewright` (Grupo inclinação)

* **Não** utilize mais de uma classe do mesmo grupo.
* Todas as palavras devem conter uma classe de cada grupo.
* Ou seja, se você utilizar as classes `magazine1`, `big`, `rotateleft` e `skewright` em uma palavra, as demais classes de cada grupo não devem ser usadas para essa mesma palavra. Por exemplo, do grupo estilo não seriam utilizadas as classes `newspaper` e `magazine2` pois a classe `magazine1` já está sendo utilizada.

**O que será verificado**

- Ao criar uma carta, ela recebe uma lista de classes aleatórias

- Ao criar uma segunda carta, ela recebe uma lista de classes aleatórias

- As classes das duas cartas não são exatamente iguais

</details>

# Requisitos Bônus:

## 17 - Com uma carta misteriosa gerada, adicione a possibilidade de alterar o estilo de uma palavra específica ao clicar nela

<details>
  <summary>Ao clicar na carta gerada, a classe dela é alterada</summary><br />

**Pontos importantes:**

* Ao clicar em uma palavra, um novo estilo **aleatório** deve ser aplicado.
* O número de mudanças deve ser ilimitado.

**O que será verificado**

- A palavra contém quatro classes, uma de cada grupo;

- Ao clicar em uma carta, uma nova lista aleatória de classes é gerada;

- Ao clicar novamente na mesma carta, uma nova lista aleatória de classes é gerada e se a nova lista é diferente da lista anterior;

</details>

## 18 - Deve haver um parágrafo com o id=\"carta-contador\" onde existirá um contador de palavras

<details>
  <summary>Sua página deve conter um paragrafo com id="carta-contador" que conte quantas palavras foram geradas</summary><br />

**Pontos importantes:**

* Esse contador deve informar a quantidade de palavras presentes na carta misteriosa gerada.



**O que será verificado**

- Existe um elemento `p` com o `id="carta-contador"`

- Ao criar uma carta o elemento `p` com o `id="carta-contador"`  é atualizado com o número de palavras da carta (valor numérico).

</details>
</details>