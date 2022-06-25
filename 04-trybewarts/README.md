# Projeto Trybewarts

O objetivo do projeto foi desenvolver uma página de formulário de acordo com os requisitos propostos.

O projeto foi entregue originalmente no repositório privado da Trybe https://github.com/tryber/sd-023-a-project-trybewarts por meio da criação de uma branch pessoal e um Pull Request, onde seus requisitos foram avaliados automaticamente. 

Os requisitos avaliativos foram divididos e feitos em dupla, enquanto o visual e layout responsivo da página foram implementados individualmente. 

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

# Requisitos Obrigatórios

## 1. Crie uma barra verde na parte superior da página

<details>
  <summary>
A barra deve possuir a classe <code>header</code>, ser um <code>flex container</code> e ter a cor de fundo <code>rgb(50, 167, 145)</code>
  </summary><br/>

  * Crie um elemento que possua a classe igual a `header`;
  * Faça com que o header seja um `flex container`;
  * Adicione ao elemento com a classe `header` a cor de fundo `rgb(50, 167, 145)`;

  **O que será testado:**

  * Existe um elemento com a classe `header`;
  * O elemento possui a propriedade CSS `display: flex`;
  * O elemento possui a propriedade CSS `background-color: rgb(50, 167, 145)`.

</details>

## 2. Adicione o logotipo da Trybewarts

<details>
  <summary>
    O logotipo deve estar dentro do <code>header</code> e ser um elemento <code>img</code>
  </summary><br/>

  * Crie uma tag `img` dentro do elemento com a classe `header`:
    * Adicione a classe `trybewarts-header-logo`;
    * Adicione o atributo `src` com o valor `images/trybewarts-header-logo.svg`;

  **O que será testado:**

  * Existe um elemento `img` com a classe `trybewarts-header-logo`;
  * O elemento possui o atributo `src` apontando para `images/trybewarts-header-logo.svg`.

</details>

## 3. Acrescente um formulário de login no `header`

<details>
  <summary>
    O formulário de login deve conter os inputs de <code>email</code>, <code>senha</code> e um botão de login e deve estar posicionado a direita da logo.
  </summary><br/>

* Crie um formulário com a classe `trybewarts-login`;
* Crie o input de **email** dentro do formulário:
  * Adicione o atributo `name` com o valor **email**;
  * Adicione o atributo `placeholder` com o valor **Email**;
* Crie o input de **senha** dentro do formulário:
 * Adicione o atributo `name` com o valor **password**;
 * Adicione o atributo `placeholder` com o valor **Senha**;
* Crie um botão com o texto **"Entrar"**;
* Faça com que o formulário seja um **flex container**;
* Faça com que o formulário fique a direita da logo;
* Valide o formulário:
  * Ao preencher o formulário e clicar no botão, será validado que:
    * Caso o email seja **"tryber@teste.com"** e a senha seja **"123456"** será emitido um alerta contendo o texto **"Olá, Tryber!"**; 
    * Em todos os outro casos deverá ser emitido um alerta contendo o texto **"Email ou senha inválidos."**;

**De olho na dica 👀:** adicione a propriedade `flex` que faz os elementos terem o espaçamento máximo **entre eles** no **header**

**O que será testado:**

* Existe um elemento `form` com a classe `trybewarts-login`;
* Existe um input com o atributo `name` igual a **email** e o `placeholder` igual a **Email**;
* Existe um input com o atributo `name` igual a **password** e o `placeholder` igual a **Senha**;
* Existe um botão com o texto `Entrar`;
* O formulário possui a propriedade CSS `display: flex`;
* O elemento `form` está à direita da logo;
* Ao clicar no botão de login dispara um `alert` com o texto `Email ou senha inválidos`, no caso de erro de preenchimento dos dados;
* Ao clicar no botão de login dispara um `alert` com o texto `Olá, Tryber!`, no caso de preenchimento correto dos dados.

</details>

## 4. Crie um título com o texto "Trybewarts" centralizado dentro do `Header`

  <details>
  <summary>
  Deve existir um elemento <code>h1</code> com o id <code>trybewarts-header-title</code> e com o texto <strong>"Trybewarts"</strong>
  </summary><br/>

