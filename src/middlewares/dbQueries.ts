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
export const getPatient = async (id: number) => {
  const conn = await db();
  return conn
    .query(`SELECT * FROM patients WHERE patient_id  = ${id}`)
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
