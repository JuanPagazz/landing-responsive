const btnabrir = document.getElementById("abrir-menu")
const btncerrar = document.getElementById("cerrar-menu")
const nav = document.getElementById("nav")

btnabrir.addEventListener("click", () => {
    nav.classList.toggle("active")
})

btncerrar.addEventListener("click", () => {
    nav.classList.remove("active")
})

/* Menu hamburguesa */

const flechaI = document.getElementById("flecha-izquierda")
const flechaD = document.getElementById("flecha-derecha")
const tarjetas = document.querySelectorAll(".tarjetas")
const contenedorTarjetas = document.getElementById("carrusel-tarjetas")

let operacionf = 0
let contadorimg = 0
let anchoimg = 100 / tarjetas.length
let cantimg = tarjetas.length


function moverderecha() {
    contadorimg++
    if(contadorimg >= cantimg) {
        operacionf = 0
        contadorimg = 0
    } else {
        operacionf = operacionf + anchoimg
    }
    contenedorTarjetas.style.transform = `translateX(-${operacionf}%)`
    contenedorTarjetas.style.transition = "all .6s ease"

    actualizarPuntoActivo()
}

flechaD.addEventListener("click", () => {
    moverderecha()
    reiniciarContador()
})

flechaI.addEventListener("click", () => {
    contadorimg--
    if(contadorimg < 0) {
        contadorimg = cantimg - 1
        operacionf = anchoimg * contadorimg
    } else {
        operacionf = operacionf - anchoimg
    }
    contenedorTarjetas.style.transform = `translateX(-${operacionf}%)`
    contenedorTarjetas.style.transition = "all .6s ease"

    actualizarPuntoActivo()
    reiniciarContador()
})

const puntos = document.querySelectorAll(".punto")

puntos.forEach((punto, indice) => {
    puntos[indice].addEventListener("click", () => {
        contadorimg = indice
        operacionf = contadorimg * anchoimg

        contenedorTarjetas.style.transform = `translateX(-${operacionf}%)`
        contenedorTarjetas.style.transition = "all .6s ease"

        actualizarPuntoActivo()
        reiniciarContador()
    })
})

function actualizarPuntoActivo() {
    puntos.forEach((punto) => {
        punto.classList.remove("active")
    })

    puntos[contadorimg].classList.add("active")
}

let carruselAutomatico

function reiniciarContador() {
    clearInterval(carruselAutomatico)
    carruselAutomatico = setInterval(moverderecha, 5000)
}

reiniciarContador()

/* carrusel */