* Crie a tag `h1` com o `id` igual a `trybewarts-header-title`;
* Adicione o texto **"Trybewarts"** dentro do `h1`;
* O título deverá estar no meio da barra verde:
  * O header deve ter exatamente três elementos filhos;
  * O filho do meio deve ser o título;

**O que será testado:**

* Existe um elemento `h1` com o `id` igual a `trybewarts-header-title` e com o texto `Trybewarts`;
* O elemento com a classe `header` deve possuir exatos `3` elementos filhos;
* O filho do meio do elemento com a classe `header` deve ser o título `h1` com o texto `Trybewarts`.

  </details>

## 5. Adicione um formulário no corpo da página

  <details>
  <summary>
  O formulário deve possuir o id <code>evaluation-form</code> e estar dentro de uma tag <code>main</code>
  </summary><br/>

* Crie um formulário com o `id` igual a `evaluation-form`;
* Insira o formulário dentro de uma tag `main`;
* Faça com que o formulário seja um `flex container`;
* Faça com que o `main`, seja um `flex containers`;
* Adicione uma largura de `675px` ao formulário.

**O que será testado:**

* Existe um elemento `form` com o `id` igual a `evaluation-form`;
* O elemento `form` está dentro da tag `main`;
* O elemento `main` e o `form` possuem a propriedade CSS `display: flex`;
* O elemento `form` possui a propriedade CSS `width: 675px`;

</details>

## 6. Faça com que a direção do formulário seja vertical

<details>
  <summary>
    A direção dos itens do formulário com o <code>id</code> igual a <code>evaluation-form</code> devem estar na vertical
 </summary><br/>

* Acrescente no formulário com `id` igual a `evaluation-form` a propriedade que muda a direção do elemento.

**O que será testado:**

* O elemento `evaluation-form` possui a propriedade CSS `flex-direction: column`.

</details>

## 7. Adicione a logo da Trybewarts ao lado direito da página

  <details>
  <summary>
  O elemento deve ser uma tag <code>img</code> com o <code>id</code> igual a <code>trybewarts-forms-logo</code>
  </summary><br/>

* Crie um elemento `img` com o `id` igual a `trybewarts-forms-logo`;
* Adicione o atributo `src` com o valor `images/trybewarts-colored.svg`;
* Adicione o estilo css `height` de `500px`;

**O que será testado:**

* Existe um elemento `img` com o `id` igual a `trybewarts-forms-logo`;
* O elemento possui o atributo `src` apontando para `images/trybewarts-colored.svg`;
* A imagem possui o estilo css `height` igual a `500px`;

</details>

## 8. Acrescente inputs de `nome, sobrenome` e `email` ao formulário

<details>
  <summary>
    Dentro do formulário com id <code>evaluation-form</code> adicione os inputs de <code>nome, sobrenome</code> e <code>email</code>
  </summary> <br />

* Crie um input com o `id` igual a `input-name`:
  * Adicione o atributo `placeholder` com o valor `Nome`;
* Crie um input com o `id` igual a `input-lastname`:
  * Adicione o atributo `placeholder` com o valor `Sobrenome`;
* Crie um input com o `id` igual a `input-email`:
  * Adicione o atributo `placeholder` com o valor `Email`.

**O que será testado:**

* Existe um input com o `id` igual a `input-name` e placeholder `Nome`;
* Existe um input com o `id` igual a `input-lastname` e placeholder `Sobrenome`;
* Existe um input com o `id` igual a `input-email` e placeholder `Email`.

</details>

## 9. Acrescente um `select` ao formulário

<details>
  <summary>
    O formulário com <code>id</code> igual a <code>evaluation-form</code> deve possuir um input de <code>select</code> com as opções <code>Gitnória, Reactpuff, Corvinode</code> e <code>Pytherina</code>
  </summary> <br />

* Crie um `select` com o `id` igual a `house`;
* Adicione ao `select`:
  * a opção `Gitnória` com o `id` igual a `gitnoria-house` e o atributo `value` igual a `Gitnória`;
  * a opção com `text` e `value` igual a `Reactpuff` e com o `id` igual a `reactpuff-house`;
  * a opção com `text` e `value` igual a `Corvinode` e com o `id` igual a `corvinode-house`;
  * a opção com `text` e `value` igual a `Pytherina` e com o `id` igual a `pytherina-house`.

