import express from 'express'
import cors from 'cors';
import { create } from 'express-handlebars'

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//importación de rutas
import viewsRoutes from './routes/views.routes.js';
import productosRoutes from './routes/productos.routes.js';
import categoriasRoutes from './routes/categorias.routes.js';
import carritosRoutes from './routes/carritos.routes.js';

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

//middleware de rutas

app.use(viewsRoutes);
app.use("/api/v1/", productosRoutes);
app.use("/api/v1/", categoriasRoutes);
app.use("/api/v1/", carritosRoutes);

app.listen(3001, () => console.log("servidor en http://localhost:3001"))

//CONFIGURACIÓN HANDLEBARS
const hbs = create({
	partialsDir: [
		"views/partials/",
	],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

export default app;