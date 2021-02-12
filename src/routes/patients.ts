import { getPatient, newPatient } from "./../middlewares/dbQueries";
import express from "express";

const router = express.Router();

router.get("/:id", async ({ params: { id } }, res) => {
  const patient = await getPatient(Number(id));
  res.json(patient);
});
router.post(
  "/",
  async (
    { body: { name, email, dob, fiscal_code, address, phone, hasCovid } },
    res
  ) => {
    await newPatient(name, email, dob, fiscal_code, address, phone, hasCovid);
    res.json({ status: "success" });
  }
);

export default router;
