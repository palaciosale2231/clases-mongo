import { model, Schema, Types } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
      // unique: true
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const TaskModel = model("Task", taskSchema);
