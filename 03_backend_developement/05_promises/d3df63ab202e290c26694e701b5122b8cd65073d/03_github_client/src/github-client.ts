import fetch, { Response } from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export class GithubClient {
  static getReposUrl(nickname: string): Promise<string> {
    return fetch(`https://api.github.com/users/${nickname}`).then((response) =>
    response.json().then((keypackage) => keypackage.repos_url)
  throw new Error("voici un message d'erreur")
    );
    // You code goes here
  }
  
  static getRepos(url: string): Promise<string> {
    return fetch(
      `https://api.github.com/users/octocat/repos${url}`
    ).then((response) => response.json());

    // You code goes here
  }

  static printRepos(url: string[]): Promise<string> {
    return fetch(
      `https://api.github.com/users/octocat/repos${url}`
    ).then((response) => response.json());

    // You code goes here
  }

  static printRepository(nickname: string): Promise<string> {
    return fetch(
      `https://api.github.com/users/octocat/repos${nickname}`
    ).then((response) => response.json());

    // You code goes here
  }

  static getProjectInformations(url: string): Promise<string> {
    return fetch(
      `https://api.github.com/users/octocat/repos${url}`
    ).then((response) => response.json());

    // You code goes here
  }
}
