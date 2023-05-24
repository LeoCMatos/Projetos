var calc1 = 0
var calc2 = 0


numeroVisor = 0
visor.innerHTML = 0
//limpar visor
function AC(){
    numeroVisor = 0
    visor.innerHTML = 0
    console.log(numeroVisor)
    console.log(numeroVisor.length)
    resultado = ''
    calc1 = ''
    calc2 = ''
}
//adicionar número 9
function numero9(){
    //verifica se o número do visor foi definido ou se está o valor está zerado
    if(numeroVisor.length == undefined || numeroVisor == 0){
        visor.innerHTML = ''
        numeroVisor = ''
    }  
    if(numeroVisor.length >= 13){
        console.log('atingiu o valor maximo de números')
    } else {
        numeroVisor += '9'
        visor.innerHTML += '9'
        console.log('aqui é a quantidade de numeros ' + numeroVisor.length + ' aqui é o valor dos números' + numeroVisor)
    }
}

function numero8(){
    if(numeroVisor.length == undefined || numeroVisor == 0){
        visor.innerHTML = ''
        numeroVisor = ''
    }  
    if(numeroVisor.length >= 13){

    } else {
        numeroVisor += '8'
        visor.innerHTML += '8'
        console.log('aqui é a quantidade de numeros ' + numeroVisor.length + ' aqui é o valor dos números' + numeroVisor)
    }
}

function numero7(){
    if(numeroVisor.length == undefined || numeroVisor == 0){
        visor.innerHTML = ''
        numeroVisor = ''
    }

    if(numeroVisor.length >= 13){
    } else {
        numeroVisor += '7'
        visor.innerHTML += '7'
    }
}

function adicao(){
    //aqui verifica se as variaveis 
    if(calc1 == 0){
        calc1 = parseFloat(numeroVisor)
        numeroVisor = 0
        console.log(typeof calc1)

    } else {
        calc2 = parseFloat(numeroVisor)
        numeroVisor = 0
    } 

    if (calc1 != 0 && calc2 != 0){
        var resultado = calc1 + calc2
        console.log(resultado)
        visor.innerHTML = resultado
        calc1 = 0
        calc2 = resultado
    }
}