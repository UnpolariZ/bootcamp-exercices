import * as mongo from "mongodb";
import { Country } from "./Type";

export function insertManyCountries(db: mongo.Db): Promise<Country[]> {
  const InsertdoubleCountry = [
    {
      name: "Italie",
      capital: "Rome",
      continent: "EU",
    },
    { name: "Espagne", capital: "Madrid", continent: "EU" },
  ];
  return db
    .collection("worldAtlas")
    .insertMany(InsertdoubleCountry)
    .then((result) => result.ops);

  // code your function here
}
