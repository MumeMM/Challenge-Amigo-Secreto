// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []
let recuadro = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');

function agregarAmigo() {

    let amigo = recuadro.value;
    let regex = /^[A-Za-zÁ-Úá-úñÑ ]+$/;

    if (amigo === "" || !regex.test(amigo)) {
        alert("Debe ingresar un nombre válido (solo letras y espacios).");
        estableceBlanco();
        return;
    }

    amigos.push(amigo);
    estableceBlanco();
    mostrarAmigos();

}

function estableceBlanco() {

    recuadro.value = "";
}

function mostrarAmigos() {

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }

}


function sortearAmigo() {

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    lista.innerHTML = "<li>" + `El amigo sorteado es ${amigoSorteado}` + "</li>";
    lista.value = "";
    amigos = [];
}
