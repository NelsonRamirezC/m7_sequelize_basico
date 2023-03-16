import express from 'express';
const router = express.Router();
import {getCarrito, addProductoCarro } from '../controllers/carritos.controller.js'
//rutas
router.get("/carritos", getCarrito, (req, res) =>{});
router.post("/carritos", addProductoCarro, (req, res) =>{});

export default router;