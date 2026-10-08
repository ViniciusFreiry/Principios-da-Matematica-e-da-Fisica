# Princípios da Matemática e da Física

Um site pessoal de estudos desenvolvido para organizar conteúdos de **Matemática** e **Física** em módulos, aulas e exercícios.

## 🌐 Acesse o projeto

**Vercel:**  
https://principios-da-matematica-e-da-fisic.vercel.app/

---

## 📚 Sobre o projeto

O **Princípios da Matemática e da Física** nasceu da ideia de criar um espaço próprio para organizar meus estudos.

A proposta é centralizar os conteúdos em uma estrutura organizada:

```text
Matéria
└── Módulo
    └── Aula
        ├── Conteúdo
        ├── Exercícios
        └── Anotações pessoais
```

Atualmente, o projeto possui a estrutura inicial de **Matemática**, enquanto **Física** está preparada para ser adicionada posteriormente.

---

## ✨ Funcionalidades

- 📚 Organização por matérias
- 📦 Organização dos conteúdos em módulos
- 📝 Aulas com conteúdo personalizado
- 🧠 Exercícios associados às aulas
- ✅ Marcação de aulas concluídas
- 📊 Acompanhamento do progresso
- 📝 Anotações pessoais para cada aula
- 💾 Salvamento do progresso no `localStorage`
- 💾 Salvamento das anotações no `localStorage`
- 🌙 Interface com suporte a tema claro e escuro
- 📱 Layout responsivo
- ⚡ Aplicação desenvolvida sem frameworks

---

## 🗂️ Estrutura dos conteúdos

A Matemática está organizada inicialmente nos seguintes módulos:

1. **A Matemática e os Axiomas**
2. **Decimais e Porcentagem: Uma Linguagem Diferente**
3. **Fatoração: As Regras da Multiplicação**
4. **Potenciação e Conversão de Unidades**
5. **Equações e Manipulações Algébricas**
6. **Noções Primitivas de Geometria e Trigonometria**
7. **Proporcionalidade**
8. **Curiosidades Matemáticas**
9. **Introdução às Funções**

---

## 🛠️ Tecnologias

- **HTML5**
- **CSS3**
- **JavaScript**
- **LocalStorage**
- **Vercel**

Não são utilizados frameworks ou bibliotecas externas para a aplicação principal.

---

## 📁 Estrutura do projeto

```text
Princípios-da-Matemática-e-da-Física/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── data.js
│   ├── storage.js
│   ├── components.js
│   ├── pages.js
│   └── app.js
│
└── README.md
```

### `index.html`

Arquivo principal da aplicação, responsável pela estrutura inicial da página e pelo carregamento dos arquivos CSS e JavaScript.

### `css/style.css`

Contém os estilos da aplicação, incluindo layout, cores, tipografia, cards, módulos, aulas, barra de progresso, exercícios, responsividade e temas.

### `js/data.js`

Contém os dados das matérias, módulos e aulas. Os conteúdos de estudo são cadastrados diretamente neste arquivo.

### `js/storage.js`

Responsável pelo armazenamento do progresso e das anotações pessoais utilizando o `localStorage`.

### `js/components.js`

Contém componentes e funções reutilizáveis da interface.

### `js/pages.js`

Responsável pela geração das páginas da aplicação, como a página inicial, páginas de matérias e páginas de aulas.

### `js/app.js`

Responsável pelo funcionamento geral da aplicação e pela navegação entre as páginas.

---

## 🧩 Arquitetura

A estrutura dos conteúdos foi pensada de forma hierárquica:

```text
Subjects
│
├── Mathematics
│   │
│   ├── Module
│   │   ├── Lesson
│   │   ├── Lesson
│   │   └── Lesson
│   │
│   ├── Module
│   │   └── Lessons
│   │
│   └── ...
│
└── Physics
    │
    ├── Module
    │   └── Lessons
    │
    └── ...
```

Essa abordagem permite adicionar novas matérias e módulos sem precisar modificar a arquitetura principal da aplicação.

---

## 💾 Persistência de dados

O projeto utiliza o `localStorage` do navegador para armazenar informações específicas do usuário.

Atualmente são armazenados:

```text
study-progress-v1
study-notes-v1
```

O progresso e as anotações permanecem disponíveis quando o usuário fecha e abre o navegador novamente.

Os conteúdos das aulas fazem parte do próprio projeto e são versionados junto com o código.

---

## 🚀 Como executar localmente

Clone o repositório:

```bash
git clone https://github.com/ViniciusFreiry/SEU-REPOSITORIO.git
```

Entre na pasta:

```bash
cd SEU-REPOSITORIO
```

Como o projeto utiliza apenas HTML, CSS e JavaScript, não é necessário instalar dependências.

Basta abrir o arquivo:

```text
index.html
```

no navegador.

Para uma experiência de desenvolvimento mais conveniente, também é possível utilizar uma extensão como **Live Server**.

---

## ✏️ Adicionando uma nova aula

As aulas são adicionadas diretamente no arquivo:

```text
js/data.js
```

Exemplo:

```javascript
{
    id: "functions-1",

    title: "Aula 01 — Introdução às Funções",

    content: `
        <h2>O que é uma função?</h2>

        <p>
            Uma função relaciona elementos de dois conjuntos
            de acordo com uma determinada regra.
        </p>

        <h2>Exemplo</h2>

        <p>
            Considere:
        </p>

        <p>
            <strong>f(x) = 2x + 1</strong>
        </p>
    `,

    exercises: [
        "Calcule f(2).",
        "Calcule f(5)."
    ]
}
```

Dessa forma, o conteúdo pode ser versionado junto com o restante do projeto através do Git.

---

## 🗺️ Roadmap

- [ ] Adicionar mais aulas de Matemática
- [ ] Adicionar exercícios interativos
- [ ] Adicionar a disciplina de Física
- [ ] Adicionar outras disciplinas
- [ ] Melhorar a navegação entre módulos
- [ ] Criar diferentes tipos de exercícios
- [ ] Adicionar respostas e explicações aos exercícios
- [ ] Adicionar fórmulas matemáticas com melhor renderização
- [ ] Melhorar o sistema de progresso
- [ ] Adicionar estatísticas de estudo
- [ ] Melhorar a experiência em dispositivos móveis

---

## 📌 Status

🚧 **Em desenvolvimento**

O projeto está sendo desenvolvido gradualmente conforme novos conteúdos de estudo são produzidos e organizados.

---

## 👨‍💻 Autor

**Vinícius Freiry**

Estudante de Ciência da Computação e desenvolvedor do projeto.

---

## 📄 Licença

Este projeto ainda não possui uma licença definida.
