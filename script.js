const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "qual o lugar onde nasceu o futebol e o seculo",
        alternativas: [
            {
                texto: "foi na inglaterra!",
                afirmacao: "seculo xvII"
            },
            {
                texto: "como se joga futebol?",
                afirmacao: "com as pernas"
            }
        ]
    },
    {
        enunciado: "brasil tem quantas copas do mundo?",
        alternativas: [
            {
                texto: "ganhou 5 vezes.",
                afirmacao: "tem que ganhar mas"
            },
            {
                texto: "o que voce acha disso",
                afirmacao: "muito bom"
            }
        ]
    },
    {
        enunciado: "neymar ou messi?",
        alternativas: [
            {
                texto: "messi bem melhor.",
                afirmacao: "neymar falido"
            },
            {
                texto: "messi tem dom e eforço.",
                afirmacao: "neymar so midia"
            }
        ]
    },
    {
        enunciado: "e se voce for pai novo?",
        alternativas: [
            {
                texto: "meus pais me ajuda a cuidar do bebe.",
                afirmacao: "me mudo pro paraguay"
            },
            {
                texto: "iria jogar no tigrinho e fica rico.",
                afirmacao: "ia ser preso"
            }
        ]
    },
    {
        enunciado: "Você pretende arruma um trabalho ou ser jogador de futebol? ",
        alternativas: [
            {
                texto: "jogador ajudo minha familia.",
                afirmacao: "trabalho tambem mas ganho pouco dinheiro"
            },
            {
                texto: "nao consigo ser jogador.",
                afirmacao: " so trabalho se for meio periodo ganhando 22.000 "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
