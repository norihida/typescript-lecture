import { Character } from "./character.ts";

export class Mage extends Character {
<<<<<<< HEAD

  constructor(name:string, hp:number){
    super(name,hp,30);
  }
  
  override attack(opponent:Character) {
    console.log(`${this.name}は魔法を唱えた！`);

      opponent.takeDamage(this.power);
=======
  constructor(name: string, hp: number) {
    super(name, hp, 30);
  }
  override attack(opponent: Character) {
    console.log(`${this.name}は魔法を唱えた！`);

    // opponent.takeDamage(30);
    opponent.takeDamage(this.power);
>>>>>>> 4f4a7917dbc260818deb463fa6f09cf7ca1f9d4c
  }
}
