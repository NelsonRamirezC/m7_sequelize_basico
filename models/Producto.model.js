import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js'


export const Producto = sequelize.define('productos', {
    nombre: {
        type: DataTypes.STRING(100),

    },
    descripcion: {
        type: DataTypes.STRING(500)
    },
    categoria: {
        type: DataTypes.STRING(50)
    },
    precio: {
        type: DataTypes.DECIMAL
    },
    stock: {
        type: DataTypes.INTEGER
    }
},{
    timestamps: false
  });