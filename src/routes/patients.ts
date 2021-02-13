import { getPatient, newPatient, getAllPatients, deletePatient, updatePatient,showPatientAndSwabs } from "./../middlewares/dbQueries";
import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

/*
router.get("/:id", async ({ params: { id } }:Request, res:Response) => {
  const patient = await getPatient(Number(id));
  res.json(patient);
});
*/
router.get('/', async(req:Request,res:Response)=>{
  const patients = await getAllPatients();
  res.json(patients);
});

router.get("/:id", async ({ params: { id } }:Request, res:Response) => {
  const patient = await showPatientAndSwabs(Number(id));
  res.json(patient);
});

router.post(
  "/",
  async (
    { body: { name, email, dob, fiscal_code, address, phone, hasCovid }}:Request,
    res:Response
  ) => {
    const patients = JSON.parse(JSON.stringify(await getAllPatients()));    
    const checkPatients = patients.some(p => p.fiscal_code === String(fiscal_code));
    if(!checkPatients) {
      await newPatient(name, email, dob, fiscal_code.toUpperCase(), address, phone, hasCovid);
      return res.json({ status: "success" });
    }
    return res.json({message:"Error"})    
  }
);

router.put('/:id', async({params:{id}, body:{email,address,phone,hasCovid}}:Request,res:Response)=>{
    const patientToUpdate = await updatePatient(Number(id),email,address,phone,hasCovid);
    res.json({status:"success"});
});

router.delete('/:id',  async ({ params: { id }}:Request, res:Response)=>{
  const deleteAccount = await deletePatient(Number(id));
  res.json({status: "success"});
});


export default router;
