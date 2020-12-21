import * as express from "express";
import expressLoader from "./express";
import databaseConnect from "./connection";

export default async (app: express.Application) => {
  await databaseConnect();
  expressLoader(app);
};
