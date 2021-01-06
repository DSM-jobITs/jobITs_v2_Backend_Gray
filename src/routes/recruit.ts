import { Router } from "express";
import {
  authMiddleware,
  tryCatchMiddleware,
  adminCheckMiddleware,
} from "@/middlewares";
import validate, { Parameters } from "@/middlewares/validation";
import { writeFirstRecruit } from "@/controllers";
import { firstRecruitSchema } from "@/schemas";

const router = Router();

router.post(
  "/first",
  authMiddleware,
  adminCheckMiddleware,
  validate({ schema: firstRecruitSchema, parameters: Parameters.BODY }),
  tryCatchMiddleware.Error(writeFirstRecruit)
);

export default router;
