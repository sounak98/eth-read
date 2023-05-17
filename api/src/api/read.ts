import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";

import { contractRead } from "../ethereum/contracts";
import ReadRequest from "../interfaces/ReadRequest";
import ReadResponse from "../interfaces/ReadResponse";

const router = express.Router();

router.post(
  "/",
  asyncHandler(
    async (req: Request<ReadRequest>, res: Response<ReadResponse>) => {
      let { address, method, args } = req.body;
      if (!address || !method || (args && !Array.isArray(args)))
        throw new Error("Invalid request body");

      const result = (await contractRead(address, method, args || [])).map(
        // TODO: add support for types eg. boolean, number, string
        (e) => e.toString()
      );

      res.json({
        result: result.length === 1 ? result[0] : result,
      });
    }
  )
);

export default router;
