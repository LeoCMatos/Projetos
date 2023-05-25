var calc1 = 0
var calc2 = 0

var CaractereVirgula = true
var QuantidadeNumerosTela = 12
var FormatandoNumero
var error = 'Limite de numeros atigindo'
var MensagemLimiteVisor = 'Visor atingiu a quantidade máxima de números digitados'
var resultado = 0

numeroVisor = 0
visor.innerHTML = 0

//limpar visor
function AC(){
    numeroVisor = 0
    visor.innerHTML = 0
    resultado = ''
    calc1 = 0
    calc2 = 0
    CaractereVirgula = true
    contaAnterior.innerHTML = ''
    result = true
}


//faz com que o numero seja formatado no visor da calculadora
function formatarNumero(numero) {
    if (numero > 1000) {
      return numero.toLocaleString('pt-BR');
    } else {
      return numero.toString();
    }
  }

//verifica se o número do visor foi definido ou se está o valor está zerado   
function numero0ouUndefined(){
    if(CaractereVirgula == true &&(numeroVisor.length == undefined || numeroVisor == 0)){
        visor.innerHTML = ''
        numeroVisor = ''
    }
}

function LimiteDeNumerosVisor(){
    visor.style.fontSize = '1'
    visor.innerHTML = 'error'
    resultado = 0
    calc1 = 0
    calc2 = 2
}

//adicionar número 9
function numero9(){

    numero0ouUndefined()
    //aqui adiciona no visor o número e verifica a quantidade numeros digitados
    if(numeroVisor.length >= QuantidadeNumerosTela){
        window.alert(MensagemLimiteVisor)
    } else {
        numeroVisor += '9'
        //verifica se a virgula nao foi utilizada, se foi utilizada ela vai pro else
        if(CaractereVirgula == true){
        var numeroFormatado = formatarNumero(Number(numeroVisor));
        visor.innerHTML = numeroFormatado;
        } else if (CaractereVirgula == false){
            visor.innerHTML += '9'
        }
    }
}

//número 8
function numero8(){
    numero0ouUndefined()
    //aqui adiciona no visor o número e verifica a quantidade numeros digitados
    if(numeroVisor.length >= QuantidadeNumerosTela){
        window.alert(MensagemLimiteVisor)
    } else {
        numeroVisor += '8'
        if(CaractereVirgula == true){
        var numeroFormatado = formatarNumero(Number(numeroVisor));
        visor.innerHTML = numeroFormatado;
        } else if (CaractereVirgula == false){
            visor.innerHTML += '8'
        }  
    }
}

//número 7
function numero7(){
    numero0ouUndefined()
    //aqui adiciona no visor o número e verifica a quantidade numeros digitados
    if(numeroVisor.length >= QuantidadeNumerosTela){
        window.alert(MensagemLimiteVisor)
    } else {
        numeroVisor += '7'
        if(CaractereVirgula == true){
        var numeroFormatado = formatarNumero(Number(numeroVisor));
        visor.innerHTML = numeroFormatado;
        } else if (CaractereVirgula == false){
            visor.innerHTML += '7'
        }
    }
}

//número 6
function numero6(){

    numero0ouUndefined()
    //aqui adiciona no visor o número e verifica a quantidade numeros digitados
    if(numeroVisor.length >= QuantidadeNumerosTela){
        window.alert(MensagemLimiteVisor)
    } else {
        numeroVisor += '6'
        if(CaractereVirgula == true){
        var numeroFormatado = formatarNumero(Number(numeroVisor));
        visor.innerHTML = numeroFormatado;
        } else if (CaractereVirgula == false){
            visor.innerHTML += '6'
        }
    }
}

//número 5
function numero5(){

    numero0ouUndefined()
    //aqui adiciona no visor o número e verifica a quantidade numeros digitados
    if(numeroVisor.length >= QuantidadeNumerosTela){
        window.alert(MensagemLimiteVisor)
    } else {
        numeroVisor += '5'
        if(CaractereVirgula == true){
        var numeroFormatado = formatarNumero(Number(numeroVisor));
        visor.innerHTML = numeroFormatado;
        } else if (CaractereVirgula == false){
            visor.innerHTML += '5'
        }
    }
}

//número 4

function numero4(){

    numero0ouUndefined()
    //aqui adiciona no visor o número e verifica a quantidade numeros digitados
    if(numeroVisor.length >= QuantidadeNumerosTela){
        window.alert(MensagemLimiteVisor)
    } else {
        numeroVisor += '4'
        if(CaractereVirgula == true){
        var numeroFormatado = formatarNumero(Number(numeroVisor));
        visor.innerHTML = numeroFormatado;
        } else if (CaractereVirgula == false){
            visor.innerHTML += '4'
        }
    }
}


//número 3

function numero3(){

    numero0ouUndefined()
    //aqui adiciona no visor o número e verifica a quantidade numeros digitados
    if(numeroVisor.length >= QuantidadeNumerosTela){
        window.alert(MensagemLimiteVisor)
    } else {
        numeroVisor += '3'
        if(CaractereVirgula == true){
        var numeroFormatado = formatarNumero(Number(numeroVisor));
        visor.innerHTML = numeroFormatado;
        } else if (CaractereVirgula == false){
            visor.innerHTML += '3'
        }
    }
}

