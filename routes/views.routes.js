import express from 'express';
const router = express.Router();
import {controllerHome} from '../controllers/views.controller.js'

router.get(["/", "/home", "/principal"], controllerHome, (req, res) =>{});



export default router;