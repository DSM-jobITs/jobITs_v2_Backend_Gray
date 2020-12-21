import * as express from "express";
import expressLoader from "@/loaders/express";
import databaseConnect from "@/loaders/connection";

export default async (app: express.Application) => {
  await databaseConnect();
  expressLoader(app);
};