**O que será testado:**

* Existe um elemento `select` com o id `house`;
* Existe um elemento `option` com `text` e `value` igual a `Gitnória` e com o `id` igual a `gitnoria-house`;
* Existe um elemento `option` com `text` e `value` igual a `Reactpuff` e com o `id` igual a `reactpuff-house`;
* Existe um elemento `option` com `text` e `value` igual a `Corvinode` e com o `id` igual a `corvinode-house`;
* Existe um elemento `option` com `text` e `value` igual a `Pytherina` e com o `id` igual a `pytherina-house`.

</details>

## 10. Posicione os campos de `Nome` e `Sobrenome` lado a lado

<details>
  <summary>
    Os campos de <code>Nome</code> e <code>Sobrenome</code> devem estar lado a lado
  </summary> <br />

  * Faça com que os campos de de `Nome` e `Sobrenome` fiquem lado a lado.

**O que será testado:**

* O campo de `Sobrenome` está à direita do campo de `Nome`.

</details> 

## 11. Posicione os campos de `Email` e `Casa` lado a lado

<details>
  <summary>
    Os campos de <code>Email</code> e <code>Casa</code> devem estar lado a lado
  </summary> <br />

* Faça com que os campos `Email` e `Casa` fiquem lado a lado.

**O que será testado:**

* O campo de `Casa` está à direita do campo de `Email`.

</details>

## 12. Adicione 3 inputs do tipo `radio` ao formulário

<details>
  <summary>
    O formulário deve possuir um campo de entrada com 3 inputs do tipo <code>radio</code> para que a pessoa estudante escolha qual família se identifica
  </summary> <br />

* Crie uma `label` com o `id` igual a `label-family` e acrescente o texto **"Qual sua família?"**;
* Adicione ao formulário os seguintes elementos:
  * um `input` do tipo `radio` com o atributo `name` igual a `family` e `value` igual a `Frontend`;
  * um `input` do tipo `radio` com o atributo `name` igual a `family` e `value` igual a `Backend`;
  * um `input` do tipo `radio` com o atributo `name` igual a `family` e `value` igual a `FullStack`;
* Posicione os `radio buttons` para ficar abaixo um do outro e na sequência: **Frontend**, **Backend** e **FullStack**
* Posicione os radio buttons abaixo da `label`.

**O que será testado:**

* Existe um elemento `label` com o `id` igual a `label-family` que possui o conteúdo de texto `Qual sua família?`;
* Existe um `input` do tipo `radio` com o atributo `name` igual a `family` e `value` igual a `Frontend`;
* Existe um `input` do tipo `radio` com o atributo `name` igual a `family` e `value` igual a `Backend`;
* Existe um `input` do tipo `radio` com o atributo `name` igual a `family` e `value` igual a `FullStack`;
* Os inputs do tipo `radio` estão um abaixo do outro na sequência `Frontend`, `Backend` e `FullStack`.
* Os inputs do tipo `radio` estão abaixo do texto da `label`

</details>

## 13. Crie inputs do tipo `checkbox`

<details>
  <summary>
    Os campos de entrada do tipo <code>checkbox</code> devem conter seis opções: <code>Hofs, Jest, Promises, React, SQL, Python</code>
  </summary> <br />

* Crie um elemento com o `id` igual a `label-content` e acrescente o texto **"Qual conteúdo você está com mais vontade de aprender?"**;
* Crie um input do tipo `checkbox` com a classe `subject` e o `value` igual a `HoFs`;
* Crie um input do tipo `checkbox` com a classe `subject` o `value` igual a `Jest`;
* Crie um input do tipo `checkbox` com a classe `subject` o `value` igual a `Promises`;
* Crie um input do tipo `checkbox` com a classe `subject` o `value` igual a `React`;
* Crie um input do tipo `checkbox` com a classe `subject` o `value` igual a `SQL`;
* Crie um input do tipo `checkbox` com a classe `subject` o `value` igual a `Python`;
* Posicione as checkboxes abaixo da label.

**O que será testado:**

