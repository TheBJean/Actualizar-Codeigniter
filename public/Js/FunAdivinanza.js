let numeroSecreto = Math.floor(Math.random() * 100) + 1;

function adivinar() {
    const numInput = document.getElementById("numInput").value;
    const resultado = document.getElementById("result");
    if (numInput < numeroSecreto) {
        resultado.textContent = "El número es muy bajo";
    } else if (numInput > numeroSecreto) {
        resultado.textContent = "El número es muy alto";
    } else {
        resultado.textContent = "Has adivinado el número";
    }
    document.getElementById("numInput").value =""
}

function reiniciar() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    document.getElementById("numInput").value = '';
    document.getElementById("result").textContent = '';
}
