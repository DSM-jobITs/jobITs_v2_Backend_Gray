import { Router } from "express";
import {
  authMiddleware,
  tryCatchMiddleware,
  adminCheckMiddleware,
} from "@/middlewares";
import validate, { Parameters } from "@/middlewares/validation";
import { RecruitController } from "@/controllers";
import { firstRecruitSchema } from "@/schemas";

const router = Router();

router.post(
  "/first",
  authMiddleware,
  adminCheckMiddleware,
  // validate({ schema: firstRecruitSchema, parameters: Parameters.BODY }),
  tryCatchMiddleware.Error(RecruitController.writeFirstRecruit)
);

router.post(
  "/second/:id",
  authMiddleware,
  adminCheckMiddleware,
  // validate({ schema: firstRecruitSchema, parameters: Parameters.BODY }),
  tryCatchMiddleware.Error(RecruitController.writeSecondRecruit)
);

export default router;
