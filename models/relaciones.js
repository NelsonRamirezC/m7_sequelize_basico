//REALIZAR IMPORTACIÓN DE MODELOS / ENTIDADES

import { Producto } from './Producto.model.js'
import { Categoria } from './Categoria.model.js'


//RELACIONAR PRODUCTOS CON CATEGORIAS
//DONDE PRODUCTO TENGA UNA SOLA CATEGORIA

//una categoria TIENE MUCHO productos
Categoria.hasMany(Producto, {as: "productos", foreignKey: "categoriaId"});
Producto.belongsTo(Categoria, {as: "categoria"});



