import { Router } from "express";
import { createTask, getAllTasks } from "../controllers/task.controller.js";

export const taskRouter = Router();

// Ruta para crear un usuario
taskRouter.post("/tasks", createTask);

// Ruta para traer todos los usuarios
taskRouter.get("/tasks", getAllTasks);
