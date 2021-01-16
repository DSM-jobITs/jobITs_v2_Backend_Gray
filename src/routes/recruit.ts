import { Router } from "express";
import {
  authMiddleware,
  tryCatchMiddleware,
  adminCheckMiddleware,
} from "@/middlewares";
import validate, { Parameters } from "@/middlewares/validation";
import { RecruitController } from "@/controllers";
import { firstRecruitSchema, thirdRecruitSchema } from "@/schemas";
import { uploadMiddleware } from "@/middlewares/upload";

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

router.post(
  "/fourth/:id",
  authMiddleware,
  adminCheckMiddleware,
  //uploadMiddleware.array("file", 2),
  tryCatchMiddleware.Error(RecruitController.writeThirdRecruit)
);

export default router;
