import { RecruitService } from "@/services";
import { Request, Response, NextFunction } from "express";
import {
  writeFirstRecruitRequest,
  writeSecondRecruitRequest,
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
}
