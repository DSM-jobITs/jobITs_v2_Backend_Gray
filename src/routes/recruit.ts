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
import {
  addIntroductions,
  getRecruitsList,
  removeRecruit,
  writeRecruitSchema,
  updateRecruit,
  updateRecruitSchema,
} from "@/schemas";

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
    validate({ schema: getRecruitsList, parameters: Parameters.QUERY }),
    tryCatchMiddleware.Error(recruitController.getTenRecruits)
  );

  router.delete(
    "/:id",
    authMiddleware,
    adminCheckMiddleware,
    validate({ schema: removeRecruit, parameters: Parameters.PARAM }),
    tryCatchMiddleware.Error(recruitController.removeRecruit)
  );

  router.put(
    "/:id",
    authMiddleware,
    adminCheckMiddleware,
    validate({ schema: updateRecruit, parameters: Parameters.PARAM }),
    validate({ schema: updateRecruitSchema, parameters: Parameters.BODY }),
    tryCatchMiddleware.Error(recruitController.updateRecruit)
  );
};
