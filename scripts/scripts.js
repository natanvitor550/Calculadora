let numeroBotao1 = "";
let numeroBotao2 = "";
let numeroAtual = 1;
let operacao = "";
let resultadoFinal = "";
let tipoOperacao = 0;

function soma(){
operacao = "+";
textoTela()
numeroAtual = 2;
tipoOperacao = 1;
}
function subtracao(){
operacao = "-";
textoTela()
numeroAtual = 2;
tipoOperacao = 2;
}
function multiplicacao(){
operacao = "*";
textoTela()
numeroAtual = 2;
tipoOperacao = 3;
}
function divisao(){
operacao = "/";
textoTela()
numeroAtual = 2;
tipoOperacao = 4;
}
function resultado(){
    numeroBotao1 = parseFloat(numeroBotao1);
    numeroBotao2 = parseFloat(numeroBotao2);
    switch(tipoOperacao){
        case 1:
        resultado = numeroBotao1 + numeroBotao2;
        break;
        case 2:
            resultado = numeroBotao1 - numeroBotao2
            break;
            case 3:
                resultado = numeroBotao1 * numeroBotao2;
                break;
                case 4:
                    resultado = numeroBotao1 / numeroBotao2;
                    break;
                }
    textoTela()
numeroBotao1 = "";
numeroBotao2 = "";
numeroAtual = 1;
}
function textoTela(){
    document.getElementById("texto").innerHTML = numeroBotao1 + tipoOperacao + numeroBotao2 + " = " + resultadoFinal;
}
function botao1(){
if (numeroAtual == 1)
    {
    numeroBotao1 += 1;
    textoTela(numeroBotao1);
}else{
    numeroBotao2 += 1;
    textoTela(); 
}
}
function botao2(){
if (numeroAtual == 1)
    {
    numeroBotao1 += 2;
    textoTela(numeroBotao1);
}else{
    numeroBotao2 += 2;
    textoTela();
}
}
function botao3(){
if (numeroAtual == 1)
    {
    numeroBotao1 += 3;
    textoTela(numeroBotao1);
}else{
    numeroBotao2 += 3;
    textoTela();
}

}
function botao4(){
if (numeroAtual == 1)
    {
    numeroBotao1 += 4;
    textoTela(numeroBotao1);
}else{
    numeroBotao2 += 4;
    textoTela();
}
}
function botao5(){
if (numeroAtual == 1)
    {
    numeroBotao1 += 5;
    textoTela(numeroBotao1);
}else{
    numeroBotao2 += 5;
    textoTela();
}
}
function botao6(){
if (numeroAtual == 1)
    {
    numeroBotao1 += 6;
    textoTela(numeroBotao1);
}else{
    numeroBotao2 += 6;
    textoTela();
}
}
function botao7(){
if (numeroAtual == 1)
    {
    numeroBotao1 += 7;
    textoTela(numeroBotao1);
}else{
    numeroBotao2 += 7;
    textoTela();
}
}
function botao8(){
if (numeroAtual == 1)
    {
    numeroBotao1 += 8;
    textoTela(numeroBotao1);
}else{
    numeroBotao2 += 8;
    textoTela();
}
}
function botao9(){
if (numeroAtual == 1)
    {
    numeroBotao1 += 9;
    textoTela(numeroBotao1);
}else{
    numeroBotao2 += 9;
    textoTela();
}
}
function botao0(){
if (numeroAtual == 1)
    {
    numeroBotao1 += 0;
    textoTela(numeroBotao1);
}else{
    numeroBotao2 += 0;
    textoTela();
}
}
