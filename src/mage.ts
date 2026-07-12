import { Character } from "./character.ts";

export class Mage extends Character {
  constructor(name: string, hp: number) {
    super(name, hp, 30, 10);
  }

  override attack(opponent: Character) {
    console.log(`${this.name}は魔法を唱えた！`);

    // 1. まずダメージを与える
    opponent.takeDamage(this.power);

    // 2. 相手がまだ生きていれば、毒の判定を行う
    if (!opponent.isDead() && Math.random() < 0.2) {
      opponent.applyPoison();
      console.log(`${opponent.getName()}は毒になった！`);
    }
  }
}