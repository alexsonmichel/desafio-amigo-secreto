let amigos = [];

function adicionarAmigo(){
   let nome = document.querySelector('input').value;
        if (nome == '') {
            alert('Por favor, insira um nome.')
            
        } else {
            amigos.push(nome);
            atualizarLista();


            limparCampo(); 
            
        }
        console.log(amigos);
}
function limparCampo() {
    campoNome = document.querySelector('input');
    campoNome.value = '';
}
function atualizarLista() {
    var lista = document.getElementById("listaAmigos"); // Seleciona a lista pelo ID
    lista.innerHTML='';  // Limpa a lista antes de adicionar novos elementos
     amigos.forEach(amigo => { // Percorre o array e adiciona cada nome como <li>
        const li = document.createElement("li"); // Cria um novo elemento <li>
        li.textContent =amigo; // Adiciona o nome do amigo dentro do <li>
        lista.append(li); // Adiciona o <li> dentro da <ul>
     });
    
}
function sortearAmigo(){
    let amigoId = parseInt(Math.random() * amigos.length); // para gerar um número decimal entre 0 e 1, Multiplicamos esse número pelo tamanho do array 
    document.getElementById('resultado').innerHTML = amigos[amigoId]; //seleciona o <p> do HTML onde exibiremos o nome, atualiza o texto dentro do <p> com o nome sorteado.
    

}
function resetar(){
    document.getElementById('resultado').innerHTML = ''; // seleciona o elemento do html pelo id, adcionar o valor ao elemento.
    amigos.splice(0, amigos.length); // esse metodo serve para apagar o que esta dentro da array.
    document.getElementById('listaAmigos').innerHTML = '';
}