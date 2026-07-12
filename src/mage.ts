import { Character, PoisonEffect } from "./character";

export class Mage extends Character {
  constructor(name: string, hp: number) {
    super(name, hp, 30, 10);
  }

  override attack(opponent: Character) {
    console.log(`${this.name}は魔法を唱えた！`);
    opponent.takeDamage(this.power);

    if (!opponent.isDead() && Math.random() < 0.2) {
      // 戻り値を受け取る
      const success = opponent.addStatusEffect(new PoisonEffect());
      
      // 新しく毒にかかった場合のみメッセージを出す
      if (success) {
        console.log(`${opponent.name}は毒になった！`);
      }
    }
  }
}