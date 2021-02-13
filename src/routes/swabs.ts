import { getSwabs, addSwambs,getSwabForPatient, deleteSwab,updateSwamb} from "./../middlewares/dbQueries";
import express, { Request, Response, NextFunction } from "express";

import swab from '../interfaces/index';

const router = express.Router();

/*
router.get("/", async ({ query: { startDate, endDate } }, res) => {
  const swabs = await getSwabs(Number(startDate), Number(endDate));
  res.json(swabs);
});
*/
router.get("/", async ({ query: {patient_id }}:Request, res:Response) => {
  const swabs = await getSwabForPatient(Number(patient_id));
  res.json(swabs);
});

router.post('/', async({body: {team_id, date, type, patient_id, done, positive_res}}:Request,res:Response)=>{
  await addSwambs(team_id, date,type,patient_id,done,positive_res);
  res.json({status:"Added"});
});

router.put('/:id',async({params:{id}, body:{team_id, date, type, patient_id, done, positive_res}}:Request,res:Response)=>{
  await updateSwamb(Number(id), team_id,date,type,patient_id,done,positive_res);
  res.json({status:"Swab modified"});
})

router.delete('/:id',  async ({ params: { id } }:Request, res:Response)=>{
  await deleteSwab(Number(id));
  res.json({status: "success"});
});

export default router;
