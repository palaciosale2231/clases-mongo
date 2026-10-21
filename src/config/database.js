import mongoose from "mongoose";

export const startDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/db-mongoose");

    // await mongoose.connection.dropCollection("users");
    // await mongoose.connection.dropDatabase();

    console.log("Conectado a la base de datos correctamente");
  } catch (error) {
    console.log("No se pudo conectar a la base de datos", error);
  }
};
