const arr = [
    {
        nome: "João Gilberto",
        sinopse:  "Icônico músico brasileiro, revolucionou a história da música com seu estilo singular, moldando o som e o ritmo do bossa nova para sempre.",
        img: "../img/jg2.png",
        descricao:"João Gilberto, nascido em 1931 no Brasil, foi um dos músicos mais influentes e inovadores da história da música popular brasileira. Ele é considerado o pai do movimento da bossa nova, um gênero musical que surgiu no final dos anos 1950 e conquistou o mundo com suas harmonias sofisticadas e batidas suaves. João Gilberto foi responsável por transformar o modo de tocar violão, introduzindo uma técnica revolucionária de batidas rítmicas conhecida como violão bossa nova, que se tornou sua marca registrada.Com sua voz sussurrada e sua interpretação minimalista, João Gilberto criou um estilo musical único, caracterizado por sua precisão melódica e uma abordagem suave e introspectiva das canções. Ele alcançou sucesso internacional com álbuns icônicos, como Chega de Saudade e Getz/Gilberto este último gravado em parceria com o saxofonista Stan Getz. Sua maneira inconfundível de cantar e tocar violão influenciou gerações de artistas ao redor do mundo, e seu legado perdura como uma das maiores contribuições para a música brasileira e além. João Gilberto faleceu em 2019, deixando um impacto duradouro na música e sendo lembrado como um dos grandes gênios da música brasileira."

    },
    {  
     nome:"Tom Jobim / Antônio Carlos Jobim",
     sinopse: "Um dos compositores mais brilhantes e influentes da história, criando melodias intemporais que capturaram a essência da bossa nova e encantaram o mundo.",
     img: "../img/tom.jpg",
     descricao: "Tom Jobim, nascido em 1927 no Brasil, foi um renomado músico, compositor e maestro. Ele é considerado um dos grandes mestres da música popular brasileira e um dos principais responsáveis por popularizar a bossa nova, um gênero musical que conquistou o mundo com sua elegância e sofisticação. Tom Jobim compôs inúmeras canções icônicas, como Garota de Ipanema e Wave, que se tornaram clássicos da música brasileira e foram interpretadas por artistas renomados internacionalmente.Além de sua habilidade como compositor, Tom Jobim era um talentoso pianista e arranjador. Sua música se destacava pela harmonia complexa e pela fusão harmoniosa de elementos da música clássica com ritmos brasileiros. Ele também colaborou com outros músicos talentosos, como Vinicius de Moraes e João Gilberto, na criação de obras-primas que transcendem fronteiras culturais. Tom Jobim deixou um legado duradouro na música, sendo reverenciado como um dos grandes gênios da música brasileira e um embaixador cultural do Brasil para o mundo. Sua música continua a inspirar e encantar pessoas de todas as idades e origens, mantendo viva a sua genialidade e paixão pela música."
    },
    {
      nome:"Johnny Alf / Alfredo José da Silva",
      sinopse:"O talentoso músico brasileiro deixou sua marca na história da música com sua inovação e contribuições significativas para o gênero da bossa nova.",
      img: "../img/alf.webp",
      descricao: "Joohny Alf, um talentoso músico brasileiro, deixou uma marca indelével na história da música com sua contribuição para a bossa nova. Ele foi um dos pioneiros do gênero, trazendo influências do jazz e criando um estilo único que combinava harmonias sofisticadas com melodias cativantes. Sua habilidade como pianista e compositor o destacou, e suas canções, como Rapaz de Bem e O Que É Amar, são consideradas verdadeiros clássicos. Joohny Alf trouxe uma nova abordagem à música brasileira, influenciando gerações de artistas com seu talento e originalidade. Apesar de suas realizações significativas, a história de Joohny Alf permanece pouco conhecida em comparação com outros músicos da bossa nova. Esse desconhecimento pode ser atribuído a diversos fatores, incluindo uma menor divulgação de sua carreira e a presença de outros artistas mais populares que acabaram ocupando o centro das atenções. Infelizmente, essa falta de reconhecimento tem deixado Joohny Alf em uma posição relativamente obscura na história da música brasileira. No entanto, é fundamental destacar a importância de seu legado e resgatar sua história, a fim de valorizar sua contribuição única para a bossa nova e apreciar a genialidade desse talentoso músico."
    },
    {
        nome:"Nara Leão",
        sinopse : "A renomada cantora brasileira foi uma figura icônica da música popular, conhecida por sua voz única e seu engajamento artístico e político.",
        img: "../img/nara.jpg",
        descricao : "Nara Leão, nascida em 1942 no Brasil, foi uma cantora e atriz que deixou uma marca indelével na música popular brasileira. Reconhecida por sua voz suave e cativante, Nara foi uma das principais artistas do movimento da bossa nova e uma das pioneiras a levar o gênero para o grande público. Com seu estilo único e interpretação emocional das canções, ela se tornou uma das vozes mais emblemáticas da música brasileira da década de 1960. Além de sua contribuição para a bossa nova, Nara Leão também teve uma carreira marcante no cenário da música de protesto durante a ditadura militar no Brasil. Ela utilizou sua voz e sua posição de destaque para defender causas sociais e políticas, sendo uma das principais artistas engajadas da época. Com coragem e determinação, Nara se posicionou contra a censura e apoiou movimentos de resistência, se tornando um símbolo de resistência cultural e inspirando outros artistas a se manifestarem por meio da música. Seu legado como uma das grandes vozes da música brasileira e como uma figura importante na luta pela liberdade e justiça social continua a ecoar até os dias de hoje."
    }
]

const nomeHtml = document.querySelector("#nome")
const sinopseeHtml = document.querySelector("#sinopse")
const imgHtml = document.querySelector("#img")
const descHtml = document.querySelector("#descricao")
const setaEsquerda = document.querySelector("#seta-esquerda")
const setaDireita = document.querySelector("#seta-direita")
const display = document.querySelector(".display-numero")

let atual = 0;


const mudaDados = (index) => {
    nomeHtml.innerText = arr[index].nome;
    sinopseeHtml.innerText = arr[index].sinopse;
    imgHtml.src = arr[index].img;
    descHtml.innerText = arr[index].descricao;
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



