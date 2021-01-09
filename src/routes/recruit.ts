import { Router } from "express";
import {
  authMiddleware,
  tryCatchMiddleware,
  adminCheckMiddleware,
} from "@/middlewares";
import validate, { Parameters } from "@/middlewares/validation";
import { RecruitController } from "@/controllers";
import { firstRecruitSchema, thirdRecruitSchema } from "@/schemas";

const router = Router();

router.post(
  "/first",
  authMiddleware,
  adminCheckMiddleware,
  tryCatchMiddleware.Error(RecruitController.writeFirstRecruit)
);

router.post(
  "/second/:id",
  authMiddleware,
  adminCheckMiddleware,
  tryCatchMiddleware.Error(RecruitController.writeSecondRecruit)
);

router.post(
  "/third/:id",
  authMiddleware,
  adminCheckMiddleware,
  tryCatchMiddleware.Error(RecruitController.writeThirdRecruit)
);

export default router;
