    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)+ min)
    }
    function eleccion(jugada) {
            let resultado = ""
            if(jugada == 1) {
                resultado = "piedra 👊"
            } else if(jugada == 2) {
                resultado = "papel 📃"
            } else if(jugada == 3) {
                resultado = "tijera ✂"
            } else {
                resultado = "Really? try again! come on!🙄"
            }
            return resultado
    }
    // 1 para piedra, 2 para papel, 3 para tijera
    let nombre = ""
    let jugador = 0
    let bot = 0
    let triunfos = 0
    let pérdidas = 0

    nombre = prompt("Digita tu nombre ")
    alert("Bienvenid@ al juego 🎮" + nombre)
    while (triunfos < 3 && pérdidas < 3) {
            bot = aleatorio(1,3)
            jugador = prompt("Elige 1 para piedra 👊, 2 para papel 📃, 3 para tijera ✂")

            alert("Bot elige: " + eleccion(bot))
            alert("Jugador elige: " + eleccion(jugador))  

        // Ronda de combate
        if(bot == jugador) {
            alert("Empate")
        } else if(jugador == 1 && bot == 3) {
            alert("Ganaste! 🥇")
            triunfos = triunfos + 1
        } else if(jugador == 2 && bot == 1) {
            alert("Ganaste! 🥇")
            triunfos = triunfos + 1
        } else if(jugador == 3 && bot == 2) {
            alert("Ganaste! 🥇")
            triunfos = triunfos + 1
        } else {
            alert("Perdiste! ")
            pérdidas = pérdidas + 1
        }
            
    }
            alert("Ganaste " + triunfos + " veces.  Perdiste " + pérdidas + " veces. ")