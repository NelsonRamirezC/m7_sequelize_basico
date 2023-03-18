
import { Carrito } from '../models/Carro.model.js'

import { CarroProductos } from '../models/CarroProducto.model.js'

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
        let {id_cliente, id_producto} = req.body;
        let idCliente = 1;
        const [carroCliente, created] = await Carrito.findOrCreate({
            raw: true,
            where: {id_cliente: idCliente },
            defaults: {
                id_cliente:idCliente
            }
        })

        console.log(carroCliente)

         const [carroConProductos, create2] = await CarroProductos.findOrCreate({
            where: {carritoId: carroCliente.id },
            defaults: {
                carritoId: carroCliente.id,
                productoId: id_producto,
                cantidad: 1
            }
        })

        if(!create2){
            carroConProductos.increment({cantidad:1})
        }

        res.status(201).json({message: "Producto agregado correctamente."})

    }catch(error){
        console.log(error)
        res.status(500).json({message: "al agregar el producto al carro."})
    }
}

export const deleteProductoCarro = async (req, res) => {
    try{
        //id_cliente, id_producto, cantidad
        let {id_cliente, id_producto} = req.body;
        let idCliente = 1;
        const carroCliente = await Carrito.findOne({
            raw: true,
            where: {id_cliente: idCliente },
        })

         const carroConProductos= await CarroProductos.findOne({
            where: {carritoId: carroCliente.id, productoId: id_producto}
        });

        if(carroConProductos == null){
            return res.status(400).json({message: "El producto que intenta restar no existe."})
        }
    
        await carroConProductos.decrement({cantidad: 1})

        if(carroConProductos.dataValues.cantidad == 0){
            carroConProductos.destroy();
            return res.status(201).json({message: "Ha quitado todos los productos de ese tipo."})
        }



        res.status(201).json({message: "Producto Eliminado correctamente."})

    }catch(error){
        console.log(error)
        res.status(500).json({message: "al agregar el producto al carro."})
    }
}