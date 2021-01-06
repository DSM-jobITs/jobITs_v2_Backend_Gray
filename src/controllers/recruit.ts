import { Recruit } from "@/entities";
import { UserService, RecruitService } from "@/services";
import { Request, Response, NextFunction } from "express";
import { writeFirstRecruitRequest } from "@/interfaces";
import _ from "lodash";

export const writeFirstRecruit = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = await RecruitService.createRecruit(
    req.body as writeFirstRecruitRequest
  );
  res.status(200).json({ id });
};
