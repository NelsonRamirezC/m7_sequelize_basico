import { Producto } from './models/Producto.model.js'
import { Categoria } from './models/Categoria.model.js'
import { Usuario } from './models/Usuario.model.js'


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