* Existe um elemento `label` com o `id` igual a `label-content` que possui um conteúdo de texto `Qual conteúdo você está com mais vontade de aprender?`;
* Existe um `input` do tipo `checkbox` com a classe `subject` e o atributo `value` igual a `HoFs`;
* Existe um `input` do tipo `checkbox` com a classe `subject` e o atributo `value` igual a `Jest`;
* Existe um `input` do tipo `checkbox` com a classe `subject` e o atributo `value` igual a `Promises`;
* Existe um `input` do tipo `checkbox` com a classe `subject` e o atributo `value` igual a `React`;
* Existe um `input` do tipo `checkbox` com a classe `subject` e o atributo `value` igual a `SQL`;
* Existe um `input` do tipo `checkbox` com a classe `subject` e o atributo `value` igual a `Python`;
* Os elementos `checkbox` então posicionados abaixo da label.

</details>

## 14. Crie um campo de avaliação

<details>
  <summary>
    O campo deve possuir 10 inputs do tipo <code>radio</code> para avaliar de 1 a 10 o nível de satisfação com a Trybewarts
  </summary> <br />

* Crie uma `label` com o `id` igual a `label-rate` e acrescente o texto **"Como você avalia a Trybewarts?"**;
* Crie 10 `radio buttons`, contendo as opções de 1 a 10:
  * Adicione o atributo `value` com o valor de 1 a 10;
* Adicione ao atributo `name` dos `radios buttons` o valor `rate`;
* Posicione os `radio buttons` para ficar lado a lado.

**O que será testado:**

* Existe um elemento `label` com o `id` igual a `label-rate` que possui um conteúdo de texto `Como você avalia a Trybewarts?`;
* Existem 10 `radio-buttons` com o atributo `name="rate"`;
* Existem 10 `radio-buttons` contendo o atributo `value` de 1 a 10.

</details>  

## 15. Crie uma textarea
<details>
  <summary>
    O número máximo de caracteres da <code>textarea</code> deve ser igual à 500
  </summary> <br />

* Crie uma `textarea`;
* Crie uma label com a classe `textarea` e que possua o texto **"Deixe seu comentário:"**;
* Adicione ao elemento `textarea` o limite de 500 caracteres.

**O que será testado:**

* Existe uma `label` com a classe `textarea` e o texto `Deixe seu comentário:`;
* O elemento `textarea` possui um limite de 500 caracteres.

</details>

## 16. Valide as informações do formulário

<details>
  <summary>
     Adicione um campo de entrada do tipo <code>checkbox</code> que deve validar a permissão de uso das informações
  </summary> <br /> 

* Crie um campo de entrada do tipo `checkbox` com o `id` igual a `agreement`;
* Crie uma label com o `id` igual a `label-infos` e que possua o texto **"Você concorda com o uso das informações acima?"**;
* Posicione o `checkbox` ao lado da label.

**O que será testado:**

* Existe uma label com o `id` igual a `label-infos` que possui o texto `Você concorda com o uso das informações acima?`;
* Existe um input do tipo `checkbox` com o `id` igual a `agreement`;

</details> 

## 17. Crie um botão de "Enviar" para submeter o formulário

<details>
  <summary>
    O botão para submeter o formulário deve ser do tipo <code>submit</code> e possuir o <code>id</code> igual a <code>submit-btn</code>
  </summary> <br />

* Crie um botão do tipo `submit` com o `id` igual a `submit-btn`;
* Adicione o texto **"Enviar"** ao botão.

**O que será testado:**

* Existe um botão do tipo `submit` com o id `submit-btn` e o texto `Enviar`;

</details>  

## 18. Habilite o botão "Enviar" após a validação do `checkbox`

<details>
  <summary>
    O botão deve ser habilitado somente se o <code>checkbox</code> com o <code>id</code> igual a <code>agreement</code> estiver selecionado
  </summary> <br />

* Desabilite o botão caso o `checkbox` não esteja selecionado;
* Habilite o botão caso o `checkbox` seja selecionado.

**O que será testado:**

* O botão está inicialmente desabilitado;
* O botão torna-se habilitado ao marcar o campo com `id` igual a `agreement`;

</details>  

## 19. Crie um rodapé ao final da página

<details>
  <summary>
    O rodapé deverá conter o texto <strong>"Direitos reservados à Trybewarts©"</strong>
  </summary> <br />

