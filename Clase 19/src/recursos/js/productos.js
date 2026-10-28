const productosMascotas = [
  {
    nombre: "Collar ajustable para perros",
    imagen: "./recursos/imagenes/productos/perro_correa.jpg",
    descripcion: "Cómodo collar ajustable de nailon resistente para paseos seguros diarios.",
    talles: ["S", "M", "L"],
    precio: 15.99
  },
  {
    nombre: "Correa extensible automática",
    imagen: "https://ejemplo.com/img/correa.jpg",
    descripcion: "Correa retráctil resistente con freno seguro y diseño ergonómico moderno.",
    talles: ["M", "L"],
    precio: 24.50
  },
  {
    nombre: "Cama acolchada para mascotas",
    imagen: "https://ejemplo.com/img/cama.jpg",
    descripcion: "Suave cama redonda y cálida ideal para descanso de perros.",
    talles: ["S", "M", "L"],
    precio: 35.00
  },
  {
    nombre: "Arnés antitirones acolchado",
    imagen: "https://ejemplo.com/img/arnes.jpg",
    descripcion: "Arnés cómodo que evita tirones durante los paseos con mascotas.",
    talles: ["S", "M", "L"],
    precio: 22.99
  },
  {
    nombre: "Abrigo impermeable para lluvia",
    imagen: "https://ejemplo.com/img/abrigo.jpg",
    descripcion: "Chaqueta impermeable con capucha para proteger perros en días lluviosos.",
    talles: ["S", "M", "L"],
    precio: 18.75
  },
  {
    nombre: "Suéter tejido de lana",
    imagen: "https://ejemplo.com/img/sueter.jpg",
    descripcion: "Cálido suéter tejido a mano perfecto para días de invierno.",
    talles: ["S", "M"],
    precio: 16.50
  },
  {
    nombre: "Pañuelo bandana estilizado",
    imagen: "https://ejemplo.com/img/bandana.jpg",
    descripcion: "Bandana de algodón suave con estampados divertidos para mascotas felices.",
    talles: ["S", "M", "L"],
    precio: 8.99
  },
  {
    nombre: "Chaleco salvavidas canino",
    imagen: "https://ejemplo.com/img/salvavidas.jpg",
    descripcion: "Chaleco flotador ajustable con asa resistente para seguridad en piscina.",
    talles: ["M", "L"],
    precio: 29.99
  },
  {
    nombre: "Disfraz melena de león",
    imagen: "https://ejemplo.com/img/disfraz.jpg",
    descripcion: "Divertida peluca con orejas para transformar a tu perro fácilmente.",
    talles: ["M", "L"],
    precio: 14.25
  },
  {
    nombre: "Botitas protectoras antideslizantes",
    imagen: "https://ejemplo.com/img/botitas.jpg",
    descripcion: "Zapatos protectores de goma antideslizante para cuidar las patas caninas.",
    talles: ["S", "M", "L"],
    precio: 19.99
  }
];

const categorias = [
    'Ropa'
]

// Dos maneras de exportar
// 1 exportación no nombrada -> solo puede haber una sola
export default productosMascotas
// 2 exportacion nombrada -> las necesarias
export {
    productosMascotas,
    categorias
}