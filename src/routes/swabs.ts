import {
  getAllSwabsByPeriod,
  getAllSwabsByPatient,
  deleteSwab,
  getSwabById,
  updateSwab,
  addSwab,
  getSwabForPatient,
} from "./../middlewares/dbQueries";
import express from "express";
import moment from "moment";
//import Swab from '../interfaces/index';

const router = express.Router();
const parseDates = (startDate: any, endDate: any) => {
  const momentFormat = "YYYY-MM-DD HH:MM";
  return moment(endDate).isAfter(moment(startDate))
    ? {
        startParsed: moment(startDate).format(momentFormat),
        endParsed: moment(endDate).format(momentFormat),
      }
    : {
        startParsed: moment().format(momentFormat),
        endParsed: moment().add(1, "week").format(momentFormat),
      };
};
router.get("/", async ({ query: { startDate, endDate } }, res) => {
  const { startParsed, endParsed } = parseDates(startDate, endDate);
  const swabs = await getAllSwabsByPeriod(startParsed, endParsed);
  res.json(swabs);
});
router.get("/:id", async ({ params: { id } }, res) => {
  const swab = id ?? (await getSwabById(id));
  res.json(swab);
});
router.delete("/:id", async ({ params: { id } }, res) => {
  await deleteSwab(id);
  res.json({ message: "Deleted" });
});

router.get("/", async ({ query: { patient_id } }, res) => {
  const swabs = await getSwabForPatient(Number(patient_id));
  res.json(swabs);
});

router.post(
  "/",
  async (
    { body: { team_id, date, type, patient_id, done, positive_res } },
    res
  ) => {
    await addSwab(team_id, date, type, patient_id, done, positive_res);
    res.json({ status: "Added" });
  }
);
router.post(
  "/",
  async (
    { body: { team_id, date, type, patient_id, done, positive_res } },
    res
  ) => {
    await addSwab(team_id, date, type, patient_id, done, positive_res);
    res.json({ status: "Added" });
  }
);

router.put(
  "/:id",
  async (
    {
      params: { id },
      body: { team_id, date, type, patient_id, done, positive_res },
    },
    res
  ) => {
    await updateSwab(
      Number(id),
      team_id,
      date,
      type,
      patient_id,
      done,
      positive_res
    );
    res.json({ status: "Swab modified" });
  }
);

router.delete("/:id", async ({ params: { id } }, res) => {
  await deleteSwab(id);
  res.json({ status: "success" });
});

export default router;
