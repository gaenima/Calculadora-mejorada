const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;
var b1 = document.getElementsByName('borra1')[0];

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function selectOperacion(ope){
    if(opeActual === '') return;
    if(opeAnterior !== ''){
        calcular()
    }
    operacion = ope.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(operacion=='√'){
        opeActual = Math.sqrt(opeAnterior);
    }
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        case '%':
            calculo = anterior *  actual / 100;
            break; 
        
        default:
              return;  
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';

}

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
}
b1.addEventListener('click', function(){
    borrarUno();
    actualizarDisplay();
})

function borrarUno(){
    opeActual = opeActual.substring(0, opeActual.length - 1);
}

clear();
var h1 = document.getElementsByTagName('h1')
h1[0].innerHTML = 'Master Calculation!!!!!';
console.log(h1);


