import HttpError from "./httpError";

export const BadRequest = new HttpError(400, "Bad Request", 1000);
export const ApiNotFound = new HttpError(404, "Api Not Found", 1000);
export const IsNotAdmin = new HttpError(409, "This User is Not Admin", 1000);
