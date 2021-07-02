import { promises as fs } from "fs";
import path from "path";
import { NotFoundError } from "./errors.js";
import { isArray } from "util";
import dotenv from "dotenv";
import { existsSync } from "fs";

dotenv.config();

const file = path.resolve(process.env.ENTRY_DB_FILE_LOCATION);

// private function for the module
const write = async (data) => {
  await fs.writeFile(file, JSON.stringify(data));
};

const add = async (data) => {
  try {
    //console.log("DB Add");

    let content = await getAll();
    content.push(data);
    await write(content);
    console.log("file written");
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getAll = async () => {
  try {
    if (!existsSync(file)) {
      await fs.writeFile(file, "[]");
      console.log("data file created");
    }
    let content = await fs.readFile(file);
    return JSON.parse(content);
  } catch (err) {
    console.error("module error", err);
    throw err;
  }
};

const update = async (id, data) => {
  let content = await getAll();
  if (!isArray(content)) {
    throw new Error("No data found");
  }

  const itemLocation = content.findIndex((item) => item.id === id);
  console.log(id);
  if (itemLocation != -1) {
    content[itemLocation] = data;
  } else {
    throw new NotFoundError(`ID: ${id} not found`);
  }

  // let's write it back to the file now
  await write(content);
};

export { add, getAll, update };
