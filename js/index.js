const btnabrir = document.getElementById("abrir-menu")
const btncerrar = document.getElementById("cerrar-menu")
const nav = document.getElementById("nav")

btnabrir.addEventListener("click", () => {
    nav.classList.toggle("active")
})

btncerrar.addEventListener("click", () => {
    nav.classList.remove("active")
})

/* ------------------------------------------------------------------------------------------------------- */

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

/* ------------------------------------------------------------------------------------------------------- */

const btnVerMas = document.getElementById("verCat")
const btnVerMenos = document.getElementById("verMenosCat")
const catalogosVer = document.querySelectorAll(".catalogoVer")

btnVerMas.addEventListener("click", () => {
    btnVerMas.style.display = "none"
    btnVerMenos.style.display = "block"
    catalogosVer.forEach((catalago) => {
        catalago.style.display = "flex"
    })
})

btnVerMenos.addEventListener("click", () => {
    btnVerMas.style.display = "block"
    btnVerMenos.style.display = "none"
    catalogosVer.forEach((catalago) => {
        catalago.style.display = "none"
    })
})

/* ---------------------------------------------------------------------------------------------------------- */

const serigrafiaBtn = document.getElementById("serigrafia")
const bordadoBtn = document.getElementById("bordado")
const grabadoLaserBtn = document.getElementById("grabadoLaser")
const dtfTextilBtn = document.getElementById("dtfTextil")
const dtfUVBtn = document.getElementById("dtfUV")
const vinilBtn = document.getElementById("vinil")

const serigrafia = document.querySelector(".serigrafia")
const bordado = document.querySelector(".bordado")
const grabadoLaser = document.querySelector(".grabadoLaser")
const dtfTextil = document.querySelector(".dtfTextil")
const dtfUV = document.querySelector(".dtfUV")
const vinil = document.querySelector(".vinil")

serigrafiaBtn.addEventListener("click", () => {
    serigrafia.classList.toggle("active")
    bordado.classList.remove("active")
    grabadoLaser.classList.remove("active")
    dtfTextil.classList.remove("active")
    dtfUV.classList.remove("active")
    vinil.classList.remove("active")
})

bordadoBtn.addEventListener("click", () => {
    serigrafia.classList.remove("active")
    bordado.classList.toggle("active")
    grabadoLaser.classList.remove("active")
    dtfTextil.classList.remove("active")
    dtfUV.classList.remove("active")
    vinil.classList.remove("active")
})

grabadoLaserBtn.addEventListener("click", () => {
    serigrafia.classList.remove("active")
    bordado.classList.remove("active")
    grabadoLaser.classList.toggle("active")
    dtfTextil.classList.remove("active")
    dtfUV.classList.remove("active")
    vinil.classList.remove("active")
}) 

dtfTextilBtn.addEventListener("click", () => {
    serigrafia.classList.remove("active")
    bordado.classList.remove("active")
    grabadoLaser.classList.remove("active")
    dtfTextil.classList.toggle("active")
    dtfUV.classList.remove("active")
    vinil.classList.remove("active")
}) 

dtfUVBtn.addEventListener("click", () => {
    serigrafia.classList.remove("active")
    bordado.classList.remove("active")
    grabadoLaser.classList.remove("active")
    dtfTextil.classList.remove("active")
    dtfUV.classList.toggle("active")
    vinil.classList.remove("active")
}) 

vinilBtn.addEventListener("click", () => {
    serigrafia.classList.remove("active")
    bordado.classList.remove("active")
    grabadoLaser.classList.remove("active")
    dtfTextil.classList.remove("active")
    dtfUV.classList.remove("active")
    vinil.classList.toggle("active")
}) 