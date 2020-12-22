import HttpError from "./httpError";

export const ApiNotFoundError = new HttpError(404, "Api Not Found");
