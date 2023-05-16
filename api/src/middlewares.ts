import { NextFunction, Request, Response } from "express";

import MessageResponse from "./interfaces/MessageResponse";

export function notFound(req: Request, res: Response<MessageResponse>) {
  res.status(404);
  res.json({
    message: "Page not found",
  });
}

export function errorHandler(
  err: Error,
  req: Request,
  res: Response<MessageResponse>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  res.status(res.statusCode !== 200 ? res.statusCode : 500);
  res.json({ message: err.message });
}
