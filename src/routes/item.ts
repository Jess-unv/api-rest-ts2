import { Request, Response, Router } from "express";
import { getItem, getItems } from "../controllers/item";

const router = Router();
/**
 * http://localhost:3002/items [GET]
 */
router.get("/", getItems)
router.get("/:id", getItem)
router.post("/", getItem)
router.put("/:id", getItem)
router.delete("/:id", getItem)

export { router };