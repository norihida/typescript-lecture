export abstract class Character {
  protected name: string; // インスタンスからはアクセス出来ないが、継承先からはアクセスできる
  protected hp: number;
  protected power: number;
  protected defense: number;

  constructor(name: string, hp: number, power: number, defense: number) {
    this.name = name;
    this.hp = hp;
    this.power = power;
    this.defense = defense;
  }

  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }

  // ダメージを受けて hp を減らす public メソッド takeDamage(damage: number): void を追加する
  takeDamage(damage: number): void {
    const actualDamage = Math.max(0, damage - this.defense);
    this.hp = Math.max(0, this.hp - actualDamage);
  }

  // hp が 0 以下かを返す isDead(): boolean を追加する
  isDead(): boolean {
    return this.hp <= 0;
  }

  // 抽象メソッドの形を abstract attack(opponent: Character): void に変更する
  abstract attack(opponent: Character): void;
}
