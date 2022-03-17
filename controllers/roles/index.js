import express from "express";
import createRole  from "./create.js";

const rolesRouter = express.Router();

rolesRouter.post('/', createRole);

export default rolesRouter;