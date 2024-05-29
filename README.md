# Trybe

Este repositório contém atividades de aprendizagem desenvolvidas por Tatiane Marinho [linkedin](https://www.linkedin.com/in/marinhotatiane/) enquanto estudava na [Trybe](https://www.betrybe.com/).

_"A Trybe é uma escola do futuro para qualquer pessoa que queira melhorar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa só paga quando conseguir um bom trabalho."_

O programa conta com mais de 1.500 horas de aulas presenciais e online, aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.<br>

<details>
  <summary><strong>O que foi desenvolvido</strong></summary><br />

Um novo sistema para organizar os livros de uma biblioteca.

Foi trabalhado com uma estrutura de dados representando uma lista de livros que contém informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.
Complementei as funções criadas no arquivo `index.js` que está dentro da pasta `src/`.

</details>

<details>
<summary><strong>Dependências</strong></summary><br />
Para instalar as dependências :  - `npm install`

</details>

<details>
  <summary><strong>Linter</strong></summary><br />
 Foi desenvolvido pela Trybe.

</details>

<details>
<summary><strong>Testes</strong></summary><br />
**Testes desenvolvidos pela Trybe**

Todos os requisitos do projeto foram testados **automaticamente** por meio do `Nvm`. 

## Observações técnicas

Alguns requisitos seguiram um padrão pré-estabelecido para que os testes automáticos funcionem corretamente. 

</details>

<details>
<summary><strong>Estrutura do projeto</strong></summary>

Na pasta raiz do exercício, temos as pastas `src`, `evaluator` e `data`.

A pasta `src` contém o arquivo `index.js` com cada uma das funções que foram implementadas. 
A pasta `data` contém o arquivo `library.js`, que armazena os dados que você vai utilizar para retornar as informações sobre a biblioteca.Desenvolvido pela Trybe.
A pasta `evaluator` possui os testes automatizados que avaliarão o seu projeto; os conteúdos desta pasta não devem ser alterados.Desenvolvido pela Trybe.

<details>
  <summary>
    O arquivo <code>library.js</code> contém um <strong>objeto</strong> no seguinte formato:
  </summary> <br />

```javascript
{
	books: [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
        name: 'Frank Herbert',
        birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
        name: 'Stephen King',
        birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
        },
        releaseYear: 1928,
    },
  ]
}
```

<details>
  <summary>
  O array <code>books</code> guarda as informações de cada livro da biblioteca
  </summary> <br />

  | Chave | Descrição |
  | ------------ | ----------|
  | `id`         | é o identificador do livro |
  | `name`       | é o nome do livro |
  | `genre`      | é o gênero do livro |
  | `releaseYear`| é o ano de lançamento do livro |
  | `author` | é um objeto que representa a pessoa autora do livro |

</details>

<details>
  <summary>
  O objeto <code>author</code> é onde ficam as informações de cada pessoa autora
  </summary> <br />

  | Chave | Descrição |
  | ----------- | ------ |
  | `name`        | é o nome dessa pessoa |
  | `birthYear` | é o ano de nascimento dessa pessoa |

</details>

</details>

<br />
</details>

# Requisitos

## 1. Filtre todos os objetos do gênero ficção científica ou fantasia.

<details>
  <summary>
  Implemente a função <code>fantasyOrScienceFiction</code> para buscar apenas os livros do gênero ficção científica ou fantasia.
  </summary> <br />

**O que será testado:**

- A função `fantasyOrScienceFiction`, caso não receba nenhum parâmetro, deve retornar o seguinte array:

```js
[
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];
```

</details>

---

## 2. Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.

<details>
  <summary>
  Implemente a função <code>oldBooksOrdered</code> que deve retornar um <code>array</code> com os livros publicados há no mínimo 60 anos, a partir de um ano recebido por parâmetro, ordenados do mais velho para o mais novo.
  </summary> <br />

**O que será testado:**

> Use como data limite o ano de 2020, sendo assim, o resultado deve conter todos os livros com mais de 60 anos até 2020.

- A função `oldBooksOrdered`, com o parâmetro `2020`, deve retornar o seguinte array:

```js
[
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];
```

</details>

---

## 3. Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.

<details>
  <summary>
  Implemente a função <code>booksByAuthorBirthYear</code> que deve retornar um <code>array</code> com os nomes dos livros escritos por pessoas autoras que nasceram no ano passado, de acordo com o que foi passado por parâmetro.
  </summary> <br />

**O que será testado:**

- A função `booksByAuthorBirthYear`, ao ser executada com o argumento `1920`, deve retornar o seguinte array:

```js
[ 'Fundação', 'Duna' ];
```

</details>

---

## 4. Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.

<details>
  <summary>
  Implemente a função <code>fantasyOrScienceFictionAuthors</code> que deve retornar um <code>array</code> com o nome das pessoas autoras de ficção científica ou fantasia, ordenadas alfabeticamente.
  </summary> <br />

**O que será testado:**

- A função `fantasyOrScienceFictionAuthors` deve retornar o seguinte array:

```js
[
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];
```

</details>

---

## 5. Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

<details>
  <summary>
  Implemente a função <code>oldBooks</code> que deve retornar um <code>array</code> com o nome dos livros com mais de 60 anos publicados, a partir de um ano recebido por parâmetro.
  </summary> <br />

**O que será testado:**

- A função `oldBooks`, com o parâmetro `2022`, deve retornar o seguinte array:

```js
[
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];
```

</details>

---

## 6. Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.

<details>
  <summary>
  Implemente a função <code>authorWith3DotsOnName</code> que deve retornar o nome do primeiro livro cuja pessoa autora inicie seu nome com três iniciais.
  </summary> <br />

> **De olho na dica 👀:** cada inicial termina com um ponto.

**O que será testado:**

- A função `authorWith3DotsOnName` deve retornar a `string` "O Senhor dos Anéis";

</details>
<br>

*Exercicíos criado pela [Trybe](https://www.betrybe.com/)
