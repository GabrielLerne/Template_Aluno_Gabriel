

function calcular() {
    var Velocidadeinicial = document.getElementById("V0").innerHTML
    var tempo = (Velocidadeinicial/10)
    var alturamax = (Velocidadeinicial*Velocidadeinicial)/20
    document.getElementById("resultado").innerHTML = "tempo " + tempo + "  altura " + alturamax
}