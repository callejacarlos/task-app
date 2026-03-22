import { Router } from "express";
import {
  createTask,
  createTaskWithBuilder,
  cloneTask
} from "../controllers/task.controller.js";

const router = Router();

router.post("/", createTask); // Factory
router.post("/builder", createTaskWithBuilder); // Builder
router.post("/:id/clone", cloneTask); // Prototype

export default router;