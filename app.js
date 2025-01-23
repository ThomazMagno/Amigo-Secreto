let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo && !amigos.includes(nomeAmigo)) {
        
        amigos.push(nomeAmigo);

        
        const li = document.createElement("li");
        li.textContent = nomeAmigo;
        listaAmigos.appendChild(li);

        
        inputAmigo.value = "";
    } else if (amigos.includes(nomeAmigo)) {
        alert("Esse nome já foi adicionado.");
    } else {
        alert("Por favor, digite um nome válido.");
    }
}


function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    
    const sorteio = realizarSorteio(amigos);

    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    for (const [amigo, amigoSecreto] of Object.entries(sorteio)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${amigoSecreto}`;
        resultado.appendChild(li);
    }
}


function realizarSorteio(participantes) {
    let resultados = {};
    let sorteados = [...participantes];

    participantes.forEach(participante => {
        let possiveis = sorteados.filter(sorteado => sorteado !== participante);

        if (possiveis.length === 0) {
            
            return realizarSorteio(participantes);
        }

        let amigoIndex = Math.floor(Math.random() * possiveis.length);
        let amigo = possiveis[amigoIndex];

        resultados[participante] = amigo;
        sorteados = sorteados.filter(sorteado => sorteado !== amigo);
    });

    return resultados;
}
