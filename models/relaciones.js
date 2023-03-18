//REALIZAR IMPORTACIÓN DE MODELOS / ENTIDADES

import { Producto } from './Producto.model.js'
import { Categoria } from './Categoria.model.js'
import { CarroProductos } from './CarroProducto.model.js'
import { Carrito } from './Carro.model.js'



//RELACIONAR PRODUCTOS CON CATEGORIAS
//DONDE PRODUCTO TENGA UNA SOLA CATEGORIA

//una categoria TIENE MUCHO productos
Categoria.hasMany(Producto, {/* as: "productos",  */foreignKey: "categoriaId"});
Producto.belongsTo(Categoria/* , {as: "categoria"} */);


//LÓGICA DE MUCHOS A MUCHOS ENTRE PRODUCTOS Y CARRITO
//del lado de carro a tabla pivote (carro_productos)
Carrito.hasMany(CarroProductos)
CarroProductos.belongsTo(Carrito)

Producto.hasMany(CarroProductos)
CarroProductos.belongsTo(Producto)




