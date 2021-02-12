import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import patients from "./routes/patients";
import swabs from "./routes/swabs";

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.use("/patients", patients);
app.use("/swabs", swabs);

export default app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
