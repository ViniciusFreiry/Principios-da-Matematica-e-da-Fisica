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
                                Neste livro tem um dos tratados gregos mais antigos, um tratado sobre geometria plana. Ao enunciar os axiomas ele separa alguns, as <strong>"noções comuns"</strong> (que, como vimos, são axiomas).
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
                        title: "Aula 02 — O Papiro de Rhind e a Matemática do Egito Antigo",

                        content: `
                            <h2>O Papiro</h2>

                            <p>
                                O Papiro de Ahmes (Rhind) é de 1605 a.C. e foi encontrado no Egito.
                            </p>

                            <h2>Exemplos de Problemas Matemáticos do Papiro</h2>

                            <h3><strong>#1</strong> Qual é o número que somado à sua terça parte da 8?</h3>

                            <p>
                                Para resolver esse problema eles usavam a <strong>regra da falsa posição</strong>.
                            </p>

                            <p>
                                <strong>Passo 1</strong>: chutar um resposta (vamos chutar 3)<br>
                                Teste: 3 + 3 / 3 = 3 + 1 = 4 (ou seja, está errado)
                            </p>

                            <p>
                                <strong>Passo 2</strong>: ver se a resposta chutada está muito distante<br>
                                Se a resposta não for algo muito absurda eles partiam para o próximo passo.
                            </p>

                            <p>
                                <strong>Passo 3</strong>: chutar uma resposta mais realista<br>
                                Como no nosso teste conseguimos como resposta o número 4 que, é metade do desejado, podemos chudar um número duas vezes maior também, ou seja, o 6.<br>
                                Teste: 6 + 6 / 3 = 6 + 2 = 8
                            </p>

                            <p>
                                Assim descobrimos que a resposta é, de fato, 6.
                            </p>

                            <h3>Em notação matemática atual:</h3>

                            <p>
                                x + x / 3 = 8
                            </p>

                            <p>
                                Vimos na aula passada como utilizar o princípio da igualdade, então, podemos multiplicar os dois lados por 3:<br>
                                3 * (x + x / 3) = 3 * 8<br>
                                3x + x = 24<br>
                                4x = 24
                            </p>

                            <p>
                                Mais uma vez usando o princípio da igualdade, dividimos os dois lados por 4:<br>
                                4x / 4 = 24 / 4<br>
                                x = 6
                            </p>

                            <h3><strong>#2</strong> Qual é o número que somado ao seu triplo da 24?</h3>

                            <p>
                                Resolvendo com a <strong>regra da falsa posição</strong>
                            </p>

                            <p>
                                <strong>Passo 1</strong>: chutar um resposta (vamos chutar 2 desta vez)<br>
                                Teste: 2 + 2 * 3 = 2 + 6 = 8 (ou seja, está errado novamente)
                            </p>

                            <p>
                                <strong>Passo 2</strong>: ver se a resposta chutada está muito distante<br>
                            </p>

                            <p>
                                <strong>Passo 3</strong>: chutar uma resposta mais realista<br>
                                No teste conseguimos 8 que, é 3 vezes menor que 24, podemos chutar então o número 6.<br>
                                Teste: 6 + 6 * 3 = 6 + 18 = 24
                            </p>

                            <p>
                                Chegamos mais uma vez no resultado correto.
                            </p>

                            <h3>Em notação matemática atual:</h3>

                            <p>
                                x + 3x = 24
                            </p>

                            <p>
                                Neste caso é ainda mais rápido, pois podemos juntar o x com o 3x:<br>
                                4x = 24
                            </p>

                            <p>
                                E dividindo novamente os dois lados por 4:<br>
                                4x / 4 = 24 / 4<br>
                                x = 6
                            </p>
                        `,

                        exercises: []
                    },

                    {
                        id: "axioms-3",
                        title: "Aula 03 — Frações: Uma intuição",

                        content: `
                            <h2>O que é uma fração?</h2>

                            <p>
                                Uma fração é representação de uma parte de algo.<br>
                                Por exemplo, um bolo, se você partir o bolo ao meio duas vezes, você terá 4 fatias. Cada fatia representa uma fração de 1 / 4 (um quarto) do bolo.
                            </p>

                            <h2>Frações são números da forma:</h2>

                            <p class="equation">
                                a → numerador &nbsp<br>
                                — &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                b → denominador
                            </p>

                            <p>
                                No caso do exemplo do bolo:
                            </p>

                            <p class="equation">
                                1 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                — = 0.25 = 25% do bolo<br>
                                4 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <p>
                                Se o bolo for dividio ao meio 4 vezes você terá 8 fatias, se você pegar 3 fatias terá:
                            </p>

                            <p class="equation">
                                3 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                — = 0,375 = 37,5% do bolo<br>
                                8 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>
                        `,

                        exercises: []
                    },

                    {
                        id: "axioms-4",
                        title: "Aula 04 — Frações: Soma e Subtração",

                        content: `
                            <h2>Soma/Subtração de Frações</h2>

                            <p>
                                Vamos começar com um exemplo símples. Se você tem metade de um bolo e adicionar mais uma metade de um bolo igual, o que você tem?<br>
                                Nesse cenário teremos o equivalente a <strong>um</strong> bolo inteiro.
                            </p>

                            <p class="equation">
                                1&nbsp &nbsp1 &nbsp&nbsp&nbsp<br>
                                — + — = 1<br>
                                2&nbsp &nbsp2 &nbsp&nbsp&nbsp
                            </p>

                            <h2 style='color: #FF0000'>Alerta:</h2>

                            <p style='color: #FF0000' class="equation">
                                a &nbsp&nbspc &nbsp&nbspa + c<br>
                                — + — ≠ —————<br>
                                b &nbsp&nbspd &nbsp&nbspb + d
                            </p>

                            <h2>Como fazer a soma de frações?</h2>

                            <p>
                                Colocando ambas as bases na mesma <strong>base</strong> (denominador)<br>
                                Vamos usar esse exemplo:
                            </p>

                            <p class="equation">
                                1&nbsp &nbsp1<br>
                                — + —<br>
                                2&nbsp &nbsp3
                            </p>

                            <p>
                                Não podemos somar as duas frações diretamente, pois elas tem bases diferentes. Precisamos encontrar uma base que mantenhas as proporções. Neste exemplo simples conseguimos usar a base 6.<br>
                                Teremos a primeira fração assim:
                            </p>

                            <p class="equation">
                                1&nbsp &nbsp3<br>
                                — = —<br>
                                2&nbsp &nbsp6
                            </p>

                            <p>
                                Perceba que 3 / 6 continua sendo a mesma coisa que 1 / 2.<br>
                                Agora a segunda fração ficará assim:
                            </p>

                            <p class="equation">
                                1&nbsp &nbsp2<br>
                                — = —<br>
                                3&nbsp &nbsp6
                            </p>

                            <p>
                                Nessa situação o 1 / 3 também continua sendo igual a 2 / 6.<br>
                                Depois das bases estarem igualadas, basta somar o topo das frações:
                            </p>

                            <p class="equation result">
                                3&nbsp &nbsp2 &nbsp&nbsp3 + 2 &nbsp&nbsp5<br>
                                — + — = ————— = —<br>
                                6&nbsp &nbsp6 &nbsp&nbsp&nbsp&nbsp6 &nbsp&nbsp&nbsp&nbsp6
                            </p>

                            <p>
                                Podemos usar o princípio da igualdade nas frações.
                            </p>

                            <h2>Principio: a * 1 = a</h2>

                            <p>
                                Ou seja:
                            </p>

                            <p class="equation">
                                &nbsp&nbsp&nbsp&nbsp5 &nbsp&nbsp&nbsp<br>
                                a * — = a<br>
                                &nbsp&nbsp&nbsp&nbsp5 &nbsp&nbsp&nbsp
                            </p>

                            <p>
                                Então podemos multiplicar as frações por frações inteiras da outra base que queremos somar:
                            </p>

                            <p class="equation">
                                1 &nbsp&nbsp1 &nbsp&nbsp1 &nbsp&nbsp<span style="color: #FFFF00;">3</span> &nbsp&nbsp1 &nbsp&nbsp<span style="color: #00FF00;">2</span> &nbsp&nbsp3 &nbsp&nbsp2<br>
                                — + — = — * <span style="color: #FFFF00;">—</span> + — * <span style="color: #00FF00;">—</span> = — + —<br>
                                2 &nbsp&nbsp3 &nbsp&nbsp<span style="color: #00FF00;">2</span> &nbsp&nbsp<span style="color: #FFFF00;">3</span> &nbsp&nbsp<span style="color: #FFFF00;">3</span> &nbsp&nbsp<span style="color: #00FF00;">2</span> &nbsp&nbsp6 &nbsp&nbsp6
                            </p>

                            <h2>Exemplo #01</h2>

                            <p class="equation">
                                3 &nbsp&nbsp7 &nbsp&nbsp3 &nbsp&nbsp<span style="color: #FFFF00;">2</span> &nbsp&nbsp7 &nbsp&nbsp<span style="color: #00FF00;">5</span> &nbsp&nbsp&nbsp6 &nbsp&nbsp35 &nbsp&nbsp41<br>
                                — + — = — * <span style="color: #FFFF00;">—</span> + — * <span style="color: #00FF00;">—</span> = —— + —— = ——<br>
                                5 &nbsp&nbsp2 &nbsp&nbsp<span style="color: #00FF00;">5</span> &nbsp&nbsp<span style="color: #FFFF00;">2</span> &nbsp&nbsp<span style="color: #FFFF00;">2</span> &nbsp&nbsp<span style="color: #00FF00;">5</span> &nbsp&nbsp10 &nbsp&nbsp10 &nbsp&nbsp10
                            </p>

                            <h2>Exemplo #02</h2>

                            <p class="equation">
                                1 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1 &nbsp&nbsp<span style="color: #0000FF;">2</span> &nbsp&nbsp2 &nbsp&nbsp<span style="color: #FF00FF;">14</span> &nbsp&nbsp1 &nbsp&nbsp<span style="color: #FF0000;">7</span> &nbsp&nbsp2 + 28 + 7 &nbsp&nbsp37<br>
                                — + 2 + 0,5 = — * <span style="color: #0000FF;">—</span> + — * <span style="color: #FF00FF;">——</span> + — * <span style="color: #FF0000;">—</span> = —————————— = ——<br>
                                7 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span style="color: #FF0000;">7</span> &nbsp&nbsp<span style="color: #0000FF;">2</span> &nbsp&nbsp1 &nbsp&nbsp<span style="color: #FF00FF;">14</span> &nbsp&nbsp<span style="color: #0000FF;">2</span> &nbsp&nbsp<span style="color: #FF0000;">7</span> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp14 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp14
                            </p>

                            <p>
                                Nesta situação, o que fizemos foi transformar o 2 em uma fração de 2 / 1 e o nosso 0,5 em uma fração de 1 / 2.<br>
                                Como a base de 2 / 1 não modifica o número, podemo só multiplicar as outras entre si e, depois, multiplicar o 2 / 1 pela fração do resultado, neste caso: <strong>7 * 2 = 14</strong>
                            </p>

                            <h2>Exemplo #03</h2>

                            <p>
                                Agora faremos com uma subtração, que utiliza exatamente o mesmo conseito de igualar as bases.
                            </p>

                            <p class="equation">
                                4 &nbsp&nbsp1 &nbsp&nbsp4 &nbsp&nbsp<span style="color: #FFFF00;">3</span> &nbsp&nbsp1 &nbsp&nbsp<span style="color: #00FF00;">5</span> &nbsp&nbsp12 - 5 &nbsp&nbsp&nbsp7<br>
                                — - — = — * <span style="color: #FFFF00;">—</span> - — * <span style="color: #00FF00;">—</span> = —————— = ——<br>
                                5 &nbsp&nbsp3 &nbsp&nbsp<span style="color: #00FF00;">5</span> &nbsp&nbsp<span style="color: #FFFF00;">3</span> &nbsp&nbsp<span style="color: #FFFF00;">3</span> &nbsp&nbsp<span style="color: #00FF00;">5</span> &nbsp&nbsp&nbsp&nbsp15 &nbsp&nbsp&nbsp&nbsp15
                            </p>

                            <p>
                                Vimos então que o conceito do "<strong>a * 1 = a</strong>" é muito útil, pois podemos escrever <strong>1</strong> da forma que nos beneficiar mais.
                            </p>
                        `,

                        exercises: []
                    },

                    {
                        id: "axioms-5",
                        title: "Aula 05 — Alerta",
                        
                        content: `
                            <h2 style="color: #FF0000">Alerta:</h2>

                            <p style="color: #FF0000" class="equation">
                                &nbsp&nbsp&nbsp&nbspx &nbsp&nbsp&nbsp<br>
                                x + — = 3<br>
                                &nbsp&nbsp&nbsp&nbsp2 &nbsp&nbsp&nbsp
                            </p>

                            <h2>Caminho 1:</h2>

                            <p>
                                Como temos uma base de número 2 podemos usar o princípio de igualdade e multiplicar os dois lados da equação por 2.
                            </p>

                            <p class="equation">
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2 * x &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                2 * x + ————— = 2 * 3 &nbsp→ &nbsp2x + x = 6<br>
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <h2>Caminho 2:</h2>

                            <p>
                                Podemos usar o principio da igualdade nas frações e multiplicar o x por 1, porem, 1 na forma de 2 / 2.
                            </p>

                            <p class="equation">
                                &nbsp&nbsp&nbsp&nbsp2 &nbsp&nbspx &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3x &nbsp&nbsp&nbsp<br>
                                x * — + — = 3 &nbsp→ &nbsp—— = 3<br>
                                &nbsp&nbsp&nbsp&nbsp2 &nbsp&nbsp2 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2 &nbsp&nbsp&nbsp&nbsp
                            </p>

                            <h2>Conclusão</h2>

                            <p>
                                Podemos usar qualquer um dos métodos para resolver uma equação, foque em utilizar o que for mais simples para você.
                            </p>
                        `,

                        exercises: []
                    },

                    {
                        id: "axioms-6",
                        title: "Aula 06 — Frações: Multiplicação e Divisão",
                        
                        content: `
                            <h2>Multiplicação/Divisão de frasões</h2>

                            <p>
                                Exemplo:
                            </p>

                            <p style="color: #00FF00" class="equation">
                                8 &nbsp&nbsp15<br>
                                — * ——<br>
                                2 &nbsp&nbsp&nbsp5
                            </p>

                            <p>
                                Podemos fazer simplificando as frações, 8 / 2 é igual a 4 e 15 / 5 é igual a 3:
                            </p>

                            <p class="equation">
                                8 &nbsp&nbsp15 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                — * —— = 4 * 3 = 12<br>
                                2 &nbsp&nbsp&nbsp5 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <p>
                                Podemos também multiplicar as frações como já aviamos feito antes, multiplicamos as duas partes de cima entre si e as partes da base entre si:
                            </p>

                            <p class="equation">
                                8 * 15 &nbsp&nbsp120 &nbsp&nbsp&nbsp&nbsp<br>
                                —————— = ——— = 12<br>
                                &nbsp2 * 5 &nbsp&nbsp&nbsp10 &nbsp&nbsp&nbsp&nbsp
                            </p>

                            <h2>A regra das Multiplicações:</h2>

                            <p class="equation">
                                a &nbsp&nbspc &nbsp&nbspa * c<br>
                                — * — = —————<br>
                                b &nbsp&nbspd &nbsp&nbspb * d
                            </p>

                            <p>
                                O motivo disso é que por que uma fração é uma divisão.<br>
                                <strong style="color: #00FF00">Divisões</strong> e <strong style="color: #00FF00">Multiplicações</strong> são operações inversas, então não importa a ordem que são feitas, por exemplo:
                            </p>

                            <p class="equation">
                                8 / 2 * 15 / 5 = 4 * 15 / 5 = 60 / 5 = 12<br>
                                <br>
                                ou<br>
                                <br>
                                8 * 15 / 2 / 5 = 120 / 2 / 5 = 60 / 5 = 12
                            </p>

                            <p>
                                Operações de <strong style="color: #00FF00">Adição</strong> e <strong style="color: #00FF00">Subtração</strong> também são inversas, então também não importa a ordem em que são calculadas. Por exemplo:
                            </p>

                            <p class="equation">
                                4 + 6 - 2 = 10 - 2 = 8<br>
                                <br>
                                ou<br>
                                <br>
                                4 - 2 + 6 = 2 + 6 = 8
                            </p>

                            <h2>A regra das Divisões:</h2>

                            <p class="equation">
                                &nbspa &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                &nbsp— &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                &nbspb &nbsp&nbsp&nbspa &nbsp&nbspc &nbsp&nbspa &nbsp&nbspd<br>
                                ——— = — / — = — * —<br>
                                &nbspc &nbsp&nbsp&nbspb &nbsp&nbspd &nbsp&nbspb &nbsp&nbspc<br>
                                &nbsp— &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                &nbspd &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <p>
                                Prova:
                            </p>

                            <p class="equation">
                                &nbsp3 &nbsp&nbsp&nbsp&nbsp&nbsp3 &nbsp&nbsp11 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                &nbsp— &nbsp&nbsp&nbsp&nbsp&nbsp— * —— &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                &nbsp7 &nbsp&nbsp&nbsp&nbsp&nbsp7 &nbsp&nbsp5 &nbsp&nbsp&nbsp&nbsp&nbsp3 &nbsp&nbsp11<br>
                                ———— = ————————— = — * ——<br>
                                &nbsp5 &nbsp&nbsp&nbsp&nbsp&nbsp5 &nbsp&nbsp&nbsp11 &nbsp&nbsp&nbsp7 &nbsp&nbsp5&nbsp<br>
                                &nbsp—— &nbsp&nbsp&nbsp&nbsp—— * —— &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                &nbsp11 &nbsp&nbsp&nbsp&nbsp11 &nbsp&nbsp5 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <p>
                                No exemplo a cima usamos o princípio da igualdade nas fração, multiplicamos o topo e a base por 11 / 5, como 11 / 5 dividido por 11 / 5 é 1, a expressão continua igual. Porém 5 / 11 vezes 11 / 5, também é 1, então a parte de baixo da equação é simplificada, todo número dividido por 1 é igual a ele mesmo, restando assim só a multiplicação do topo pela base inversa.
                            </p>
                        `,

                        exercises: []
                    },

                    {
                        id: "axioms-7",
                        title: "Aula 07 — Multiplicar Cruzado",
                        
                        content: `
                            <h2>Observação:</h2>

                            <p>
                                Multiplicar uma equação "cruzado":
                            </p>

                            <p class="equation">
                                x &nbsp&nbsp3 &nbsp&nbsp&nbsp&nbsp&nbsp&nbspx &nbsp&nbsp3 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                — = — &nbsp&nbsp→ &nbsp&nbsp— ⤨ — &nbsp&nbsp→ &nbsp&nbsp2x = 12<br>
                                4 &nbsp&nbsp2 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp4 &nbsp&nbsp2 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                            </p>

                            <p>
                                Mas multiplicar cruzado não é uma das regras do jogo da matemática, e sim a consequência.<br>
                                Uma das regras é que tudo que fazemos da mesma forma dos dois lados da equação não altera o seu resultado, ou seja, podemos multiplicar ambos os lados por 4:
                            </p>

                            <p class="equation result">
                                x * 4 &nbsp&nbsp3 * 4 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp12<br>
                                ————— = ————— &nbsp&nbsp→ &nbsp&nbspx = ——<br>
                                &nbsp&nbsp4 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2
                            </p>

                            <p>
                                Como podemos ver, o resultado é exatamente o mesmo, ou seja, uma forma que resolver esses tipos de equações pode ser multiplicando as bases das frações pelos dois lado, dando assim o mesmo resultado que a multiplicação cruzada.<br>
                                Perceba que se multiplicarmos ambos os lados do resultado por 2, teremos o mesmo resultado da multiplicação cruzada:
                            </p>

                            <p class="equation result">
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp12 * 2 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                x * 2 = —————— &nbsp&nbsp→ &nbsp&nbsp2x = 12<br>
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>
                        `,

                        exercises: []
                    },

                    {
                        id: "axioms-8",
                        title: "Aula 08 — Aplicação Questão do ENEM",
                        
                        content: `
                            <h2 style="color: #FF0000">ENEM 2026: Questão 150</h2>

                            <p>
                                O técnico de um time de voleibol registra o número de jogadas e de acertos, por atleta, em cada fundamento, para verificar os desempenhos dos jogadores. Para que o time tenha um melhor aproveitamento no fundamento bloqueio, ele decide substituir um dos jogadores em quadra por um dos que estão no banco de reservas. O critério a ser adotado é o de escolher o atleta que, no fundamento bloqueio, tenha apresentado o maior número de acertos em relação ao número de jogadas de que tenha participado. Os registros dos cinco atletas que se encontram no banco de reservas, nesse fundamento, estão apresentados no quadro.
                            </p>

                            <div class="table-container">
                                <table class="study-table">
                                    <thead>
                                        <tr>
                                            <th rowspan="2">Atleta</th>
                                            <th colspan="2">Participação em bloqueios</th>
                                        </tr>
                                        <tr>
                                            <th>Número de acertos</th>
                                            <th>Número de jogadas</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>I</td>
                                            <td>20</td>
                                            <td>30</td>
                                        </tr>
                                        <tr>
                                            <td>II</td>
                                            <td>10</td>
                                            <td>34</td>
                                        </tr>
                                        <tr>
                                            <td>III</td>
                                            <td>19</td>
                                            <td>32</td>
                                        </tr>
                                        <tr>
                                            <td>IV</td>
                                            <td>3</td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td>V</td>
                                            <td>8</td>
                                            <td>10</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                Qual dos atletas do banco de reservas o treinador deve colocar em quadra?<br>
                                a) I<br>
                                b) II<br>
                                c) III<br>
                                d) IV<br>
                                e) V
                            </p>

                            <h2 style="color: #00FF00">Resolução:</h2>

                            <p>
                                Vamos começar analizando os atletas:
                            </p>

                            <h2>
                                Atleta 1:
                            </h2>

                            <p class="equation">
                                20<br>
                                ——<br>
                                30
                            </p>

                            <h2>
                                Atleta 2:
                            </h2>

                            <p class="equation">
                                10<br>
                                ——<br>
                                34
                            </p>

                            <p>
                                Ele jogou mais que o Atleta 1 e fez menos bloqueios, então descartamos.
                            </p>

                            <h2>
                                Atleta 3:
                            </h2>

                            <p class="equation">
                                19<br>
                                ——<br>
                                32
                            </p>

                            <p>
                                Também jogou mais que o Atleta 1 e fez menos bloqueios, então descartamos.
                            </p>

                            <h2>
                                Atleta 4:
                            </h2>

                            <p class="equation">
                                3<br>
                                —<br>
                                4
                            </p>

                            <p>
                                Vamos usar o princípio da igualdade para ver se ele é melhor que o primeiro.<br>
                                Primeiro o atleta 1:
                            </p>

                            <p class="equation">
                                20 &nbsp&nbsp4 &nbsp&nbsp&nbsp80<br>
                                —— * — = ———<br>
                                30 &nbsp&nbsp4 &nbsp&nbsp120
                            </p>

                            <p>
                                E agora o atleta 4:
                            </p>

                            <p class="equation">
                                3 &nbsp&nbsp30 &nbsp&nbsp&nbsp90<br>
                                — * —— = ———<br>
                                4 &nbsp&nbsp30 &nbsp&nbsp120<br>
                            </p>

                            <p>
                                Vimos que o atleta 4 tem mais aproveitamento que o atleta 1, logo, descartamos o atleta 1.
                            </p>

                            <h2>
                                Atleta 5:
                            </h2>

                            <p class="equation">
                                8 <br>
                                ——<br>
                                10
                            </p>

                            <p>
                                Agora precisamos comparar da mesma forma os atletas 4 e 5.<br>
                                O atleta 4:
                            </p>

                            <p class="equation">
                                3 &nbsp&nbsp10 &nbsp&nbsp30<br>
                                — * —— = ——<br>
                                4 &nbsp&nbsp10 &nbsp&nbsp40
                            </p>

                            <p>
                                O atleta 5:
                            </p>

                            <p class="equation">
                                8 &nbsp&nbsp&nbsp4 &nbsp&nbsp32<br>
                                —— * — = ——<br>
                                10 &nbsp&nbsp4 &nbsp&nbsp40<br>
                            </p>

                            <p>
                                Assim vimos que o atleta 5 é o que tem o melhor aproveitamento em bloqueios.
                            </p>

                            <h2 style="color: #0000FF">Resposta:</h2>

                            <p>
                                O atleta 5 tem o maior aproveitamento.<br>
                                A opçãos correta é a alternativa "e) V".
                            </p>
                        `,

                        exercises: []
                    },

                    {
                        id: "axioms-9",
                        title: "Aula 09 — Aprofundamento: O problema das torneiras",
                        
                        content: `
                            <h2>O problema das torneiras</h2>

                            <h3>Exemplo #01:</h3>

                            <p>
                                Torneira A: Leva 6 horas para encher o tanque<br>
                                Torneira B: Leva 8 horas para encher o tanque<br>
                                Quanto tempo leva com as duas ligadas?
                            </p>

                            <p>
                                Para começar, vamos supor um valor em litros para o tanque, já que o exercício não nos da um valor específico.<br>
                                O ideal é usar um valor que facilite as contas, um valor que seja divisível, tanto por 6, quanto por 8. A multiplicação dos dois é 48, mas como ambos são multiplos de 2, podemos usar a metade disso, ou seja, 24.<br>
                            </p>

                            <p>
                                Depois que estipulamos um valor vamos calcular o quanto cada torneira enche por hora.
                                A Torneira A enche 24 litros em 6 horas:
                            </p>

                            <p class="equation">
                                24 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                —— = 4 L/h<br>
                                6 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <p>
                                A Torneira B enche 24 litros em 8 horas:
                            </p>

                            <p class="equation">
                                24 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                —— = 3 L/h<br>
                                8 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <p>
                                Com isso descobrimos a vazão das duas torneiras, então sabemos que a vazão das duas juntas é 3 + 4, ou seja, 7 L/h. A partir disso podemos usar a proporção:
                            </p>

                            <p class="equation">
                                7L &nbsp&nbsp14L &nbsp&nbsp21L &nbsp&nbsp24L<br>
                                —— = ——— = ——— = ———<br>
                                1h &nbsp&nbsp&nbsp2h &nbsp&nbsp&nbsp3h &nbsp&nbsp&nbspxh
                            </p>

                            <p>
                                Agora usamos as regras do jogo para determinar o quanto x vale:
                            </p>

                            <p class="equation">
                                7 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp24 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp7x &nbsp&nbsp24 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                — * x = —— * x &nbsp&nbsp→ &nbsp&nbsp7x = 24 &nbsp&nbsp→ &nbsp&nbsp—— = —— &nbsp&nbsp→ &nbsp&nbspx ≃ 3,4h<br>
                                1 &nbsp&nbsp&nbsp&nbsp&nbsp&nbspx &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp7 &nbsp&nbsp&nbsp7 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
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
                    {
                        id: "decimals-1",
                        title: "Aula 01 — Decimais Soma e Subtração",
                        
                        content: `
                            
                        `,

                        exercises: [
                            "",
                            ""
                        ]
                    }
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