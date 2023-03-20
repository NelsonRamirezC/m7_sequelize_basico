import app from './app.js'
import { sequelize } from './database/database.js'

import './models/Producto.model.js'
import './models/Categoria.model.js'
import './models/Carro.model.js'
import './models/Usuario.model.js'
import './models/DetalleVenta.model.js'


//relaciones
import './models/relaciones.js'


const main = async () => {
    try{
        await sequelize.authenticate();
        console.log('Nos hemos conectado con éxito.');
        await sequelize.sync({ force: false, alter:true})
        let PORT = 3000;
        app.listen(PORT, () => console.log("Servidor escuchando en http://localhost:" + PORT));
    }catch(error){
        console.log("Ha ocurrido un error: ", error)
    }
    
}

main();