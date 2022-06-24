# Projeto To-do List

O objetivo do projeto foi desenvolver uma lista de tarefas usando `HTML`, `CSS` e `JavaScript` de acordo com os requisitos propostos.

O projeto foi entregue originalmente no repositório privado da Trybe https://github.com/tryber/sd-023-a-project-todo-list/ por meio da criação de uma branch pessoal e um Pull Request, onde seus requisitos foram avaliados automaticamente.

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

# Requisitos Obrigatórios

## 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag `<header>`

<details><summary><strong>Adicione uma tag <code>header</code> com o conteúdo "Minha Lista de Tarefas"</strong></summary><br />



- Sua página deve possuir uma tag `header` com o conteúdo "Minha Lista de Tarefas"

</details>

## 2 - Adicione abaixo do título um parágrafo com o texto "Clique duas vezes em um item para marcá-lo como completo"

<details><summary><strong>Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"</strong></summary><br />

**O que será verificado:**

- Existe um elemento com o id `funcionamento`;
- O seu conteúdo é `Clique duas vezes em um item para marcá-lo como completo`.

</details>

## 3 - Adicione um input onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista

<details><summary><strong>Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista</strong></summary><br />


**O que será verificado:**

- Existe de um elemento do tipo `input`;
- O seu id é `texto-tarefa`.

</details>

## 4 - Adicione uma lista ordenada de tarefas

<details><summary><strong>Adicione uma lista ordenada de tarefas com o id="lista-tarefas"</strong></summary><br />

**O que será verificado:**

- Existe um elemento do tipo `ol`;
- O seu id é `lista-tarefas`.

</details>

## 5 - Adicione um botão e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

<details><summary><strong>Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo</strong></summary><br />

**O que será verificado:**

- Existe um elemento do tipo `button`;
- O seu id é `criar-tarefa`;
- Ao digitar o texto `minha primeira tarefa` e clicar no botão `criar-tarefa`, o texto digitado aparece na lista e **desaparece do campo de input**;
- A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista a medida em que novos são adicionados.

</details>

## 6 - Ordene os itens da lista de tarefas por ordem de criação

<details><summary><strong>Você deve garantir que os itens adicionados à lista não apareçam em uma ordem diferente da que foram criados. Por exemplo, ao adicionar os itens `Fazer exercícios do bloco 4`, `Segunda tarefa` e `Anotar dicas de JS`, eles devem constar na lista exatamente nessa ordem.</strong></summary><br />

**O que será verificado:**

- Três itens serão criados na lista e será checado se eles estão ordenados por ordem de criação - ou seja, primeiro o primeiro item criado, depois o segundo, e assim por diante.

</details>

## 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza

<details><summary><strong>A cor deve ser alterada para para o nome da cor (gray) e não qualquer outro padrão de cores.</strong></summary><br />

**O que será verificado:**

- Ao se carregar a página, os itens da lista **não têm** o estilo CSS `background-color: gray`;

- Ao se clicar em um item da lista, ele passa a ter o estilo CSS `background-color: gray`.

</details>

## 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

<details><summary><strong>Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo</strong></summary><br />

**O que será verificado:**

- Será verificado que, quando um elemento da lista é selecionado, o elemento selecionado previamente deixa de sê-lo. Isso é verificado através da presença ou não do estilo `background-color: gray` no elemento.

</details>

## 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completado. Deve ser possível desfazer essa ação clicando novamente duas vezes no item

<details><summary><strong>Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through". Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.</strong></summary><br />

**O que será verificado:**

- Antes da ação ser disparada, o elemento adicionado à lista não tem nem a classe `completed` nem o estilo `text-decoration: line-through solid black`;

- Mediante duplo clique no item da lista, ele passa a ter a classe `completed` e o estilo `text-decoration` com o valor `line-through solid black`;

- Será verificado que, com um segundo duplo clique, um elemento completo deixa de sê-lo.

</details>

## 10 - Adicione um botão que quando clicado deve apagar todos os itens da lista

<details><summary><strong>Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista</strong></summary><br />

**O que será verificado:**

- Será verificado que existe um elemento `button` com o id `apaga-tudo`;

- Será verificado que, dado que uma lista possui tarefas, um clique no botão a deixa vazia.

</details>

## 11 - Adicione um botão que quando clicado remove **somente** os elementos finalizados da sua lista

<details><summary><strong>Adicione um botão com id="remover-finalizados" que quando clicado remove **somente** os elementos finalizados da sua lista</strong></summary><br />

**O que será verificado:**

- Será verificado que existe um elemento `button` com o id `remover-finalizados`;

- Será verificado que, ao clicar no botão, todos os elementos marcados como feitos são removidos da lista.

</details>

# Requisitos Bônus

## 12 - Adicione um botão que salva o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava

<details><summary><strong>Adicione um botão com id="salvar-tarefas" que salva o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava</strong></summary><br />

**O que será verificado:**

- Será verificado que existe um elemento `button` com o id `salvar-tarefas`;

- Será verificado que, quando a lista tiver vários elementos, alguns dos quais marcados como finalizados, um recarregamento da página mantém a lista exatamente como está.

</details>

## 13 - Adicione dois botões, que permitam mover o item selecionado para cima ou para baixo na lista de tarefas

<details><summary><strong>Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas</strong></summary><br />

:warning: Pontos importantes sobre este requisito bônus: :warning:

- Antes de começar a desenvolver essa funcionalidade, pare e pense: </br>

O que significa mover um item de uma lista para cima ou para baixo no **_DOM_**? :thinking: </br>

:bulb: Você já possui todas as habilidades necessárias para fazer isso :smiley:.

- Habitue-se a pensar nos casos especiais ao construir programas. O que acontece se o usuário tentar mover o primeiro item para cima ou o último para baixo?

**O que será verificado:**

- Será verificada a existência de dois elementos `button`, um com o id `mover-cima` e o outro com o id `mover-baixo`;

- Será verificado que, dado que diversos elementos foram acrescentados à lista, movimentá-los de formas diversas os deixa nas posições esperadas;

- Será verificado que, caso algum elemento esteja finalizado, este status deve persistir ainda que se mova o elemento;

- Será verificado que, caso nenhum elemento esteja selecionado, clicar nos botões não altera a lista;

- Será verificado que um elemento que esteja selecionado deve se manter selecionado mesmo depois de movido;

- _Caso especial!_ Será verificado que, caso se tente subir o elemento no topo da lista ou, caso se tente descer o último elemento da lista, esta não deve ser alterada.

</details>

## 14 - Adicione um botão que, quando clicado, remove o item selecionado

<details><summary><strong>Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado</strong></summary><br />

**O que será verificado:**

- Será verificada a presença de um elemento `button` com um id `remover-selecionado`;

- Será verificado que, no clicar no botão, somente o elemento selecionado é removido.
</details>
</details>