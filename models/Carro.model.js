import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js'


export const Carrito = sequelize.define('carritos', {
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }

},{
    timestamps: false
  });