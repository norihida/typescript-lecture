import { Character } from "./character.ts";

export class Mage extends Character {
  constructor(name: string, hp: number) {
    super(name, hp, 30);
  }
  override attack(opponent: Character) {
    console.log(`${this.name}は魔法を唱えた！`);

    // opponent.takeDamage(30);
    opponent.takeDamage(this.power);
  }
}
