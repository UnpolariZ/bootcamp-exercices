import * as mongo from "mongodb";

export function findOneCountry(db: mongo.Db): Promise<string[]> {
  // code your function her
  return db.collection("worldAtlas").findOne({ name: "Iceland" });
}
