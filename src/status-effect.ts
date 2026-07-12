import { Character } from "./character";

export interface StatusEffect {
  name: string;
  // ターン開始時に呼ばれる処理（ダメージなど）
  // trueを返すとその状態異常が解除される
  update(target: Character): boolean; 
  
  // 攻撃力などを補正したい場合に使う（オプション）
  modifyPower?(power: number): number;
}

export class PoisonEffect implements StatusEffect {
  name = "毒";
  private isNew = true;

  update(target: Character): boolean {
    if (this.isNew) {
      this.isNew = false;
      return false;
    }
    if (Math.random() < 0.2) {
      console.log(`${target.name}の毒が治った！`);
      return true; // 解除
    }
    console.log(`${target.name}は毒で5ダメージ受けた！`);
    target.takePoisonDamage(5);
    return false;
  }
}

// 攻撃力低下クラス
export class AttackDownEffect implements StatusEffect {
  name = "攻撃低下";
  private duration = 3; // 3ターン継続

  update(target: Character): boolean {
    this.duration--;
    if (this.duration <= 0) {
      console.log(`${target.name}の攻撃力低下が元に戻った！`);
      return true;
    }
    return false;
  }

  // 攻撃力を半分にする
  modifyPower(power: number): number {
    return Math.floor(power * 0.5);
  }
}

// export class BurnEffect implements StatusEffect {
//   name = "やけど";
//   update(target: Character): boolean {
//     console.log(`${target.name}はやけどで3ダメージ！`);
//     target.takePoisonDamage(3); // ダメージ処理
//     return false; // ずっと治らない（例）
//   }
// }