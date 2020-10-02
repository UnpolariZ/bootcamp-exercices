import * as mongo from "mongodb";
import { Country } from "./Type";

export function updateOneCountry(db: mongo.Db): Promise<Country> {
  return db
    .collection("worldAtlas")
    .updateOne({ name: "Australia" }, { $set: { capital: "Canberra" } })
    .then(() => {
      return db.collection("worldAtlas").findOne({ capital: "Canberra" });
    });
  // code your function here
}
