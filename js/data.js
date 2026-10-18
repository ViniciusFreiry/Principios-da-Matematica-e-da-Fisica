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
                        title: "Aula 01 — Decimais: Soma e Subtração",
                        
                        content: `
                            <h2>Números Decimais</h2>

                            <h3>Soma/Subtração</h3>

                            <p>
                                É sempre possível interpretar com uma soma de frações.
                            </p>

                            <h3>Exemplo #01:</h3>

                            <p>
                                Você pode separar a vírgula do número inteiro:
                            </p>

                            <p class="equation">
                                4,5 + 2,5 = 4 + 2 + 0,5 + 0,5 = 6 + 1 = 7
                            </p>

                            <p>
                                Você também pode utilizar o princípio da igualdade de frações para tirar a vírgula:
                            </p>

                            <p class="equation">
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp10 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp10 &nbsp&nbsp45 &nbsp&nbsp25 &nbsp&nbsp70 &nbsp&nbsp&nbsp<br>
                                4,5 * —— + 2,5 * —— = —— + —— = —— = 7<br>
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp10 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp10 &nbsp&nbsp10 &nbsp&nbsp10 &nbsp&nbsp10 &nbsp&nbsp&nbsp
                            </p>

                            <h3>Exemplo #02:</h3>

                            <p class="equation">
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp100 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp100 &nbsp&nbsp451 - 212 &nbsp&nbsp239 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                4,51 - 2,12 = 4,51 * ——— - 2,12 * ——— = ————————— = ——— = 2,39<br>
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp100 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp100 &nbsp&nbsp&nbsp&nbsp&nbsp100 &nbsp&nbsp&nbsp&nbsp&nbsp100 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <h3>Exemplo #03:</h3>

                            <p class="equation">
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp100 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp100 &nbsp&nbsp738 + 110 &nbsp&nbsp848 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                7,38 + 1,1 = 7,38 * ——— + 1,1 * ——— = ————————— = ——— = 8,48<br>
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp100 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp100 &nbsp&nbsp&nbsp&nbsp&nbsp100 &nbsp&nbsp&nbsp&nbsp&nbsp100 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>
                        `,

                        exercises: []
                    },

                    {
                        id: "decimals-2",
                        title: "Aula 02 — Decimais: Multiplicação e Divisão",
                        
                        content: `
                            <h2>Números Decimais</h2>

                            <h3>Multiplicação/Divisão</h3>

                            <p>
                                Se interpretarmos como frações é basicamente multiplicar e dividir frações.
                            </p>

                            <h3>Exemplo #01:</h3>

                            <p class="equation">
                                15,2<br>
                                ————<br>
                                &nbsp&nbsp5&nbsp
                            </p>

                            <p>
                                Caminho 1:
                            </p>

                            <p class="equation">
                                15 + 0,2 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,2 &nbsp&nbsp<strong style="color: #00FF00">2</strong> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,4 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                ———————— = 3 + ——— * <strong style="color: #00FF00">—</strong> = 3 + ——— = 3 + 0,04 = 3,04<br>
                                &nbsp&nbsp&nbsp&nbsp5 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp5 &nbsp&nbsp&nbsp<strong style="color: #00FF00">2</strong> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp10 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <p>
                                Caminho 2:
                            </p>

                            <p class="equation">
                                15,2 &nbsp&nbsp<strong style="color: #00FF00">2</strong> &nbsp&nbsp30,4 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                ———— * <strong style="color: #00FF00">—</strong> = ———— = 3,04<br>
                                &nbsp&nbsp5 &nbsp&nbsp&nbsp<strong style="color: #00FF00">2</strong> &nbsp&nbsp&nbsp10 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <p>
                                Como podemos ver, podemos usar as "regras do jogo" que aprendemos para manipular qualquer conta, do melhor jeito possível que facilite para nós.
                            </p>

                            <h3>Exemplo #02:</h3>

                            <p class="equation">
                                2,08<br>
                                ————<br>
                                &nbsp0,4
                            </p>

                            <p>
                                Caminho 1:
                            </p>

                            <p class="equation">
                                2,08 &nbsp&nbsp100 &nbsp&nbsp208 &nbsp&nbsp200 + 8 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp8 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                ———— * ——— = ——— = ——————— = 5 + —————— = 5 + 0,2 = 5,2<br>
                                &nbsp0,4 &nbsp&nbsp100 &nbsp&nbsp&nbsp40 &nbsp&nbsp&nbsp&nbsp&nbsp40 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp4 * 10 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <p>
                                Caminho 2:
                            </p>

                            <p class="equation">
                                2,08 &nbsp&nbsp5 &nbsp&nbsp10,4 &nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                ———— * — = ———— = 5,2<br>
                                &nbsp0,4 &nbsp&nbsp5 &nbsp&nbsp&nbsp&nbsp2 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <h3>Exemplo #03:</h3>

                            <p class="equation">
                                4,13 * 0,2
                            </p>

                            <p class="equation">
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong style="color: #00FF00">100</strong> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong style="color: #00FF00">10</strong> &nbsp&nbsp413 &nbsp&nbsp2 &nbsp&nbsp&nbsp826 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                4,13 * <strong style="color: #00FF00">———</strong> * 0,2 * <strong style="color: #00FF00">——</strong> = ——— * —— = ———— = 0,826<br>
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong style="color: #00FF00">100</strong> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong style="color: #00FF00">10</strong> &nbsp&nbsp100 &nbsp&nbsp10 &nbsp&nbsp1000 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <h3>Exemplo #04:</h3>

                            <p class="equation">
                                18,06<br>
                                —————<br>
                                &nbsp0,03
                            </p>

                            <p class="equation">
                                18,06 &nbsp&nbsp<strong style="color: #00FF00">100</strong> &nbsp&nbsp1806 &nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                ————— * <strong style="color: #00FF00">———</strong> = ———— = 602<br>
                                &nbsp0,03 &nbsp&nbsp<strong style="color: #00FF00">100</strong> &nbsp&nbsp&nbsp&nbsp3 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <h3>Exemplo #05:</h3>

                            <p class="equation">
                                22,5 &nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                ———— * 1,4<br>
                                0,15 &nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <p class="equation">
                                &nbsp225 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                &nbsp——— &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                &nbsp&nbsp15 &nbsp&nbsp&nbsp14 &nbsp&nbsp225 &nbsp&nbsp100 &nbsp&nbsp14 &nbsp&nbsp225 * 14 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                ————— * —— = ——— * ——— * —— = ———————— = 15 * 14 = 210<br>
                                &nbsp15 &nbsp&nbsp&nbsp&nbsp10 &nbsp&nbsp&nbsp10 &nbsp&nbsp&nbsp15 &nbsp&nbsp10 &nbsp&nbsp&nbsp&nbsp&nbsp15 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                &nbsp——— &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                &nbsp100 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                            </p>
                        `,

                        exercises: []
                    },

                    {
                        id: "decimals-3",
                        title: "Aula 03 — Porcentagem",
                        
                        content: `
                            <h2>Porcentagem</h2>

                            <p>
                                Apenas um linguagem diferente!
                            </p>

                            <p class="equation">
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp20 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                20% = ——— = 0,2<br>
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp100 &nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <h3>Exemplo:</h3>

                            <p>
                                <b>Fábrica A:</b> 83 relógios com defeito a cada 415 relógios feitos.<br>
                                <b>Fábrica B:</b> 105 relógios com defeito a cada 625 relógios feitos.
                            </p>

                            <p class="equation">
                                <strong style="color: #00FF00">Fábrica A</strong><br>
                                <br>
                                83 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp20 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                ——— = 0,2 = ——— = 20%<br>
                                415 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp100 &nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <p class="equation">
                                <strong style="color: #00FF00">Fábrica B</strong><br>
                                <br>
                                105 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp16,8 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                ——— = 0,168 = ———— = 16,8%<br>
                                625 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp100 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <p>
                                Desta forma vimos que a Fábrica B tem uma melhor produção, pois tem uma porcentagem menor de falhas.<br>
                                Usamos a porcentagem como uma análise de fração em base de 100.
                            </p>

                            <h3>Exemplo #01:</h3>

                            <p>
                                Metade de 24:
                            </p>

                            <p>
                                Método 1:
                            </p>

                            <p class="equation">
                                &nbsp&nbsp&nbsp&nbsp&nbsp1 &nbsp&nbsp&nbsp&nbsp<br>
                                24 * — = 24<br>
                                &nbsp&nbsp&nbsp&nbsp&nbsp2 &nbsp&nbsp&nbsp&nbsp
                            </p>

                            <p>
                                Método 2:
                            </p>

                            <p class="equation">
                                24 * 0,5 = 12
                            </p>

                            <p>
                                Método 3:
                            </p>

                            <p class="equation">
                                &nbsp&nbsp&nbsp&nbsp&nbsp50 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                24 * ——— = 24 * 50% = 12<br>
                                &nbsp&nbsp&nbsp&nbsp&nbsp100 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <p>
                                Note que todos os multiplicadores que usamos são a mesma coisa:
                            </p>

                            <p class="equation">
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp50 &nbsp&nbsp&nbsp1 &nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                50% = ——— = — = 0,5<br>
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp100 &nbsp&nbsp2 &nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <h3>Exemplo #02:</h3>

                            <p>
                                32% * 400 = ?
                            </p>

                            <p class="equation">
                                32 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp32 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                ——— * 400 = —— * 4 = 128<br>
                                100 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <h3>Exemplo #03:</h3>

                            <p>
                                10% * 50% = ?
                            </p>

                            <p class="equation">
                                10 &nbsp&nbsp&nbsp50 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp500 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp5 &nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                ——— * ——— = ————————— = ——— = 5%<br>
                                100 &nbsp&nbsp100 &nbsp&nbsp100 * 100 &nbsp&nbsp100 &nbsp&nbsp&nbsp&nbsp
                            </p>

                            <h3>Exemplo #04:</h3>

                            <p>
                                40% * 120,5 / 0,1 = ?
                            </p>

                            <p class="equation">
                                4 &nbsp&nbsp&nbsp1205 &nbsp&nbsp4820 &nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                —— * ———— = ———— = 482<br>
                                10 &nbsp&nbsp&nbsp&nbsp1 &nbsp&nbsp&nbsp&nbsp10 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <h3>Exemplo #05:</h3>

                            <p>
                                20% / 60% * 70% = ?
                            </p>

                            <p class="equation">
                                20 &nbsp&nbsp&nbsp100 &nbsp&nbsp70 &nbsp&nbsp&nbsp20 &nbsp&nbsp70 &nbsp&nbsp&nbsp1 &nbsp&nbsp70 &nbsp&nbsp&nbsp70 &nbsp&nbsp&nbsp7&nbsp<br>
                                ——— * ——— * ——— = —— * ——— = — * ——— = ——— = ——<br>
                                100 &nbsp&nbsp&nbsp60 &nbsp&nbsp100 &nbsp&nbsp60 &nbsp&nbsp100 &nbsp&nbsp3 &nbsp&nbsp100 &nbsp&nbsp300 &nbsp&nbsp30
                            </p>

                            <h3>Exemplo #06:</h3>

                            <p>
                                10% * 1500 = ?
                            </p>

                            <p class="equation">
                                10 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1500 &nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                ——— * 1500 = —— * 1500 = ———— = 150<br>
                                100 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp10 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp10 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <h3>Exemplo #07:</h3>

                            <p>
                                20% * 1500 = ?
                            </p>

                            <p class="equation">
                                2 * 10% * 1500 = 2 * 150 = 300
                            </p>

                            <h3>Exemplo #08:</h3>

                            <p>
                                25% * 1500 = ?
                            </p>

                            <p class="equation">
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp150 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                (20% + 5%) * 1500 = 300 + ——— = 300 + 75 = 375<br>
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>
                        `,

                        exercises: []
                    },

                    {
                        id: "decimals-4",
                        title: "Aula 04 — Porcentagem: Vestibular",
                        
                        content: `
                            <h2>Vestibulares e Concursos</h2>

                            <h3>ENEM</h3>

                            <p>
                                Um contribuinte que vende mais de R$ 20 mil de ações em Bolsa de Valores em um mês deverá pagar Imposto de Renda. O pagamento para a Receita Federal consistirá em 15% do lucro obtido com a venda das ações.<br>
                                Um contribuinte que vende por R$ 34 mil um lote de ações que custou R$ 26 mil terá de pagar de Imposto de Renda à Receita Federal o valor de:<br>
                                <br>
                                a) R$ 900,00<br>
                                b) R$ 1200,00<br>
                                c) R$ 2100,00<br>
                                d) R$ 3900,00<br>
                                e) R$ 5100,00
                            </p>

                            <p>
                                Primeiro calculamos o lucro:
                            </p>

                            <p class="equation">
                                L = 34K - 26K = 8K = 8000
                            </p>

                            <p>
                                Agora calculamos os 15% do lucro, podemos calcular 10% e depois adicionar a metade.
                            </p>

                            <p class="equation">
                                8000 * 10% + 8000 / 2 * 10% = 800 + 400 = 1200
                            </p>

                            <p>
                                Ou seja, resposta "b) R$ 1200,00".
                            </p>

                            <h3>ENEM</h3>

                            <p>
                                Uma organização não governamental divulgou um levantamento de dados realizado em algumas cidades brasileiras sobre saneamento básico. Os resultados indicam que somente 36% do esgoto gerado nessas cidades é tratado, o que mostra que 8 bilhões de litros de esgoto sem nenhum tratamento são lançados todos os dias nas águas.<br>
                                Uma campanha para melhorar o saneamento básico nessas cidades tem como meta a redução da quantidade de esgoto lançado nas águas diariamente, sem tratamento para 4 bilhões de litros nos próximos meses.<br>
                                Se o volume de esgoto gerado permanecer o mesmo e a meta dessa campanha se concretizar, o percentual de esgoto tratado passará a ser:<br>
                                <br>
                                a) 72%<br>
                                b) 68%<br>
                                c) 64%<br>
                                d) 54%<br>
                                e) 18%<br>
                            </p>

                            <p>
                                Primeiro pegamos qual a porcentagem de esgoto não tratado:
                            </p>

                            <p class="equation">
                                100% - 36% = 64%
                            </p>

                            <p>
                                Depois vimos qual a nova porcentagem desejada:
                            </p>

                            <p class="equation">
                                4 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br>
                                — * 64% = 0,5 * 64% = 32%<br>
                                8 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </p>

                            <p>
                                Por fim, calculamos a porcentagem de esgoto que será tratado:
                            </p>

                            <p class="equation">
                                100% - 32% = 68%
                            </p>

                            <p>
                                Ou seja, a resposta correta é "b) 68%".
                            </p>
                        `,

                        exercises: []
                    }
                ]
            },

            {
                id: "factorization",
                title: "Fatoração: As Regras da Multiplicação",
                description: "Módulo sobre fatoração.",

                lessons: [
                    {
                        id: "factorization-1",
                        title: "Aula 01 — Os Axiomas: Soma e Subtração",
                        
                        content: `
                            <h2>Fatoração: As Regras da Multiplicação</h2>

                            <h2>1. Os axiomas da aritimética</h2>

                            <h3>Adição/Subtração</h3>

                            <p>
                                a) <strong style="color: #0000FF">a</strong> + <strong style="color: #FF0000">b</strong> = <strong style="color: #FF0000">b</strong> + <strong style="color: #0000FF">a</strong> (Comutatividade)<br>
                                Exemplo: <strong style="color: #0000FF">7</strong> + <strong style="color: #FF0000">11</strong> = 18 = <strong style="color: #FF0000">11</strong> + <strong style="color: #0000FF">7</strong>
                            </p>

                            <p>
                                b) <strong style="color: #0000FF">a</strong> + (<strong style="color: #FF0000">b</strong> + <strong style="color: #00FF00">c</strong>) = (<strong style="color: #0000FF">a</strong> + <strong style="color: #FF0000">b</strong>) + <strong style="color: #00FF00">c</strong> (Associatividade)<br>
                                Exemplo: <strong style="color: #0000FF">7</strong> + <strong style="color: #FF0000">11</strong> + <strong style="color: #00FF00">2</strong> = 18 + <strong style="color: #00FF00">2</strong> = <strong style="color: #0000FF">7</strong> + 13 = 9 + <strong style="color: #FF0000">11</strong> = 20
                            </p>

                            <p>
                                c) <strong style="color: #0000FF">a</strong> + 0 = 0 + <strong style="color: #0000FF">a</strong> = <strong style="color: #0000FF">a</strong> (Existência do Elemento Neutro)<br>
                                Exemplo: <strong style="color: #0000FF">17</strong> + 0 = <strong style="color: #0000FF">17</strong>
                            </p>

                            <p>
                                d) <strong style="color: #0000FF">a</strong> + (<strong style="color: #0000FF">-a</strong>) = 0 (Existência do Elemento Oposto)<br>
                                Exemplo: <strong style="color: #0000FF">7</strong> + (<strong style="color: #0000FF">-7</strong>) = 0
                            </p>
                        `,

                        exercises: []
                    },

                    {
                        id: "factorization-2",
                        title: "Aula 02 — Fatoração e Produtos Notáveis: Exemplo Nível 01",
                        
                        content: `
                            <h2>Exemplo (Nível 01)</h2>

                            <p>
                                Se x + y = 9 e x * y = 1, calcule o valor de x² + y².
                            </p>

                            <p>
                                Podemos começar elevando os dois lados da primeira equação ao quadrado:
                            </p>

                            <p class="equation">
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(x + y)² = 9²<br>
                                <strong style="color: #FF0000">x² +</strong> (2 * <strong style="color: #00FF00">x * y</strong>) <strong style="color: #FF0000">+ y²</strong> = 81<br>
                            </p>

                            <p>
                                Com isso achamos o x * y e achamos o x² + y², agora basta resolver a equação:
                            </p>

                            <p class="equation">
                                &nbsp&nbsp&nbsp&nbsp<strong style="color: #FF0000">x² +</strong> (2 * <strong style="color: #00FF00">1</strong>) <strong style="color: #FF0000">+ y²</strong> = 81 &nbsp&nbsp&nbsp<br>
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong style="color: #FF0000">x² + y²</strong> = 81 - 2<br>
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong style="color: #FF0000">x² + y²</strong> = 79 &nbsp&nbsp&nbsp
                            </p>

                            <p>
                                Assim descobrimos que x² + y² é igual a 79.
                            </p>
                        `,

                        exercises: []
                    },

                    {
                        id: "factorization-3",
                        title: "Aula 03 — Fatoração e Produtos Notáveis: Exemplo Nível 02",
                        
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