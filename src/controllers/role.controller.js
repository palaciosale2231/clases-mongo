import { RoleModel } from "../models/role.model.js";

export const createRole = async (req, res) => {
  try {
    const { rolename } = req.body;

    const newRole = await RoleModel.create({
      rolename,
    });

    return res.status(201).json({
      msg: "Rol creado correctamente",
      data: newRole,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};

export const getAllRoles = async (req, res) => {
  try {
    const roles = await RoleModel.find();

    return res.status(200).json({
      data: roles,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};
