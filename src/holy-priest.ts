import { Character } from "./character.ts";
import type { Healable } from "./healable.ts";
import type { Reviveable } from "./reviveable.ts";

// extends, implements を正しく設定する
export class HolyPriest extends Character implements Healable,Reviveable {

    constructor(name:string, hp:number){
        super(name,hp,5,15);
    }
  override attack() 
  {
    // 実装する
    console.log(`${this.name}は静かに祈っている。（攻撃はできない）`);
  }

  heal(target: Character) {
	  // 実装する
    console.log(`${this.name}は聖なる光を放った！`);
    target.takeHeal(15);
    
  }

  revive(target: Character) {
	  // 実装する
      if(target.isDead()){
        console.log(`${this.name}は蘇生の呪文を唱えた！`);
        target.reviveWithHp(50);//HP50で蘇生
      }else{
        console.log(`${target.name}はまだ倒れていない。`);
        
      }
  }
}