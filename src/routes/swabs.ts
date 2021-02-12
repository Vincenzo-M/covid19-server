import { getSwabs } from "./../middlewares/dbQueries";
import express from "express";

const router = express.Router();

router.get("/", async ({ query: { startDate, endDate } }, res) => {
  const swabs = await getSwabs(Number(startDate), Number(endDate));
  res.json(swabs);
});

export default router;
