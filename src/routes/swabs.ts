import { getSwabs, addSwambs, deleteSwab} from "./../middlewares/dbQueries";
import express from "express";
//import Swab from '../interfaces/index';

const router = express.Router();

router.get("/", async ({ query: { startDate, endDate } }, res) => {
  const swabs = await getSwabs(Number(startDate), Number(endDate));
  res.json(swabs);
});


router.post('/', async({body: {team_id, date, type, patient_id, done, positive_res}},res)=>{
  await addSwambs(team_id, date,type,patient_id,done,positive_res);
  res.json({status:"Added"});
});

router.delete('/:id',  async ({ params: { id } }, res)=>{
  await deleteSwab(Number(id));
  res.json({status: "success"});
});

export default router;
