import { Schema } from "joi";
import { BadRequest } from "@/exception";
import { Request, Response, NextFunction } from "express";

export enum Parameters {
  BODY = "body",
  PARAM = "params",
  QUERY = "query",
  HEADER = "headers",
}

export default ({
  schema,
  parameters,
}: {
  schema: Schema;
  parameters: Parameters;
}) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validateAsync(req[parameters]);
    next();
  } catch (e) {
    next(BadRequest(e.message.split('"')[1]));
  }
};
