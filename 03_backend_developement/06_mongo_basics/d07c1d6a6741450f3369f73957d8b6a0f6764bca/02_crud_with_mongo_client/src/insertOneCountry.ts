import * as mongo from "mongodb";
import { Country } from "./Type";

export function insertOneCountry(db: mongo.Db): Promise<Country> {
  return db
    .collection("worldAtlas")
    .insertOne({ name: "Pays-Bas" })
    .then((result) => result.ops[0]);

  // code your function here
}
