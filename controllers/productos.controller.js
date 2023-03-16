import { Producto } from '../models/Producto.model.js'


//gets
export const getProductos = async (req, res) => {
    Producto.findAll().then(productos => {
        res.json({data: productos});
    }).catch(error => {
        res.json({code: 500, message:"Error al cargar los datos."});
    })
}

export const getProductosById = async (req, res) => {
    try {
        let id = req.params.id;
        let producto = await Producto.findByPk(id);
        if (producto === null) {
            res.status(400).send("No se ha encontrado el producto solicitado")
        } else {
            res.json({data: producto, message: "Producto encontrado correctamente."})
        }
    } catch (error) {
        res.status(500).send("Error al buscar el producto x")
    }
}


//posts
export const addProductos = async (req, res) => {
    try{
        let {nombre, descripcion, categoria, precio, stock} = req.body;
        let nuevoProducto = await Producto.create({nombre, descripcion, categoria, precio, stock});
        res.send("producto creado correctamente.")
    }catch(error){
        res.status(500).send("Error al guardar el producto.")
    }

}

//deletes
export const deleteProductosById = async (req, res) => {
    try {
        let id = req.params.id;
        await Producto.destroy({
            where: {
              id
            }
          });
          res.send("Producto eliminado correctamente.")
    
    } catch (error) {
        res.status(500).send("error al eliminar el producto.")
    }
}


//puts

export const updateProductos = async (req, res) => {
    try{
        let {id, nombre, descripcion, categoria, precio, stock} = req.body;
        let producto = await Producto.findByPk(id);
        if (producto == null) {
            res.status(400).send("El producto que intenta actualizar no existe.")
        } else {
        
            await Producto.update({ nombre, descripcion, categoria, precio, stock }, {
            where: {
              id
            }
          });
        res.send("producto actualizado correctamente.")
        }
    }catch(error){
        res.status(500).send("Error al actualizar el producto.")
    }
}