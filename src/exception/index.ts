import HttpError from "./httpError";

export const BadRequest = new HttpError(400, "Bad Request", 1000);
export const TokenRequired = new HttpError(401, "Token Required", 1000);
export const ApiNotFound = new HttpError(404, "Api Not Found", 1000);
export const UserNotFound = new HttpError(404, "User Not Found", 1000);
export const RecruitNotFound = new HttpError(404, "Recruit Not Found", 1000);
export const IsNotAdmin = new HttpError(409, "This User is Not Admin", 1000);
