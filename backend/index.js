import express from "express";
import contactfrm from "./src/contactfrm.js";
import appErrorHandler from "./middleware/appErrorHandler.js";
import pathErrorHandler from "./middleware/pathErrorHandler.js";
import cors from "cors";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>
  res.send("FS1020 REST API Project by Jonathan Catangui")
);
app.use(contactfrm);
app.use(appErrorHandler);
app.use(pathErrorHandler);

app.listen(port, () =>
  console.log(`API server ready on http://localhost:${port}.`)
);
