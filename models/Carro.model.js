import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js'


export const Carrito = sequelize.define('carritos', {

},{
    timestamps: false
  });