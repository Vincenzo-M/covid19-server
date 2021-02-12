import { getPatient } from "./../middlewares/dbQueries";
import express from "express";

const router = express.Router();

router.get("/:id", async ({ params: { id } }, res) => {
  const patient = await getPatient(Number(id));
  res.json(patient);
});

export default router;
