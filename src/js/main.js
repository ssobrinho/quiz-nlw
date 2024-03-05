const perguntas = [
    {
        pergunta: 'Qual é a maior lua do Sistema Solar?',
        respostas: [
            'Lua de Júpiter',
            'Lua de Saturno',
            'Lua de Netuno',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é a estrela mais próxima da Terra, além do Sol?',
        respostas: [
            'Proxima Centauri',
            'Sirius',
            'Alpha Centauri',
        ],
        correta: 0
    },
    {
        pergunta: 'Quantos planetas têm anéis em nosso Sistema Solar?',
        respostas: [
            'Dois',
            'Quatro',
            'Oito',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é o maior planeta do Sistema Solar?',
        respostas: [
            'Júpiter',
            'Saturno',
            'Urano',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é a galáxia mais próxima da Via Láctea?',
        respostas: [
            'Andrômeda',
            'Messier 87',
            'Centaurus A',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é o elemento químico mais comum no universo?',
        respostas: [
            'Hélio',
            'Oxigênio',
            'Hidrogênio',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é o maior vulcão conhecido do Sistema Solar?',
        respostas: [
            'Olympus Mons (Marte)',
            'Mauna Loa (Terra)',
            'Mount Everest (Terra)',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual é o planeta mais denso do Sistema Solar?',
        respostas: [
            'Júpiter',
            'Saturno',
            'Terra',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é o objeto mais distante já observado no Sistema Solar?',
        respostas: [
            'Plutão',
            'Éris',
            'Sedna',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é o tempo aproximado que a luz do Sol leva para chegar à Terra?',
        respostas: [
            '8 minutos',
            '1 hora',
            '1 dia',
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')  // 4
const template = document.querySelector('template')  // 2

// "new Set" vai dar o efeito de guardar as respostas quando for adicionado ou removido no if
const corretas = new Set()  // 17
const totalDePerguntas = perguntas.length  // 20
const mostrarTotal = document.querySelector('#acertos span')  // 21

for (const item of perguntas) {  // 1
    // clona o conteúdo do template do html
    const quizItem = template.content.cloneNode(true)  // 3
    // troca o nome anterior que estava no html pelas perguntas criadas
    quizItem.querySelector('h3').textContent = item.pergunta  // 6

    // cria as respostas possíveis
    for (let resposta of item.respostas) {  // 7
        // clona as respostas 
        const dt = quizItem.querySelector('dl dt').cloneNode(true)  // 8
        // muda o conteúdo do span que estava no html pela resposta criada
        dt.querySelector('span').textContent = resposta  // 9
        // trabalha a parte de seleção de respostas pra cada pergunta (click)
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))  // 12
        // muda o valor de atribuído a cada resposta possível
        dt.querySelector('input').value = item.respostas.indexOf(resposta)  // 13
        // evento de click
        dt.querySelector('input').onchange = (event) => {  // 14
            // verifica o click em cada resposta e compara com a resposta correta
            const estaCorreta = event.target.value == item.correta  // 15

            corretas.delete(item)  // 19
            if (estaCorreta) {  // 16
                corretas.add(item)  // 18
            }

            // é o que vai fazer a interação de contagem de acertos mudar no final da página
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas  // 22
        }

        // adiciona as respostas na tela
        quizItem.querySelector('dl').appendChild(dt)  // 10
    }

    // remove "Resposta A" do template que foi clonado
    quizItem.querySelector('dl dt').remove()  // 11

    // coloca a pergunta na tela
    quiz.appendChild(quizItem)  // 5
}