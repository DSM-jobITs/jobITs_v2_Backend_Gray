import { RecruitService } from "@/services";
import { Request, Response, NextFunction } from "express";
import {
  writeFirstRecruitRequest,
  writeFourthRecruitRequest,
  writeSecondRecruitRequest,
  writeThirdRecruitRequest,
} from "@/interfaces";
import _ from "lodash";

export class RecruitController {
  public static async writeFirstRecruit(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const id: string = await RecruitService.createRecruit(
      req.body as writeFirstRecruitRequest
    );
    res.status(200).json({ id });
  }
  public static async writeSecondRecruit(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const id: string = req.params.id;
    await RecruitService.updateSecondRecruit(
      req.body as writeSecondRecruitRequest,
      id
    );
    res.status(200).end();
  }
  public static async writeThirdRecruit(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const id: string = req.params.id;
    await RecruitService.updateThirdRecruit(
      req.body as writeThirdRecruitRequest,
      id
    );
    res.status(200).end();
  }
  public static async writeFourthRecruit(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const id: string = req.params.id;
    await RecruitService.updateFourthRecruit(
      req.body as writeFourthRecruitRequest,
      id
    );
    console.log(req["files"]);
    res.status(200).end();
  }
}
