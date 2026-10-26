function renderizarCatalogo(contenedor /* es la referencia del DOM */, productos /* es el arreglo */) {

    let productosHTML = ''

    productos.forEach((producto) => {
        productosHTML += `
    <article class="producto">
        <h3>${producto.nombre}</h3>
        <picture>
            <img src="${producto.imagen}" alt="${producto.nombre}">
        </picture>
        <p>
            ${producto.descripcion}
        </p>
        <ul>
            <li>
                Talles ${producto.talles[0]}
            </li>
            <li>
                Precio $ ${producto.precio}
            </li>
        </ul>
        <button>Agregar al carro</button>
    </article>
    `
    })

    contenedor.innerHTML = productosHTML

    ///
    return productosHTML
}

//Función de filtrado

// filtrarPorTalle(arreglo, talle){
//     //.filter 
//     //retornar arreglo filtrado
    
// }

export{renderizarCatalogo, filtrarPorTalle}