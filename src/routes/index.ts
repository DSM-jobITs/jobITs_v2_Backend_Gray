import { Router } from "express";
import recruit from "./recruit";

const router = Router();

router.use("/recruit", recruit);

export default router;
