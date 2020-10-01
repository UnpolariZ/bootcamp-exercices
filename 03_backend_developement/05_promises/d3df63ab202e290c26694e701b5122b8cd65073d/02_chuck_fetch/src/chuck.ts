import fetch, { Response } from "node-fetch";

<<<<<<< HEAD
function getCategories() {
  // Your code goes here
}

function getChuckNorrisJoke() {
=======
function getCategories(): Promise<string[]> {
  return fetch(`https://api.chucknorris.io/jokes/categories`).then((response) => response.json());

  // Your code goes here
}

function getChuckNorrisJoke(category: string): Promise<string> {
  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response) => response.json())
    .then((joke) => joke.value);
>>>>>>> d892de9... retour au source
  // Your code goes here
}

// Leave the line below for tests to work properly
export { getCategories, getChuckNorrisJoke };