* Crie um rodapé com o texto **"Direitos reservados à Trybewarts©"**.

**O que será testado:**

* Existe um elemento `footer` deve possuir o texto `Direitos reservados à Trybewarts©`.

</details>  

# Requisitos Bônus

## 20. Crie um contador de caracteres

<details>
  <summary>
    O contador deve possuir o <code>id</code> igual a <code>counter</code> contendo o número de caracteres, que deverá ser atualizado a medida que algo for digitado na <code>textarea</code>
  </summary> <br />

* Crie o contador e adicione o `id` igual a `counter`;
* Adicione ao contador o valor inicial de `500`:
  * O contador deve variar entre `500` caracteres e `0`;
* Decremente o contador a medida que algo for escrito no campo `textarea`;
* Incremente o contador a medida que algo for deletado no campo `textarea`;
* Adicione ao elemento `textarea` o `id` igual a `textarea`.

**O que será testado:**

* Existe um elemento com o id `counter`;
* Existe um elemento com o id `textarea`;
* O preenchimento do campo de `textarea` altera o número apresentado no elemento `#counter`;

</details>

## 21. Substitua o formulário pelas informações da pessoa estudante

<details>
  <summary>
    Faça com que, ao clicar no botão <code>Enviar</code>, o conteúdo dentro da tag <code>form</code> seja substituído pelas informações preenchidas pela pessoa estudante
  </summary> <br />

* Crie um elemento com `id` igual a `form-data` e dentro dele:
  * Crie um campo que vai receber o nome digitado pela pessoa usuária, no formato `Nome: Alguem Aqui`;
  * Crie um campo que vai receber o email digitado pela pessoa usuária, no formato `Email: email@mail.com`;
  * Crie um campo que vai receber a casa escolhida pela pessoa usuária, no formato `Casa: Casa Escolhida`;
  * Crie um campo que vai receber a família selecionada pela pessoa usuária, no formato `Família: Família Escolhida`;
  * Crie um campo que vai receber os conteúdos selecionados pela pessoa usuária, no formato `Matérias: Matérias, Marcadas, Aqui`;
  > **De olho na dica 👀 :** os conteúdos devem estar separados por uma vírgula e um espaço
  * Crie um campo que vai receber a avaliação selecionada pela pessoa usuária, no formato `Avaliação: NotaAqui`;
  * Crie um campo que vai receber o comentário digitado pela pessoa usuária, no formato `Observações: Observações aqui`.
  * Substitua os campos do formulário campos do pelas informações da pessoa usuária;

**O que será testado:**

* O elemento `<form>` com `id` igual a `form-data` deve ser exibido na tela;
* Ao clicar no botão de enviar, existe um texto no formato `Nome: -Nome- -Sobrenome-`;
* Ao clicar no botão de enviar, existe um texto no formato `Email: -Email-`;
* Ao clicar no botão de enviar, existe um texto no formato `Casa: -Casa-`;
* Ao clicar no botão de enviar, existe um texto no formato `Família: -Família-`;
* Ao clicar no botão de enviar, existe um texto no formato `Matérias: -Matérias Selecionadas-`;
* Ao clicar no botão de enviar, existe um texto no formato `Avaliação: -Avaliação-`;
* Ao clicar no botão de enviar, existe um texto no formato `Observações: -Observações-`;
* Ao enviar as informações, o formulário deve ser substituído pelas informações da pessoa usuária.

</details>

# Requisito não avaliativo

Esse requisito **não** é verificado pelo avaliador automático.

## 22. Desenvolva a versão mobile do formulário Trybewarts

<details>
  <summary>
    Realize o desenvolvimento da versão mobile do formulário Trybewarts
  </summary> <br />

* Utilize media queries para inserir breakpoints para telas de diferentes tamanhos;
* Leve em conta a largura da tela e a experiência do usuário ao reorganizar o layout para dispositivos menores;
* Tente inserir um 'menu hambúrguer' na barra superior para lidar com o login usando javascript. Se não conseguir, tente criar uma página separada de login, uma prática muito comum;
* Deixe sua criatividade fluir! Preferimos não avaliar esse requisito justamente pra que você tenha liberdade para executar a responsividade da maneira que você achar mais agradável!

</details>

</details>