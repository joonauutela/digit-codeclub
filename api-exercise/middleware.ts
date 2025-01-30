import { Request, Response, NextFunction } from "express";

const HEADER_X_API_KEY = "x-api-key";
const INVALID_API_KEY_RESPONSE = {
  message: "Invalid API key",
};

/**
 * Validate consumer api key
 */
export function apikeyMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!process.env.API_KEY) {
    throw new Error("API key required");
  }

  if (
    process.env.API_KEY &&
    req.get(HEADER_X_API_KEY) === process.env.API_KEY
  ) {
    next();
  } else {
    res.status(401).send(INVALID_API_KEY_RESPONSE);
  }
}
