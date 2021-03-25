import HttpError from "./httpError";

export const BadRequest = (message: string) => new HttpError(400, message);
export const TokenRequired = new HttpError(401, "Token Required");
export const InvalidToken = new HttpError(403, "Invalid Token");
export const ApiNotFound = new HttpError(404, "Api Not Found");
export const UserNotFound = new HttpError(404, "User Not Found");
export const RecruitNotFound = new HttpError(404, "Recruit Not Found");
export const AlreadyExistsData = new HttpError(409, "Already Exists Data");
export const IsNotAdmin = new HttpError(410, "This User is Not Admin");
