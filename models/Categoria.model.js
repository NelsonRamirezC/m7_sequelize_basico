import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js'


export const Categoria = sequelize.define('categorias', {
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }

    }
},{
    timestamps: false
  });