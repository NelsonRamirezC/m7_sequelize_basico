import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js'


export const Producto = sequelize.define('productos', {
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.DECIMAL
    },
    stock: {
        type: DataTypes.INTEGER
    }
});