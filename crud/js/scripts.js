var obj = [
    {
     id: 0,
     nome: 'João',
     idade: 25,
     profissao: "engenheiro",
     estaTrabalhando: true,
     jogo: 'Call of Duty',
    },
     
     {
     id: 1,
     nome: 'Gustavo',
     idade: 30,
     profissao: "designer",
     estaTrabalhando: false,
     jogo:'Minecraft'
     },
 
     {
     id: 2,
     nome: 'Lucas',
     idade: 27,
     profissao: "programador",
     estaTrabalhando: true,
     jogo: 'Fortnite'
     },
 
     {
     id: 3,
     nome: 'Fernanda',
     idade: 23,
     profissao: "analista de dados",
     estaTrabalhando: true,
     jogo: 'League of Legends'
     },
 
     {
     id: 4,
     nome: 'Camila',
     idade: 29,
     profissao: "arquiteta",
     estaTrabalhando: false,
     jogo: 'The Sims'
     },
 
     {
     id: 5,
     nome: 'Rafael',
     idade: 32,
     profissao: "professor",
     estaTrabalhando: true,
     jogo: 'Counter-Strike'
     }
 ];
 

 


var tabela = document.querySelector('#bodi')//seleciona o elemento onde vai ser adicionado


for(var x = 0; x < obj.length; x++){ //looping de quantos objetos tem no array
    var novoTR = document.createElement('tr')//cria o elemento tr
    tabela.appendChild(novoTR)//adiciona o elemento filho na tabela onde fica o id bodi
    var selecionarTR = novoTR // seleciona o tr que acabou de criar
    var key = obj[x] //pega o id do array objeto
    var chaves = Object.keys(key) //pega a chaves do array
    var entradas = Object.entries(key) //retorna o array do array
    var informacoes = chaves.length //aqui pega o numero de chaves do array

    for(let i = 0; i < informacoes ;i++ ){
        var novoTD = document.createElement('td') //cria o elemento td
        selecionarTR.appendChild(novoTD)//seleciona o td
        novoTD.textContent = entradas[i][1]//coloca o array do array I selecionando o array 1
    } 
}

var j = 0

var novoID = document.querySelector('#id')
var tituloId = document.querySelector('#tituloId')
novoID.value = j

novoID.setAttribute('disabled', 'disabled')
novoID.style.display = 'none'
tituloId.style.display = 'none'


function enviar(){
    var novoNome = document.querySelector('#nome')
    var novaIdade = document.querySelector('#idade')
    var novaProfissao = document.querySelector('#profissao')
    var novoTrabalho = document.querySelector('#trabalhando')
    var novoJogo = document.querySelector('#jogo')
    
    var novoObjeto = {
        id: j,
        nome: novoNome.value,
        idade: novaIdade.value,
        profissão: novaProfissao.value,
        trabalhando: novoTrabalho.value,
        jogo: novoJogo.value, 
    }
    

    obj.push(novoObjeto)

    var novoTR = document.createElement('tr')
    tabela.appendChild(novoTR)

    for(var prop in novoObjeto){
        var novoTD = document.createElement('td')
        novoTD.textContent = novoObjeto[prop]
        novoTR.appendChild(novoTD)
    }

    novoNome.value = ''
    novaIdade.value = ''
    novaProfissao.value = ''
    novoTrabalho.value = ''
    novoJogo.value = ''

   j++

   novoID.value = j
}

