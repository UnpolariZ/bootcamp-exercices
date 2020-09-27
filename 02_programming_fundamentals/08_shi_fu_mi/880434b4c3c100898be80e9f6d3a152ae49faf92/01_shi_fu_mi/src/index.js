const { reverse } = require("dns");
const { read } = require("fs");
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question, callback) {
  // fonction ask
  reader.question(`${question}\n>`, callback);
}
const generateIAChoice = (min, max) => Math.round(Math.random() * (max - min) + min);
const choiceOfIA = generateIAChoice(1, 3);
const moves = {
  rock: [
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ],
  paper: [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ],
  scissors: [
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ],
};
const reverseLine = (line) => {
  const changedLine = line
    .split("")
    .map((parenthese) => {
      if (parenthese == ")") {
        return "(";
      } else if (parenthese == "(") {
        return ")";
      }
      return parenthese;
    })
    .join("");
  return changedLine.split("").reverse().join("");
};
function shifumi() {
  // fonction d'entrée "shifumi"
  console.log("Bienvenue dans le Shifumi dé la muerté\n");
  console.log("---Choisis ton mode de jeu mon ptit pote---\n ");
  function MenuSolo() {
    // Menu d'interface Solo
    console.log("        Vous avez choisis le mode Solo\n     Choisis la difficulté de l'ordinateur\n");
    ask("             Saisis 1, 2 ou 3 : \n\n 1 - Facile \n 2 - Medium \n 3 - Hard\n", (reponseUtilisateur) => {
      if (reponseUtilisateur == 1) {
        // L'utilisateur joue en facile
        ask(
          "        Vous avez choisis le mode EAZY\n\n        Saisissez 1, 2, ou 3 pour choisir un mouvement : \n " +
            moves.rock +
            "1/\n" +
            moves.paper +
            "2/\n" +
            moves.scissors +
            "3/\n             Vous pouvez JOUEZ (Saisir 1, 2 ou 3)",
          (reponseUtilisateur) => {
            if (reponseUtilisateur == 1) console.log("             Vous avez choisis ROCK\n" + moves.rock);
          },
        );
      } else if (reponseUtilisateur == 2) {
        console.log("        Vous avez choisis le mode Medium");
        reader.close();
      } else if (reponseUtilisateur == 3) {
        console.log("        Vous avez choisis le mode HARD");
        reader.close();
      } else {
        console.log("             Erreur de synthaxe.\n");
        MenuSolo();
      }
    });
  }

  function MenuSoluMulti() {
    ask("            Saisis 1 ou 2 : \n\n 1 - Solo  \n 2 - Multijoueur ", (reponseUtilisateur) => {
      if (reponseUtilisateur == 1) {
        MenuSolo();
      } else if (reponseUtilisateur == 2) {
        console.log(" ");
        reader.close();
      } else {
        console.log("\n Repete plz ?\n");
        MenuSoluMulti();
      }
    });
  }
  MenuSoluMulti();
}
shifumi();