//número 2

function numero2(){

    numero0ouUndefined()
    //aqui adiciona no visor o número e verifica a quantidade numeros digitados
    if(numeroVisor.length >= QuantidadeNumerosTela){
        window.alert(MensagemLimiteVisor)
    } else {
        numeroVisor += '2'
        if(CaractereVirgula == true){
        var numeroFormatado = formatarNumero(Number(numeroVisor));
        visor.innerHTML = numeroFormatado;
        } else if (CaractereVirgula == false){
            visor.innerHTML += '2'
        }
    }
}

//número 1

function numero1(){
    numero0ouUndefined()
    //aqui adiciona no visor o número e verifica a quantidade numeros digitados
    if(numeroVisor.length >= QuantidadeNumerosTela){
        window.alert(MensagemLimiteVisor)
    } else {
        numeroVisor += '1'
        if(CaractereVirgula == true){
        var numeroFormatado = formatarNumero(Number(numeroVisor));
        visor.innerHTML = numeroFormatado;
        } else if (CaractereVirgula == false){
            visor.innerHTML += '1'
        }
    }
}

//número 0

function numero0(){

    numero0ouUndefined()
    //aqui adiciona no visor o número e verifica a quantidade numeros digitados
    if(numeroVisor.length >= QuantidadeNumerosTela){
        window.alert(MensagemLimiteVisor)
    } else {
        numeroVisor += '0'
        if(CaractereVirgula == true){
        var numeroFormatado = formatarNumero(Number(numeroVisor));
        visor.innerHTML = numeroFormatado;
        } else if (CaractereVirgula == false){
            visor.innerHTML += '0'
        }
    }
}

//virgula
function virgula(){
    if(numeroVisor.length == undefined || numeroVisor == 0){
        visor.innerHTML = '0'
        numeroVisor = '0'
    }
    if(numeroVisor.length >= QuantidadeNumerosTela && CaractereVirgula == true){
        window.alert(MensagemLimiteVisor)
    } else if (CaractereVirgula == true){
        visor.innerHTML += ','       
        numeroVisor += '.'
        CaractereVirgula = false
    }
}

//Adição soma dos números
function adicao(){
    //aqui verifica se as variaveis estao zeradas ou não

    if(calc1 === 0){
        calc1 = parseFloat(numeroVisor)
        numeroVisor = 0
        CaractereVirgula = true
    } else if(calc2 === 0) {
        calc2 = parseFloat(numeroVisor)
        numeroVisor = 0
        CaractereVirgula = true
    } 

    if(calc2 !== 0 ){
        console.log(calc2)
        contaAnterior.innerHTML = calc2 + ' +'
        
    } else{
        console.log(calc1)
        contaAnterior.innerHTML = calc1  + ' +'
    }

    //aqui se calc1 e calc2 tiverem valor diferente de '0' vai somar e dar o resultado
    if (calc1 !== 0 && calc2 !== 0){
        resultado = calc1 + calc2
        
        var numeroMaximo = QuantidadeNumerosTela + 1
        if(resultado.toString().length > numeroMaximo){
            LimiteDeNumerosVisor()
        } else{
            
            visor.innerHTML = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 0 }) 
           
        }
        calc1 = 0
        calc2 = resultado
    }
}
var result = true

function subtracao(){
        if(calc1 === 0 && result == true){
            calc1 = parseFloat(numeroVisor)
            numeroVisor = 0
            result = false
            CaractereVirgula = true
            console.log('valor calc1 ' + calc1 )
        }else if(calc2 === 0 || result == false) {
            calc2 = parseFloat(numeroVisor)
            numeroVisor = 0
            CaractereVirgula = true
            console.log('está entrando aqui?')
            console.log('valor calc2 ' + calc2)
        } 
    
        if(calc2 !== 0 ){
            console.log(calc2)
            contaAnterior.innerHTML = calc2 + ' -'
            
        } else{
            console.log(calc1)
            contaAnterior.innerHTML = calc1  + ' -'
        }
    
        //aqui se calc1 e calc2 tiverem valor diferente de '0' vai somar e dar o resultado
        if (calc1 !== 0 && calc2 !== 0 && resultado > 0){
            resultado = calc1 - calc2
            
            var numeroMaximo = QuantidadeNumerosTela + 1
            if(resultado.toString().length > numeroMaximo){
                LimiteDeNumerosVisor()
            } else{
                contaAnterior.innerHTML = calc1  + ' -'
                visor.innerHTML = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 0 }) 
               
            }{
                calc1 = resultado
                calc2 = 0
                result = true
                console.log('2')
            }

        }else{
            resultado = calc2 - calc1
            calc1 = 0
            calc2 = resultado
            result = true
            console.log('1')
            contaAnterior.innerHTML = calc2 + ' -'
            console.log('resultado: ' + resultado + ' calc1: ' + calc1 + ' calc2: ' + calc2)
            visor.innerHTML = resultado
        }
}

