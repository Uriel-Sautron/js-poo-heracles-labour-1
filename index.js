// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require("./src/Fighter.js");

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemean = new Fighter("🦁 Nemean Lion", 11, 13);
let stateGame = true;
while (stateGame) {
  heracles.fight(nemean);
  if (!nemean.isAlive()) stateGame = false;
  nemean.fight(heracles);
  if (!heracles.isAlive()) stateGame = false;
}
