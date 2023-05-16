import express from "express";

import read from "./read";

const router = express.Router();

router.use("/read", read);

export default router;
