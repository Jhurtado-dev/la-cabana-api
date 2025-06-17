import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/db.js';
import userRouter from "./routes/userRoutes.js";
import tableRouter from "./routes/tableRoutes.js";
import foodRouter from "./routes/foodRoutes.js";
import ingredientRoutes from "./routes/ingredientRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/tables', tableRouter);
app.use('/api/food', foodRouter);
app.use('/api/ingredients', ingredientRoutes);


try {
  await db.authenticate();
  await db.sync();
  console.log('Conexión a la base de datos exitosa.');
} catch (error) {
  console.error('Error al conectar la base de datos:', error);
}

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
