export abstract class Character {
  protected name: string; // インスタンスからはアクセス出来ないが、継承先からはアクセスできる
  protected hp: number; // インスタンスからも継承先からもアクセス出来ない
  protected power: number;

  constructor(name: string, hp: number, power:number) {
    this.name = name;
    this.hp = hp;
    this.power = power;
  }

  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }

  
// ダメージを受けて hp を減らす public メソッド takeDamage(damage: number): void を追加する
// ※ いま Enemy にある takeDamage を基底クラスに引き上げる形でOK
    takeDamage(damage: number): void {
    this.hp = Math.max(0, this.hp - damage);
  }

 // hp が 0 以下かを返す isDead(): boolean を追加する
  isDead(): boolean {
    return this.hp <= 0;
  }

// 抽象メソッドの形を abstract attack(opponent: Character): void に変更する
  abstract attack(opponent: Character): void;

}