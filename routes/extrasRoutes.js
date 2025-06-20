import express from "express";
import {
  createExtra,
  updateExtra,
  deleteExtra,
  getAllExtras
} from "../controllers/extraController.js";

const router = express.Router();

router.get("/", getAllExtras); 
router.post("/", createExtra);
router.put("/:id", updateExtra);
router.delete("/:id", deleteExtra);

export default router;
