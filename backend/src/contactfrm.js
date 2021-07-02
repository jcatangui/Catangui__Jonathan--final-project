import express, { request } from "express";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import jwtverify from "../middleware/jwtverify.js";
import * as userdb from "./util/userdbhandler.js";
import * as entrydb from "./util/entrydbhandler.js";
import validationContactFrm from "../middleware/validationContactFrm.js";
import validationLogin from "../middleware/validationLogin.js";
import validationUsers from "../middleware/validationUsers.js";
import bcrypt from "bcrypt";

const router = express.Router();
dotenv.config();

//***POST route to create an entry when user submits the contact form***//
router.post("/contact_form/entries", validationContactFrm, async (req, res) => {
  let newEntry = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    content: req.body.content,
  };

  try {
    await entrydb.add(newEntry);
    const entryListObj = await entrydb.getAll();
    return res
      .status(201)
      .json(entryListObj.find((id) => id.id == newEntry.id));
  } catch (err) {
    console.log("error is:", err);
    return next(err);
  }
});

//***POST route to create a new user***//
router.post("/users", validationUsers, async (req, res) => {
  let newUser = {
    id: uuidv4(),
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  };

  try {
    await bcrypt.hash(newUser.password, 10, function (err, hash) {
      newUser.password = hash;
      console.log(newUser.password);
      userdb.add(newUser);
    });

    let displayUser = [];

    displayUser.push({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    });

    console.log("New user added succesfully");
    return res.status(201).json(displayUser);
  } catch (err) {
    console.log("error is:", err);
    return next(err);
  }
});

//***POST route to login a registered user***//
router.post("/auth", validationLogin, async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const userListObj = await userdb.getAll();

  let user = userListObj.find((user) => user.email == email);

  if (await bcrypt.compare(password, user.password)) {
    console.log("Password accepted");
    const token = jwt.sign({ email }, process.env.JWTKEY, {
      expiresIn: "5m",
    });
    return res.json({ token });
  }
  return res.status(401).json({ message: "incorrect credentials provided" });
});

//***GET route to get full listing of users***//
router.get("/contact_form/entries", jwtverify, async (req, res) => {
  return res.status(200).send(await entrydb.getAll());
});

//***GET route to get a specific entry associated to the user***//
router.get("/contact_form/entries/:id", jwtverify, async (req, res) => {
  try {
    const entryListObj = await entrydb.getAll();
    let entry = entryListObj.find((id) => id.id == req.params.id);
    if (entry == undefined) {
      return res
        .status(404)
        .json({ message: `entry ${req.params.id} not found` });
    }
    return res.json(entry);
  } catch (err) {
    console.log("error is:", err);
    return next(err);
  }
});

export default router;
