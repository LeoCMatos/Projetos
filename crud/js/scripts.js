var obj = [
    {
     id: 0,
     nome: 'João',
     idade: 25,
     profissao: "engenheiro",
     estaTrabalhando: 'sim',
     jogo: 'Call of Duty',
    },
     
     {
     id: 1,
     nome: 'Gustavo',
     idade: 30,
     profissao: "designer",
     estaTrabalhando: 'não',
     jogo:'Minecraft'
     },
 
     {
     id: 2,
     nome: 'Lucas',
     idade: 27,
     profissao: "programador",
     estaTrabalhando: 'sim',
     jogo: 'Fortnite'
     },
 
     {
     id: 3,
     nome: 'Fernanda',
     idade: 23,
     profissao: "analista de dados",
     estaTrabalhando: 'sim',
     jogo: 'League of Legends'
     },
 
     {
     id: 4,
     nome: 'Camila',
     idade: 29,
     profissao: "arquiteta",
     estaTrabalhando: 'não',
     jogo: 'The Sims'
     },
 
     {
     id: 5,
     nome: 'Rafael',
     idade: 32,
     profissao: "professor",
     estaTrabalhando: 'sim',
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



var j = informacoes

var novoID = document.querySelector('#id')
var tituloId = document.querySelector('#tituloId')
var atualizar = document.querySelector('#atualizar')
novoID.value = j
var cadastrar = document.querySelector('#cadastrar')
var cadastroAtualizar = document.querySelector('#cadastroAtualizar')
var deletar = document.querySelector('#deletar')

novoID.setAttribute('disabled', 'disabled')
novoID.style.display = 'none'
tituloId.style.display = 'none'
atualizar.style.display = 'none'
cadastroAtualizar.style.display = 'none'
deletar.style.display = 'none'

function enviar(){
    //seleciona os input
    var novoNome = document.querySelector('#nome')
    var novaIdade = document.querySelector('#idade')
    var novaProfissao = document.querySelector('#profissao')
    var novoTrabalho = document.querySelector('#trabalhando')
    var novoJogo = document.querySelector('#jogo')
    //pega os valores do input e joga dentro de uma nova chave de array
    var novoObjeto = {
        id: j,
        nome: novoNome.value,
        idade: novaIdade.value,
        profissao: novaProfissao.value,
        estaTrabalhando: novoTrabalho.value,
        jogo: novoJogo.value, 
    }
    
    //puxa para o array principal a chave
    obj.push(novoObjeto)
    //cria o tr
    var novoTR = document.createElement('tr')
    tabela.appendChild(novoTR)
    //cria os td
    for(var prop in novoObjeto){
        var novoTD = document.createElement('td')
        novoTD.textContent = novoObjeto[prop]
        novoTR.appendChild(novoTD)
    }
    //zera os valores do input
    novoNome.value = ''
    novaIdade.value = ''
    novaProfissao.value = ''
    novoTrabalho.value = ''
    novoJogo.value = ''

   j++
}

function editar(){
    if(novoID.style.display == 'block'){
        novoID.setAttribute('disabled', 'disabled')
        novoID.style.display = 'none'
        tituloId.style.display = 'none'
        atualizar.style.display = 'none'
        cadastrar.style.display = 'block'
        cadastroAtualizar.style.display = 'none'
        deletar.style.display = 'none'
    } else {
        novoID.removeAttribute('disabled', 'disabled')
        novoID.style.display = 'block'
        tituloId.style.display = 'block'
        atualizar.style.display = 'block'
        cadastrar.style.display = 'none'
        cadastroAtualizar.style.display = 'block'
        deletar.style.display = 'block'
    }
}

var objetoSelecionado = null



function puxarDados(){
    var idDesejado = novoID.value
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].id == idDesejado) {
          objetoSelecionado = obj[i];
          break;
        }
      }

    if(objetoSelecionado){
        var nomeSelecionado = objetoSelecionado.nome
        var idadeSelecionada = objetoSelecionado.idade
        var puxarNome = document.querySelector('#nome')
        var puxarIdade = document.querySelector('#idade')
        var puxarProfissao = document.querySelector('#profissao')
        var puxarTrabalho = document.querySelector('#trabalhando')
        var puxarJogo = document.querySelector('#jogo')
        puxarNome.value = objetoSelecionado.nome
        puxarIdade.value = objetoSelecionado.idade
        puxarProfissao.value = objetoSelecionado.profissao
        puxarTrabalho.value = objetoSelecionado.estaTrabalhando
        puxarJogo.value = objetoSelecionado.jogo
    }
}

function atualizarCadastro(){
    var idAtualizado = novoID.value
    var atualizarNome = document.querySelector('#nome').value
    var atualizarIdade = document.querySelector('#idade').value
    var atualizarProfissao = document.querySelector('#profissao').value
    var atualizarTrabalhando = document.querySelector('#trabalhando').value
    var atualizarJogo = document.querySelector('#jogo').value
    
    for(var u = 0; u < obj.length; u++){
        if(obj[u].id == idAtualizado){
            obj[u].nome = atualizarNome
            obj[u].idade = atualizarIdade
            obj[u].profissao = atualizarProfissao
            obj[u].estaTrabalhando = atualizarTrabalhando
            obj[u].jogo = atualizarJogo
        }
    }

    var tabela = document.querySelector('#bodi');
    var linhas = tabela.querySelectorAll('tr');

    // Atualizar o texto das células com os dados atualizados
    for (var i = 0; i < obj.length; i++) {
        var linha = linhas[i]
        var celulas = linha.querySelectorAll('td')
      
        celulas[0].textContent = obj[i].id
        celulas[1].textContent = obj[i].nome
        celulas[2].textContent = obj[i].idade
        celulas[3].textContent = obj[i].profissao
        celulas[4].textContent = obj[i].estaTrabalhando
        celulas[5].textContent = obj[i].jogo
      }

}

function removerCadastro() {
    var idDeletado = novoID.value

    var indice = obj.findIndex(function(objeto){
        return objeto.id == idDeletado
    })

    if(indice !== -1){
        obj.splice(indice, 1)

        var linhaRemovida = tabela.querySelectorAll('tr')[indice]
        linhaRemovida.remove()
    }
}
  

  
  
  
  
  
  
  