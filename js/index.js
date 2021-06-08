var num1;
var num2;
var op;
var operacion;
var resultado = 0;
var historial;

function init(){
    var res = document.getElementById("res");
    var uno = document.getElementById("1");
    var dos = document.getElementById("2");
    var tres = document.getElementById("3");
    var cuatro = document.getElementById("4");
    var cinco = document.getElementById("5");
    var seis = document.getElementById("6");
    var siete = document.getElementById("7");
    var ocho = document.getElementById("8");
    var nueve = document.getElementById("9");
    var cero = document.getElementById("0");
    var suma = document.getElementById("sumar");
    var resta = document.getElementById("restar");
    var multiplicacion = document.getElementById("multiplicar");
    var divicion = document.getElementById("dividir");
    var igual = document.getElementById("igual");
    var punto = document.getElementById("punto");
    var eliminar = document.getElementById("eliminar");
    var lista = document.getElementById("list");

    uno.onclick = function(e){
        res.textContent = res.textContent + "1"
    }
    dos.onclick = function(e){
        res.textContent = res.textContent + "2"
    }
    tres.onclick = function(e){
        res.textContent = res.textContent + "3"
    }
    cuatro.onclick = function(e){
        res.textContent = res.textContent + "4"
    }
    cinco.onclick = function(e){
        res.textContent = res.textContent + "5"
    }
    seis.onclick = function(e){
        res.textContent = res.textContent + "6"
    }
    siete.onclick = function(e){
        res.textContent = res.textContent + "7"
    }
    ocho.onclick = function(e){
        res.textContent = res.textContent + "8"
    }
    nueve.onclick = function(e){
        res.textContent = res.textContent + "9"
    }
    cero.onclick = function(e){
        res.textContent = res.textContent + "0"
    }
    punto.onclick = function(e){
        res.textContent = res.textContent + ".";
    }

    //operaciones

    suma.onclick = function(e){
        num1 = res.textContent;
        op = "+";
        limpiar();
    }
    resta.onclick = function(e){
        num1 = res.textContent;
        op = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        num1 = res.textContent;
        op = "*";
        limpiar();
    }
    divicion.onclick = function(e){
        num1 = res.textContent;
        op = "/";
        limpiar();
    }
    igual.onclick = function(e){
        num2 = res.textContent;
        operacion = num1 + ' ' + op + ' ' + num2;
        
        resolver();
        lista.textContent = operacion + ' = ' + resultado;
    }
    eliminar.onclick = function(e){
        restaurar();
    }
}

function limpiar(){
    res.textContent = "";
}

function restaurar(){
    limpiar();
    num1 = 0;
    num2 = 0;
    op = "";
}

function resolver(){
    switch(op){
        case "+":
            resultado = parseFloat(num1) + parseFloat(num2);
            break;
        case "-":
            resultado = parseFloat(num1) - parseFloat(num2);
            break;
        case "*":
            resultado = parseFloat(num1) * parseFloat(num2);
            break;
        case "/":
            resultado = parseFloat(num1) / parseFloat(num2);
            break;
    }
    res.textContent = resultado;
}

function addlocalstorage(value){
    var data = JSON.parse(localStorage.getItem);
    return data;
}