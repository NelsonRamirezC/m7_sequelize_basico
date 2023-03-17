import { Producto } from '../models/Producto.model.js'
import { Categoria } from '../models/Categoria.model.js'


export const controllerHome = async (req, res) => {
    let productos = await  Producto.findAll();
    console.log(productos)
    res.render("home", {
        productos
    });
}

export const controllerCategorias = async (req, res) => {
    let categorias = await  Categoria.findAll();
    console.log(categorias)
    res.render("categorias", {
        categorias
    });
}

export const controllerProductos = async (req, res) => {
    let id = req.params.id;
    let producto = await  Producto.findByPk(id);
    console.log(producto)
    res.render("productoDetails", {
        producto
    });
}

export const controllerInventario = async (req, res) => {
    try {
        let productos = await  Producto.findAll();
        let categorias = await  Categoria.findAll({
            raw:true
        });
        console.log(categorias)
        res.render("inventario", {
            productos,
            categorias
        });
        
    } catch (error) {
        
    }
}

export const controllerUpdateProducto = async (req, res) => {
    let id = req.params.id;
    let producto = await  Producto.findByPk(id,{
        raw:true,
        include: "categoria"
    });
    let nombreCategoria = producto["categoria.nombre"]
    let categorias = await  Categoria.findAll({
        raw:true
    });
    res.render("updateProducto", {
        producto,
        categorias,
        nombreCategoria
    });
}
