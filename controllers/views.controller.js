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
        res.render("inventario", {
            productos
        });
        
    } catch (error) {
        
    }
}

export const controllerUpdateProducto = async (req, res) => {
    let id = req.params.id;
    let producto = await  Producto.findByPk(id);
    res.render("updateProducto", {
        producto
    });
}
