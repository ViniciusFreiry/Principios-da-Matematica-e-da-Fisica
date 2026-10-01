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
                        title: "Aula 01 — Introdução",

                        content: `
                            <p>
                                Aqui você escreve o conteúdo da aula.
                            </p>

                            <h2>Exemplo de título</h2>

                            <p>
                                Você pode escrever quantos parágrafos
                                forem necessários.
                            </p>

                            <p>
                                Também pode utilizar <strong>negrito</strong>,
                                <em>itálico</em> e outros elementos HTML.
                            </p>
                        `,

                        exercises: [
                            "Explique com suas palavras o que é um axioma.",
                            "Dê um exemplo de uma afirmação matemática."
                        ]
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

                        exercises: []
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