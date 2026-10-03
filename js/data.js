const subjects = [
    {
        id: "math",
        name: "Matemática",
        icon: "📐",
        description: "Conteúdos organizados por módulos, aulas e exercícios.",

        modules: [
            {
                id: "axioms",
                title: "A Matemática e os Axiomas",
                description: "Módulo sobre os fundamentos da matemática.",

                lessons: [
                    {
                        id: "axioms-1",
                        title: "Aula 01 — As Regras do Jogo",

                        content: `
                            <h2>O que é um axioma?</h2>
                            <p>
                                É uma premissa indemonstrável, porém, necessariamente evidente e verdadeira.
                            </p>

                            <p>
                                Ninguém se pergunta porque o cavalo se move em L no xadrez, apenas sabemos que é assim, esta é uma regra que nós mesmos colocamos no jogo e, a partir daí, que nós desdobramos o conceito do jogo. Isto é um axioma.
                            </p>

                            <p>
                                Os axiomas são princípios inatos da conciência. É como se você já tivesse nascido sabendo os princípios matemáticos e para você ficar bom é preciso se aprofundar no conteúdo, assim como no xadrez.
                            </p>

                            <p>
                                Os axiomas são regras do jogo matemática. Tudo que for feito em matemática deve respeitar os axiomas. Cada área da matemática possui seus próprios axiomas.
                            </p>

                            <h2>As Noções Comuns de Euclides</h2>

                            <p>
                                Euclides era um matemático Grego, da cidade de Alexandria, que viveu por volta de 300 a.C.
                                Ele escreveu o livro <strong>"Os Elementos"</strong>, onde consta os elementos de geometria.
                            </p>

                            <p>
                                Neste livro tem um dos tratados gregos mais antigos, um tratodo sobre geometria plana. Ao enunciar os axiomas ele separa alguns, as <strong>"noções comuns"</strong> (que, como vimos, são axiomas).
                            </p>

                            <h2>Noções Comuns</h2>

                            <h3>Coisas iguais às mesmas coisas são iguais entre si.</h3>

                            <p>
                                Imagine que você tem 3 camisas a camisa A, a camisa B e a camisa C. Se a camisa A for idêntica a camisa B e a camisa B for idêntica, logo, você presume que a camisa A é idêndica a camisa C. Ou seja, se A = B e B = C, então, A = C.
                            </p>

                            <h3>Coisas iguais adicionadas a coisas iguais formam coisas iguais.</h3>

                            <p>
                                Voltando para os exemplos das camisas. Se a camisa A e a camisa B forem brancas, se você pintar as mangas da camisa A de verde, ela fica claramente diferente da camisa B, porém, se você pintar as mangas da camisa B de verde também, elas continuam sendo iguais. Ou seja, se A = B, então, A + 1 = B + 1.
                            </p>

                            <h3>Coisas iguais subtraídas de coisas iguais formam coisas iguais.</h3>

                            <p>
                                É o mesmo conceito das cores, se você tirar as mangas das duas camisas elas continuarão sendo iguais. Ou seja, se A = B, então A - 1 = B - 1.
                            </p>

                            <h2>Aplicação: Equações do primeiro grau</h2>

                            <p>
                                <strong>Exemplo #1</strong>:<br>
                                Calcule o valor de x:   4x + 3 = 11
                            </p>

                            <p>
                                Para começar você pode subtrair 3 dos dois lado:<br>
                                4x + 3 - 3 = 11 - 3<br>
                                4x = 8
                            </p>

                            <p>
                                E depois, para terminar, podemos dividir os dois lados por 4:<br>
                                4x / 4 = 8 / 4<br>
                                x = 2
                            </p>

                            <p>
                                Este é o conceito da igualdade nas equações.
                            </p>

                            <p>
                                <strong>Exemplo #2</strong>:<br>
                                Calcule o valor de x:   12x - 4 = 7x + 6
                            </p>

                            <p>
                                Podemos aplicar a igualdade nos dois lados também, adicionando 4 e subtraindo 7x:<br>
                                12x - 4 + 4 - 7x = 7x + 6 + 4 - 7x<br>
                                12x - 7x = 7x + 10 - 7x<br>
                                5x = 10
                            </p>

                            <p>
                                E para finalizar dividimos os dois lados por 5:<br>
                                5x / 5 = 10 / 5<br>
                                x = 2
                            </p>

                            <p>
                                <strong>Exemplo #3</strong>:<br>
                                Calcule o valor de x:   5x - 1 = 2 - x
                            </p>

                            <p>
                                Primeiro adicionamos 1 e 1x aos dois lados, com o intúito de manter um lado apenas com um múltiplo de x e um lado com apenas um número:<br>
                                5x - 1 + 1 + x = 2 - x + 1 + x
                                5x + x = 3 - x + x
                                6x = 3
                            </p>

                            <p>
                                E chegamos novamente na etapa final, a divisão dos dois lados pelo mesmo número:
                                6x / 6 = 3 / 6
                                x = 3 / 6
                                x = 1 / 2
                            </p>
                        `,

                        exercises: []
                    },

                    {
                        id: "axioms-2",
                        title: "Aula 02 — Axiomas",

                        content: `
                            <p>
                                Conteúdo da segunda aula.
                            </p>

                            <h2>Conceitos importantes</h2>

                            <p>
                                Escreva aqui as explicações,
                                exemplos e demonstrações.
                            </p>
                        `,

                        exercises: [
                            "Explique com suas palavras o que é um axioma.",
                            "Dê um exemplo de uma afirmação matemática."
                        ]
                    },

                    {
                        id: "axioms-3",
                        title: "Aula 03 — Aplicações",

                        content: `
                            <p>
                                Conteúdo da terceira aula.
                            </p>
                        `,

                        exercises: []
                    }
                ]
            },

            {
                id: "decimals",
                title: "Decimais e Porcentagem: Uma Linguagem Diferente",
                description: "Módulo sobre números decimais e porcentagem.",

                lessons: [
                    // Adicione as aulas aqui.
                ]
            },

            {
                id: "factorization",
                title: "Fatoração: As Regras da Multiplicação",
                description: "Módulo sobre fatoração.",

                lessons: [
                    // Adicione as aulas aqui.
                ]
            },

            {
                id: "powers",
                title: "Potenciação e Conversão de Unidades",
                description: "Módulo sobre potenciação e conversão de unidades.",

                lessons: [
                    // Adicione as aulas aqui.
                ]
            },

            {
                id: "equations",
                title: "Equações e Manipulações Algébricas",
                description: "Módulo sobre equações e manipulações algébricas.",

                lessons: [
                    // Adicione as aulas aqui.
                ]
            },

            {
                id: "geometry",
                title: "Noções Primitivas de Geometria e Trigonometria",
                description: "Módulo sobre geometria e trigonometria.",

                lessons: [
                    // Adicione as aulas aqui.
                ]
            },

            {
                id: "proportionality",
                title: "Proporcionalidade",
                description: "Módulo sobre proporcionalidade.",

                lessons: [
                    // Adicione as aulas aqui.
                ]
            },

            {
                id: "curiosities",
                title: "Curiosidades Matemáticas",
                description: "Curiosidades e informações matemáticas.",

                lessons: [
                    // Adicione as aulas aqui.
                ]
            },

            {
                id: "functions",
                title: "Introdução às Funções",
                description: "Módulo introdutório sobre funções.",

                lessons: [
                    // Adicione as aulas aqui.
                ]
            }
        ]
    },

    {
        id: "physics",
        name: "Física",
        icon: "⚛️",
        description: "Conteúdos de física.",

        modules: []
    }
];