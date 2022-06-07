/* Fighter class definition */
class Fighter {
  constructor(name, strength, dexterity, life = 100) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = life;
  }

  damage() {
    return Math.ceil(Math.random() * (this.strength - 1) + 1);
  }

  displayFighter() {
    console.log(`${this.name} has ${this.life}💗`);
  }

  displayRounded(enemy, damage) {
    console.log(`${this.name} 🔫 ${enemy.name} 😵 with ${damage}damage`);
  }

  isAlive() {
    return this.life !== 0;
  }

  fight(enemy) {
    if (this.life !== 0) {
      let dmg = this.damage() - enemy.dexterity;
      dmg < 0 ? (dmg = 0) : dmg;
      this.displayRounded(enemy, dmg);
      enemy.life -= dmg;
      if (enemy.life <= 0) {
        enemy.life = 0;
        console.log(`${this.name} 💪 ${enemy.name} 💀`);
      }
    }
  }
}

module.exports = Fighter;
