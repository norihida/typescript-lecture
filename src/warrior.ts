import { Character } from './character.ts';

export class Warrior extends Character {
  private weapon: string;

  constructor(name: string, hp: number, weapon: string) {
    super(name, hp, 40); // super() <- 継承元 (character) の constructor
    this.weapon = weapon;
  }

  override attack(opponent:Character) {
    console.log(`${this.name}は${this.weapon}で攻撃した！`);
    opponent.takeDamage(40);
    opponent.takeDamage(this.power);
  }
}