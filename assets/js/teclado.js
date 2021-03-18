//Variables Globales
let pantalla = document.getElementById("pantalla"); //Div Pantalla
//Variable números
let btnBarra = document.getElementById("btnBarra");
let btnNum1 = document.getElementById("btnNum1");
let btnNum2 = document.getElementById("btnNum2");
let btnNum3 = document.getElementById("btnNum3");
let btnNum4 = document.getElementById("btnNum4");
let btnNum5 = document.getElementById("btnNum5");
let btnNum6 = document.getElementById("btnNum6");
let btnNum7 = document.getElementById("btnNum7");
let btnNum8 = document.getElementById("btnNum8");
let btnNum9 = document.getElementById("btnNum9");
let btnNum0 = document.getElementById("btnNum0");
//Variable Letras 1
let btnQ = document.getElementById("btnQ");
let btnW = document.getElementById("btnW");
let btnE = document.getElementById("btnE");
let btnR = document.getElementById("btnR");
let btnT = document.getElementById("btnT");
let btnY = document.getElementById("btnY");
let btnU = document.getElementById("btnU");
let btnI = document.getElementById("btnI");
let btnO = document.getElementById("btnO");
let btnP = document.getElementById("btnP");
//Variable Letras 2
let btnA = document.getElementById("btnA");
let btnS = document.getElementById("btnS");
let btnD = document.getElementById("btnD");
let btnF = document.getElementById("btnF");
let btnG = document.getElementById("btnG");
let btnH = document.getElementById("btnH");
let btnJ = document.getElementById("btnJ");
let btnK = document.getElementById("btnK");
let btnL = document.getElementById("btnL");
let btnÑ = document.getElementById("btnÑ");
//Variables letras 3
let btnZ = document.getElementById("btnZ");
let btnX = document.getElementById("btnX");
let btnC = document.getElementById("btnC");
let btnV = document.getElementById("btnV");
let btnB = document.getElementById("btnB");
let btnN = document.getElementById("btnN");
let btnM = document.getElementById("btnM");
let btnComa = document.getElementById("btnComa");
let btnPunto = document.getElementById("btnPunto");
let btnGuion = document.getElementById("btnGuion");
//Variables auxiliares 
let btnEspacio = document.getElementById("btnEspacio");
//Variables temporales
let num1Temp = "";
let letraTemp = "";

//Funciones Numeros
const btnNum1F = () => {
    pantalla.innerHTML = num1Temp + "1";
    num1Temp = num1Temp + "1";
}
const btnNum2F = () => {
    pantalla.innerHTML = num1Temp + "2"
    num1Temp = num1Temp + "2";
}
const btnNum3F = () => {
    pantalla.innerHTML = num1Temp + "3"
    num1Temp = num1Temp + "3";
}
const btnNum4F = () => {
    pantalla.innerHTML = num1Temp + "4"
    num1Temp = num1Temp + "4";
}
const btnNum5F = () => {
    pantalla.innerHTML = num1Temp + "5"
    num1Temp = num1Temp + "5";
}
const btnNum6F = () => {
    pantalla.innerHTML = num1Temp + "6"
    num1Temp = num1Temp + "6";
}
const btnNum7F = () => {
    pantalla.innerHTML = num1Temp + "7"
    num1Temp = num1Temp + "7";
}
const btnNum8F = () => {
    pantalla.innerHTML = num1Temp + "8"
    num1Temp = num1Temp + "8";
}
const btnNum9F = () => {
    pantalla.innerHTML = num1Temp + "9"
    num1Temp = num1Temp + "9";
}
const btnNum0F = () => {
    pantalla.innerHTML = num1Temp + "0"
    num1Temp = num1Temp + "0";
}







//Onclick
btnNum1.onclick = function () {
    btnNum1F();
}

btnNum2.onclick = function () {
    btnNum2F();
}
btnNum3.onclick = function () {
    btnNum3F();
}
btnNum4.onclick = function () {
    btnNum4F();
}
btnNum5.onclick = function () {
    btnNum5F();
}
btnNum6.onclick = function () {
    btnNum6F();
}
btnNum7.onclick = function () {
    btnNum7F();
}
btnNum8.onclick = function () {
    btnNum8F();
}
btnNum9.onclick = function () {
    btnNum9F();
}
btnNum0.onclick = function () {
    btnNum0F();
}