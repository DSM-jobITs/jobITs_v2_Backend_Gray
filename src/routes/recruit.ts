import { Router } from "express";
import validate from "@/middlewares/validation";
import {
  authMiddleware,
  tryCatchMiddleware,
  adminCheckMiddleware,
  Parameters,
  uploadMiddleware,
} from "@/middlewares";
import { RecruitController } from "@/controllers";
import { addIntroductions, writeRecruitSchema } from "@/schemas";

const router = Router();

export default (app: Router) => {
  const recruitController: RecruitController = new RecruitController();

  app.use("/recruit", router);

  router.post(
    "/",
    authMiddleware,
    adminCheckMiddleware,
    validate({ schema: writeRecruitSchema, parameters: Parameters.BODY }),
    tryCatchMiddleware.Error(recruitController.writeRecruitRequest)
  );

  router.post(
    "/introduction/:no",
    authMiddleware,
    adminCheckMiddleware,
    validate({ schema: addIntroductions, parameters: Parameters.PARAM }),
    uploadMiddleware.array("files", 2),
    tryCatchMiddleware.Error(recruitController.uploadIntroductionFiles)
  );

  router.get(
    "/admin",
    authMiddleware,
    adminCheckMiddleware,
    tryCatchMiddleware.Error(recruitController.getTenRecruits)
  );
};
