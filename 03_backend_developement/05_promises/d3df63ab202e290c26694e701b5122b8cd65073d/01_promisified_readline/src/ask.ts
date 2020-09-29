import { rl } from "./reader";

function ask(question: string, reader = rl): Promise<string> {
  return new Promise((resolve, reject) => {
    reader.question(question, (result) => {
      if (result !== "") {
        resolve(result);
      }
      reject(new Error("Invalid input"));
    });
  });

  // Your code goes here
}

// Leave line below for tests to work properly
export default ask;
