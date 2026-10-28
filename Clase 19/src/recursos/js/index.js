// import productos from './productos.js' // No nombrada
import {productosMascotas, categorias} from './productos.js' // Nombrada
import {renderizarCatalogo} from './funciones.js'

// Referenciamos un elemento del DOM
const contenedorProductos = document.getElementById("contenedor-productos")

// Renderizamos
renderizarCatalogo(contenedorProductos, productosMascotas)