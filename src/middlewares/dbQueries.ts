import db from "./dbConfig";


export const getSwabs = async (timeStart: number, timeEnd: number) => {
  const conn = await db();
  //non provata sicuramente non funziona
  return conn
    .query(
      `SELECT * FROM swabs WHERE date_exec > ${timeStart} AND date_exec < ${timeEnd}`
    )
    .catch((err: string | undefined) => {
      throw new Error(err);
    });
};

export const addSwambs = async (team_id:number, date:string, type:string, patient_id:number, done:boolean, positive_res:boolean ) => {
  const conn = await db();
  return conn
    .query(
      `INSERT INTO swabs (team_id, date, type,patient_id,done,positive_res) VALUES ('${team_id}','${date}','${type}','${patient_id}','${done}','${positive_res}')`
    )
    .catch((err: string | undefined) => {
      throw new Error(err);
    });
};

export const deleteSwab = async (id:number) => {
  const conn = await db();
  return conn
    .query(`DELETE FROM swabs WHERE patient_id= ${id} `)
    .catch((err: string | undefined) => {
      console.log(err);
      throw new Error(err);
    });
};

export const getPatient = async (id: number) => {
  const conn = await db();
  return conn
    .query(`SELECT * FROM patients WHERE patient_id = ${id}`)
    .catch((err: string | undefined) => {
      console.log(err);
      throw new Error(err);
    });
};
export const newPatient = async (
  name: string,
  email: string,
  dob: string,
  fiscal_code: string,
  address: string,
  phone: number,
  hasCovid: boolean
) => {
  const conn = await db();
  return conn
    .query(
      `INSERT INTO patients (name,email, dob, fiscal_code,address,phone,hasCovid) VALUES ('${name}','${email}','${dob}','${fiscal_code}','${address}','${phone}','${hasCovid}')`
    )
    .catch((err: string | undefined) => {
      console.log(err);
      throw new Error(err);
    });
};


export const getAllPatients = async () => {
  const conn = await db();
  return conn
    .query(`SELECT * FROM patients`)
    .catch((err: string | undefined) => {
      console.log(err);
      throw new Error(err);
    });
};

export const updatePatient = async(id:number,email:string,address:string,phone:number,hasCovid:boolean)=>{
  const conn = await db();
  return conn
    .query(`UPDATE patients SET email='${email}', address='${address}', phone= '${phone}', hasCovid='${hasCovid}' WHERE patient_id='${id}'`)
    .catch((err: string | undefined) => {
      console.log(err);
      throw new Error(err);
    });
};

export const deletePatient = async (id:number) => {
  const conn = await db();
  return conn
    .query(`DELETE FROM patients WHERE patient_id= ${id} `)
    .catch((err: string | undefined) => {
      console.log(err);
      throw new Error(err);
    });
};