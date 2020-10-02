import * as mongo from "mongodb";
import { resolve, toNamespacedPath } from "path";
import { findOneCountry } from "./findOneCountry";
import { Country } from "./Type";

export function deleteOneCountry(db: mongo.Db): Promise<boolean> {
  return db
    .collection("worldAtlas")
    .deleteOne({ name: "France" })
    .then((result) => result.deletedCount === 1);

  // code your function here
}
