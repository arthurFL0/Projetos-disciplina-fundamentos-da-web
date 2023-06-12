const arr = [
    {
        nome: "Chega de saudade",
        artista:  "João Gilberto",
        img: "../img/chega.jpg",
        lancamento: "Data de lançamento: 1959",
        descricao: "Chega de Saudade é um icônico álbum lançado em 1959, que marcou o início da bossa nova, um movimento musical que revolucionou a música popular brasileira. Gravado pelo lendário João Gilberto, o álbum apresenta uma seleção de canções que se tornaram clássicos atemporais, como a faixa-título Chega de Saudade e Desafinado. Com arranjos inovadores e uma abordagem minimalista, o álbum é conhecido por sua atmosfera intimista e sofisticada. João Gilberto introduziu uma nova maneira de tocar violão, com uma batida suave e sincopada, conhecida como violão bossa nova, que se tornaria uma marca registrada do gênero. Sua voz sussurrada e seu estilo único de interpretação deram às músicas uma nova dimensão, redefinindo o conceito de cantar em um contexto mais suave e introspectivo. Chega de Saudade foi um marco na música brasileira, conquistando o público nacional e internacionalmente. Com sua sonoridade inovadora e poesia melódica, o álbum influenciou uma geração de artistas e abriu caminho para o reconhecimento global da bossa nova. Ele representa um momento histórico em que a música brasileira se reinventou, combinando elementos da música tradicional brasileira com influências do jazz e criando um estilo único e cativante. Chega de Saudade é um tesouro musical que continua a encantar e inspirar pessoas ao redor do mundo, imortalizando a genialidade de João Gilberto e a magia da bossa nova."
    },
    {  
     nome:"Wave",
     artista: "Tom Jobim",
     img: "../img/Wave.jpg",
     lancamento: "Data de lançamento: 1967",
     descricao: "Wave é um notável álbum de bossa nova lançado por Antonio Carlos Jobim em 1967. Nesse trabalho, Jobim expande as fronteiras da bossa nova, incorporando elementos do jazz e da música clássica em suas composições. O álbum apresenta uma atmosfera suave e relaxante, com arranjos sofisticados e melodias envolventes. Faixas como a icônica Wave e Água de Beber demonstram a genialidade de Jobim como compositor e arranjador, capturando a essência da bossa nova em uma fusão perfeita de ritmos brasileiros e influências internacionais. Wave é amplamente considerado um dos melhores trabalhos de Jobim e um marco na história da música brasileira. O álbum conquistou sucesso tanto no Brasil quanto no exterior, contribuindo para popularizar a bossa nova em todo o mundo. Com sua sofisticação harmônica e as belas interpretações de Jobim ao piano, Wave é um deleite auditivo que transporta o ouvinte para um universo de leveza e beleza sonora. É um testemunho do talento excepcional de Jobim como compositor e sua habilidade de criar melodias cativantes que ecoam na memória auditiva por décadas."
    },
    {
      nome:"Dez anos Depois",
      artista:"Nara Leão",
      img: "../img/nara1971capa.webp",
      lancamento: "Data de lançamento: 1971",
      descricao: "Dez Anos Depois é um aclamado álbum lançado por Nara Leão em 1971. Marcando uma fase de transição em sua carreira, o álbum representa uma mudança significativa em seu estilo musical, afastando-se do formato tradicional da bossa nova e explorando novos horizontes sonoros. Com uma abordagem mais experimental e psicodélica, o álbum apresenta uma fusão única de gêneros como o rock, o folk e o tropicalismo, mostrando a versatilidade artística de Nara Leão. As composições de Dez Anos Depois são carregadas de poesia e reflexões sobre a sociedade e a realidade brasileira da época. Nara Leão imprime sua voz suave e marcante nas canções, transmitindo emoção e profundidade em cada interpretação. Com arranjos inventivos e colaborações com artistas renomados, como Gilberto Gil e Caetano Veloso, o álbum desafia convenções e estabelece Nara Leão como uma das vozes mais corajosas e influentes da música popular brasileira. Dez Anos Depois é um testemunho do talento artístico de Nara Leão e de sua capacidade de se reinventar, deixando um legado significativo na música brasileira."
    },
    {
        nome:"João Gilberto (1973)",
        artista : "João Gilberto",
        img: "../img/jg1973.jpg",
        lancamento: "Data de lançamento: 1973",
        descricao : "João Gilberto 1973 é um álbum icônico lançado pelo lendário João Gilberto naquele ano. Considerado um dos seus trabalhos mais influentes, o álbum apresenta a genialidade singular de Gilberto como intérprete e inovador da bossa nova. Com uma abordagem minimalista e intimista, o álbum destaca a voz sussurrante e o característico violão de Gilberto, criando uma atmosfera suave e cativante. As faixas, como Águas de Março e Desafinado, demonstram sua habilidade única de reinventar clássicos e dar-lhes uma nova roupagem, além de apresentar composições originais que revelam sua maestria como compositor. A sonoridade singular de João Gilberto 1973 e a interpretação delicada de João Gilberto estabelecem uma conexão profunda com o ouvinte, capturando a essência da bossa nova. O álbum se destaca pela qualidade técnica e pelo domínio do violão e da voz de Gilberto, revelando um virtuosismo artístico único. Com sua abordagem despojada e seu senso de ritmo excepcional, João Gilberto reafirma seu lugar como uma das maiores lendas da música brasileira. João Gilberto 1973 é um testemunho atemporal do talento e da contribuição significativa de João Gilberto para a música, reafirmando sua posição como um dos grandes mestres da bossa nova."
    }
]

const nomeHtml = document.querySelector("#nome")
const sinopseeHtml = document.querySelector("#artista")
const lancamentoHtml = document.querySelector("#lancamento")
const imgHtml = document.querySelector("#img")
const descHtml = document.querySelector("#descricao")
const setaEsquerda = document.querySelector("#seta-esquerda")
const setaDireita = document.querySelector("#seta-direita")
const display = document.querySelector(".display-numero")

let atual = 0;


const mudaDados = (index) => {
    nomeHtml.innerText = arr[index].nome;
    sinopseeHtml.innerText = arr[index].artista;
    imgHtml.src = arr[index].img;
    descHtml.innerText = arr[index].descricao;
    lancamentoHtml.innerText = arr[index].lancamento;
}


document.onload = mudaDados(0);


const mudaDisplay = () => {
    display.innerText = `(${atual+1}/4)`
}

const irAoAnterior = () => {
    if(0 < atual){
        console.log("alou")
        atual = atual - 1;
        mudaDados(atual);
        mudaDisplay();
    }
}


const irAoProximo = () => {
    if(atual < 3){
        atual = atual + 1;
        mudaDados(atual);
        mudaDisplay();

    }
}

setaEsquerda.addEventListener('click',function(){
    irAoAnterior()
});

setaDireita.addEventListener('click',function(){
    irAoProximo()
});



