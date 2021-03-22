// Criando botões
function clicou(){
    document.getElementById("agradecmento").innerHTML = "<b> Obrigado! por clicar";
}
function redirecionar(){
    window.open("https://globallabs.academy");
}
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse AQUI!";
}
function load(){
    alert("Pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}
