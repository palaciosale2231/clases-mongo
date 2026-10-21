import { Router } from "express";
import { createRole, getAllRoles } from "../controllers/role.controller.js";

export const roleRouter = Router();

// Ruta para crear un usuario
roleRouter.post("/roles", createRole);

// Ruta para traer todos los usuarios
roleRouter.get("/roles", getAllRoles);
