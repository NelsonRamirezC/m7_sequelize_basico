import express from 'express';
const router = express.Router();
import {controllerHome, controllerCategorias, controllerProductos} from '../controllers/views.controller.js'

router.get(["/", "/home", "/principal"], controllerHome, (req, res) =>{});

router.get("/categorias", controllerCategorias, (req, res) =>{});

router.get("/productos/:id", controllerProductos, (req, res) =>{});



export default router;