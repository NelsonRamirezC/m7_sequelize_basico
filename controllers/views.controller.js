import { Producto } from '../models/Producto.model.js'


export const controllerHome = async (req, res) => {
    let productos = await  Producto.findAll();
    console.log(productos)
    res.render("home", {
        productos
    });
}