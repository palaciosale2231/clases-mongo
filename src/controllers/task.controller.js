import { TaskModel } from "../models/task.model.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, author } = req.body;

    const newTask = await TaskModel.create({
      title,
      description,
      author,
    });

    return res.status(201).json({
      msg: "Tarea creada correctamente",
      data: newTask,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find().populate("author", "username -_id");

    // const tasks = await TaskModel.find().populate({
    //   path: "author",
    //   select: "username -_id",
    // });

    return res.status(200).json({
      data: tasks,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};
