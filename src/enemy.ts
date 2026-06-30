import { Character } from "./character";

export class Enemy extends Character {
  // maxHp プロパティを追加する
  readonly maxHp: number;

  // maxHp プロパティの初期化
  constructor(name: string, hp: number) {
    super(name, hp, 20);
    this.maxHp = hp;
  }

  // maxHp に対する現在の hp の割合を返す
  getHpRatio(): number {
    return this.hp / this.maxHp;
  }

  // ダメージを受ける takeDamage メソッド（mainブランチの変更を維持）
  takeDamage(damage: number): void {
    this.hp = Math.max(0, this.hp - damage);
  }

  // 通常時 : name + "は攻撃してきた！"
  // 残り HP が 30% 以下 : name + "は必死に抵抗している！"
  override attack(opponent: Character): void {
    if (this.getHpRatio() <= 0.3) {
      console.log(`${this.name}は必死に抵抗している!`);
    } else {
      console.log(`${this.name}は攻撃してきた!`);
    }
    opponent.takeDamage(20);
    // opponent.takeDamage(this.power);
  }
}
