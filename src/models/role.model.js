import { model, Schema } from "mongoose";

const roleSchema = new Schema(
  {
    rolename: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const RoleModel = model("Role", roleSchema);
