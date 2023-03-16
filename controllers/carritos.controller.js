
import { Carrito } from '../models/Carro.model.js'

//gets
export const getCarrito = async (req, res) => {
    Carrito.findAll().then(carrito => {
        res.json({data: carrito });
    }).catch(error => {
        res.json({code: 500, message:"Error al cargar el carrito."});
    })
}

export const addProductoCarro = async (req, res) => {
    try{
        //id_cliente, id_producto, cantidad
        let {id_cliente, id_producto, cantidad} = req.body;
        await Carrito.create({id_cliente, id_producto, cantidad});
        res.send("Producto agregado correctamente.")
    }catch(error){
        console.log(error)
        res.status(500).send("Error al agregar el producto al carro.")
    }
}