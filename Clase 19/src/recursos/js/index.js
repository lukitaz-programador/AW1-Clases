import { URL_PRODUCTOS } from './config.js'
// import productos from './productos.js' // No nombrada
//import {productosMascotas, categorias} from './productos.js' // Nombrada
import { obtenerDatos } from './productos.js'
import { renderizarCatalogo, filtrarPorTalle } from './funciones.js'

// obtener los datos de productos almacenados en un JSON

// Referenciamos un elemento del DOM
const contenedorProductos = document.getElementById("contenedor-productos")
const eventoBoton = document.getElementById('evento-boton')
const dialogo = document.getElementById('dialogo')
const carro = document.getElementById('carro')
const botonAbrirCarrito = document.getElementById('abrir-carrito')
const dialogoCarrito = document.getElementById('dialogo-carrito')
const contenedorCarrito = document.getElementById('productos-carrito')
const totalCarrito = document.getElementById('total-carrito')

if (contenedorProductos) {
    const productosMascotas = await obtenerDatos(URL_PRODUCTOS)
    const productosCarrito = JSON.parse(localStorage.getItem('carritoCantidad')) || []

    carro.textContent = productosCarrito.length

    if (eventoBoton && dialogo) {
        eventoBoton.addEventListener('click', () => dialogo.showModal())
    }

    const productosFiltrados = filtrarPorTalle(productosMascotas, 'S')
    renderizarCatalogo(contenedorProductos, productosFiltrados)

    const guardarCarrito = () => {
        localStorage.setItem('carritoCantidad', JSON.stringify(productosCarrito))
        carro.textContent = productosCarrito.length
        renderizarCarrito()
    }

        const renderizarCarrito = () => {
            const cantidades = productosCarrito.reduce((acumulado, id) => {
                acumulado[id] = (acumulado[id] || 0) + 1
                return acumulado
            }, {})
            const productosEnCarrito = productosMascotas.filter((producto) => cantidades[producto.id])

            if (productosEnCarrito.length === 0) {
                contenedorCarrito.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío.</p>'
                totalCarrito.textContent = ''
            return
        }

        contenedorCarrito.innerHTML = productosEnCarrito.map((producto) => `
            <article class="item-carrito">
                <div>
                    <h3>${producto.nombre}</h3>
                    <p>${cantidades[producto.id]} × $${Number(producto.precio).toFixed(2)}</p>
                </div>
                <button class="quitar-producto" type="button" data-id="${producto.id}">Quitar uno</button>
            </article>
        `).join('')

        const total = productosEnCarrito.reduce((suma, producto) => {
            return suma + Number(producto.precio) * cantidades[producto.id]
        }, 0)
        totalCarrito.textContent = `Total: $${total.toFixed(2)}`
    }

    contenedorProductos.addEventListener('click', (evento) => {
        const boton = evento.target.closest('.boton-agregar-carro')
        if (!boton) return

        productosCarrito.push(Number(boton.dataset.id))
        guardarCarrito()
    })

    botonAbrirCarrito.addEventListener('click', () => {
        renderizarCarrito()
        dialogoCarrito.showModal()
    })

    contenedorCarrito.addEventListener('click', (evento) => {
        const boton = evento.target.closest('.quitar-producto')
        if (!boton) return

        const indice = productosCarrito.indexOf(Number(boton.dataset.id))
        if (indice !== -1) productosCarrito.splice(indice, 1)
        guardarCarrito()
    })

    renderizarCarrito()
}