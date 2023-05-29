//pega a div calculadora
var div = document.getElementsByTagName('div')

//defini o número de botoes que vai ter na calculadora
var numeroBotoes = 22
var botoes = []

var verificaIgual = true
// aqui está pegando a classe calc que foi criada para dar forma as divisorias
var forma = document.getElementsByClassName('calc')

//aqui pega os valores das operações
var operacao = 0

//aqui verifica se o visor está vazio ou nao
var visorVazio = true

// manda o valor para o visor de cima
var visorSuperior = ''

// calculos
calc1 = '0'
calc2 = '0'



//resultado
var resultado = 0
//cria os botoes
for(let x = 1; x <= numeroBotoes; x++){
    botoes.push(x)
}


//criar a divisorias onde vai teclas
for(let x = 0; x < numeroBotoes; x++){
    // cria a divisoria
    var divisoria = document.createElement('div')
    // cria os textos
    var text = document.createTextNode(botoes[x])
    //aqui pega os textos e coloca dentro da div
    divisoria.appendChild(text)
    // pega as divisorias que vao ser criado no for e coloca dentro da div calculadora
    div[0].appendChild(divisoria)
    //aqui coloca uma classe nas divisorias criadas
    divisoria.classList.add('calc')
    divisoria.onclick = function (){
    //verifica se o visor está zerado ao clicar se estiver ele zera e não deixa o looping mais entrar
        if(visorVazio){
            visor.innerHTML = ''
            visorVazio = false
        }
        if(verificaIgual){
            visor.innerHTML = ''
            verificaIgual = false
        }
        visor.innerHTML += this.textContent
    }
}

var ultimaOperacao = 'nenhuma'

//aqui eu pego a divisoria especifica e coloco o que eu quiser dentro dela
for(let x = 0; x < forma.length; x++){
    forma[0].id = 'superiorEsquerdo'
    forma[1].id = 'superiorDireito'
    forma[2].id = 'visor'
    if(x === 3 || x === 4 || x === 5){
        forma[x].id = 'operacoes'
    }
    if(x === 6 || x === 10 || x === 14 || x === 18){
        forma[x].id = 'operacoes2'
    }
    forma[19].id = 'zero'
    forma[21].id = 'resultado'

    // aqui pega as div sem id e coloca id numeros nelas
    if (!forma[x].id) {
        forma[x].id = 'numeros'

    }

    //aqui coloca o valor na div e na operação
    forma[1].innerHTML = ''
    forma[2].innerHTML = '0'
    forma[3].innerHTML = 'AC'
    forma[4].innerHTML = '+/-'
    forma[5].innerHTML = '%'
    forma[6].innerHTML = '÷'
    forma[7].innerHTML = '7'
    forma[8].innerHTML = '8'
    forma[9].innerHTML = '9'
    forma[10].innerHTML = 'x'
    forma[11].innerHTML = '4'
    forma[12].innerHTML = '5'
    forma[13].innerHTML = '6'
    forma[14].innerHTML = '-'
    forma[15].innerHTML = '1'
    forma[16].innerHTML = '2'
    forma[17].innerHTML = '3'
    forma[18].innerHTML = '+'
    forma[19].innerHTML = '0'
    forma[20].innerHTML = ','
    forma[21].innerHTML = '='

    //aqui define a função de cada botão
    forma[0].onclick = function(){}
    forma[1].onclick = function(){}
    forma[2].onclick = function(){}
    forma[3].onclick = function(){
        forma[1].innerHTML = ''
        forma[2].innerHTML = '0'
        visorVazio = true
        resultado = 0
        calc1 = '0'
        calc2 = '0'
    }
    //adicao
    


    forma[18].onclick = function(){
            if(forma[1].innerHTML == undefined || forma[1].innerHTML == ''){
                calc1 = parseFloat(forma[2].innerHTML)
                verificaIgual = true
                forma[1].innerHTML = calc1 + ' +'
                forma[2].innerHTML = calc1
            } else if(calc1 != undefined){
                calc1 = parseFloat(forma[1].innerHTML)
                calc2 = parseFloat(forma[2].innerHTML)
                resultado = calc1 + calc2

                forma[1].innerHTML = resultado + ' +'
                fimOperacao()
            }
            ultimaOperacao = 'adicao'
    }
    // subtracao
    forma[14].onclick = function(){

        if(forma[1].innerHTML == undefined || forma[1].innerHTML == ''){
            calc1 = parseFloat(forma[2].innerHTML)
            verificaIgual = true
            forma[1].innerHTML = calc1 + ' -'
            forma[2].innerHTML = calc1
        } else if(calc1 != undefined){
            calc1 = parseFloat(forma[1].innerHTML)
            calc2 = parseFloat(forma[2].innerHTML)
            resultado = calc1 - calc2
            forma[1].innerHTML = resultado + ' -'
            fimOperacao()
        }
        ultimaOperacao = 'subtracao'
    }
    

    //multiplicação
    operacao = forma[2].innerHTML

    forma[10].onclick = function(){
        if(forma[1].innerHTML == undefined || forma[1].innerHTML == ''){
            
            calc1 = parseFloat(forma[2].innerHTML)
            verificaIgual = true
            forma[1].innerHTML = calc1 + ' x'
            forma[2].innerHTML = calc1

        } else if(calc1 != undefined){
            calc1 = parseFloat(forma[1].innerHTML)
            calc2 = parseFloat(forma[2].innerHTML)
            resultado = calc1 * calc2
            forma[1].innerHTML = resultado + ' x'
            fimOperacao()
        }
        ultimaOperacao = 'multiplicacao'
    }

    //divisão

    forma[6].onclick = function(){

        if(forma[1].innerHTML == undefined || forma[1].innerHTML == ''){
            calc1 = parseFloat(forma[2].innerHTML)
            verificaIgual = true
            forma[1].innerHTML = calc1 + ' ÷'
            forma[2].innerHTML = calc1
        } else if(calc1 != undefined){
            calc1 = parseFloat(forma[1].innerHTML)
            calc2 = parseFloat(forma[2].innerHTML)
            resultado = calc1 / calc2
            forma[1].innerHTML = resultado + ' ÷'
            fimOperacao()
        }
        ultimaOperacao = 'divisao'
    }

    //inverte o sinal
    forma[4].onclick = function(){
        calc1 = forma[2].innerHTML
        calc2 = -1
        resultado = calc1 * calc2
        forma[2].innerHTML = resultado
        resultado = 0
        calc1 = '0'
        calc2 = '0'
    }
     
    //resultado

    forma[21].onclick = function(){
        
        if(ultimaOperacao == 'adicao'){
            
            calc1 = parseFloat(forma[2].innerHTML)
            calc2 = parseFloat(forma[1].innerHTML)
            resultado = calc1 + calc2

        } else if(ultimaOperacao == 'subtracao'){
            calc1 = parseFloat(forma[1].innerHTML)
            calc2 = parseFloat(forma[2].innerHTML)
            resultado = calc1 - calc2


        } else if(ultimaOperacao == 'multiplicacao'){
            calc1 = parseFloat(forma[1].innerHTML)
            calc2 = parseFloat(forma[2].innerHTML)
            resultado = calc1 * calc2
     

        } else if(ultimaOperacao == 'divisao'){
            calc1 = parseFloat(forma[1].innerHTML)
            calc2 = parseFloat(forma[2].innerHTML)
            resultado = calc1 / calc2

        }
        fimOperacao()
    }

}

function fimOperacao(){
    forma[2].innerHTML = resultado    
    resultado = 0
    calc1 = '0'
    calc2 = '0'
    verificaIgual = true
}


