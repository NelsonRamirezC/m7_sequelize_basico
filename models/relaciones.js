//REALIZAR IMPORTACIÓN DE MODELOS / ENTIDADES

import { Producto } from './Producto.model.js'
import { Categoria } from './Categoria.model.js'
import { CarroProductos } from './CarroProducto.model.js'
import { Carrito } from './Carro.model.js'
import { Usuario } from './Usuario.model.js'
import { Venta } from './Venta.model.js'
import { DetalleVenta } from './DetalleVenta.model.js'





//RELACIONAR PRODUCTOS CON CATEGORIAS
//DONDE PRODUCTO TENGA UNA SOLA CATEGORIA

//una categoria TIENE MUCHO productos
Categoria.hasMany(Producto);
Producto.belongsTo(Categoria);


//LÓGICA DE MUCHOS A MUCHOS ENTRE PRODUCTOS Y CARRITO
//del lado de carro a tabla pivote (carro_productos)
Carrito.hasMany(CarroProductos)
CarroProductos.belongsTo(Carrito)

//relación de producto con tabla carro_productos
//producto está en muchos registros de carro_productos
Producto.hasMany(CarroProductos)
//Los registros de carro_productos pertenecen a un producto.
CarroProductos.belongsTo(Producto)


//relación de usuario con carrito
//usuarios está presente en muchos registros de la tabla carrito
Usuario.hasMany(Carrito)
//los registros de carrito pertenecen a 1 solo usuario
Carrito.belongsTo(Usuario)


//relación usuario - venta

//usuario tiene muchas ventas
Usuario.hasMany(Venta)
Venta.belongsTo(Usuario)

//relación entre detalle_ventas con ventas
//venta está presente en muchos detalles
Venta.hasMany(DetalleVenta)
//los detalles de la venta pertenecen a una venta
DetalleVenta.belongsTo(Venta)


//relación entre detalle_ventas y productos
//productos están presentes en muchos detalles venta
Producto.hasMany(DetalleVenta)
//cada detalle venta pertenece a un producto.
DetalleVenta.belongsTo(Producto)










const usuarios = [
    { nombre: "Pedro", email: "pedro@mail.com", password: '123456' },
    { nombre: "Carlos", email: "carlos@mail.com", password: '123456' },
    { nombre: "juan", email: "juan@mail.com", password: '123456' }
]

const categorias = [
    { nombre: "Deportivas" },
    { nombre: "Escolares" },

]

const productos = [
    { nombre: "Zapatilla 1", descripcion: "descripción zapatilla 1", precio: 25000, stock: 10, categoria:1},
    { nombre: "Zapatilla 2", descripcion: "descripción zapatilla 3", precio: 25000, stock: 10, categoria:1},
    { nombre: "Zapatilla 3", descripcion: "descripción zapatilla 3", precio: 25000, stock: 10, categoria:1}
]



 const cargarUsuarios = async () => {
    for (let index = 0; index < usuarios.length; index++) {
        const [user, created] = await Usuario.findOrCreate({
            where: { nombre: usuarios[index].nombre },
            defaults: {
              nombre: usuarios[index].nombre,
              email: usuarios[index].email,
              password: usuarios[index].password
            }
          });
    }
 }

 const cargarCategoriasYProductos = async () => {
    for (let index = 0; index < categorias.length; index++) {
        const [categoria, created] = await Categoria.findOrCreate({
            where: { nombre: categorias[index].nombre },
            defaults: {
              nombre: categorias[index].nombre,
            }
          });
    }
    for (let index = 0; index < productos.length; index++) {
        const [producto, created] = await Producto.findOrCreate({
            where: { nombre: productos[index].nombre },
            defaults: {
              nombre: productos[index].nombre,
              descripcion: productos[index].descripcion,
              precio: productos[index].precio,
              stock: productos[index].stock,
              categoriaId: productos[index].categoria,
            }
          });
    }
 }


 const main = () => {
    cargarUsuarios();
    cargarCategoriasYProductos();
 }
 main();
