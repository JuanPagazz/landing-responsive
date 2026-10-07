const btnabrir = document.getElementById("abrir-menu")
const btncerrar = document.getElementById("cerrar-menu")
const nav = document.getElementById("nav")
const navButtons = document.querySelectorAll(".btnNav")

navButtons.forEach((navButton) => {
    navButton.addEventListener("click", () => {
        nav.classList.remove("active")
    })
})


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

function moverizquierda() {
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
}

flechaD.addEventListener("click", () => {
    moverderecha()
    reiniciarContador()
})

flechaI.addEventListener("click", () => {
    moverizquierda()
    reiniciarContador()
})

let inicioX = 0
let finalX = 0

contenedorTarjetas.addEventListener("touchstart", (evento) => {
    inicioX = evento.touches[0].clientX
})

contenedorTarjetas.addEventListener("touchend", (evento) => {
    finalX = evento.changedTouches[0].clientX

    const diferencia = inicioX - finalX

    if(Math.abs(diferencia) < 50) return

    if(diferencia > 0) {
        moverderecha()
    } else {
        moverizquierda()
    }

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
    serigrafia.classList.add("active")
    bordado.classList.remove("active")
    grabadoLaser.classList.remove("active")
    dtfTextil.classList.remove("active")
    dtfUV.classList.remove("active")
    vinil.classList.remove("active")

    serigrafia.scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
})

bordadoBtn.addEventListener("click", () => {
    serigrafia.classList.remove("active")
    bordado.classList.add("active")
    grabadoLaser.classList.remove("active")
    dtfTextil.classList.remove("active")
    dtfUV.classList.remove("active")
    vinil.classList.remove("active")
    
    bordado.scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
})

grabadoLaserBtn.addEventListener("click", () => {
    serigrafia.classList.remove("active")
    bordado.classList.remove("active")
    grabadoLaser.classList.add("active")
    dtfTextil.classList.remove("active")
    dtfUV.classList.remove("active")
    vinil.classList.remove("active")

    grabadoLaser.scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
}) 

dtfTextilBtn.addEventListener("click", () => {
    serigrafia.classList.remove("active")
    bordado.classList.remove("active")
    grabadoLaser.classList.remove("active")
    dtfTextil.classList.add("active")
    dtfUV.classList.remove("active")
    vinil.classList.remove("active")

    dtfTextil.scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
}) 

dtfUVBtn.addEventListener("click", () => {
    serigrafia.classList.remove("active")
    bordado.classList.remove("active")
    grabadoLaser.classList.remove("active")
    dtfTextil.classList.remove("active")
    dtfUV.classList.add("active")
    vinil.classList.remove("active")

    dtfUV.scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
}) 

vinilBtn.addEventListener("click", () => {
    serigrafia.classList.remove("active")
    bordado.classList.remove("active")
    grabadoLaser.classList.remove("active")
    dtfTextil.classList.remove("active")
    dtfUV.classList.remove("active")
    vinil.classList.add("active")

    vinil.scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
}) 