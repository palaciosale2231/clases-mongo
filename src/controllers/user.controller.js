import { UserModel } from "../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const newUser = await UserModel.create({ username, email, password });

    return res.status(201).json({
      msg: "Usuario creado correctamente",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();

    return res.status(200).json({
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const users = await UserModel.findById(id);

    return res.status(200).json({
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { username },
      { returnDocument: "after" },
    );

    return res.status(200).json({
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};
