// 1. まずインターフェースを定義
export interface StatusEffect {
  name: string;
  update(target: Character): boolean;
}

// 2. キャラクタークラス
export abstract class Character {
  // --- ここでプロパティを個別に宣言する（erasableSyntaxOnly対応） ---
  public readonly name: string;
  protected hp: number;
  protected power: number;
  protected defense: number;
  protected statusEffects: StatusEffect[] = [];

  // コンストラクタでは単に値を受け取って代入する
  constructor(name: string, hp: number, power: number, defense: number) {
    this.name = name;
    this.hp = hp;
    this.power = power;
    this.defense = defense;
  }

// character.ts に追加しておくと便利なメソッド
isStatusAffected(effectName: string): boolean {
  return this.statusEffects.some(e => e.name === effectName);
}
  
  // --- メソッド類はそのまま ---
  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }

  getName(): string {
    return this.name;
  }

  takeDamage(damage: number): void {
    const actualDamage = Math.max(0, damage - this.defense);
    this.hp = Math.max(0, this.hp - actualDamage);
    this.showStatus();
  }

  takePoisonDamage(damage: number): void {
    this.hp = Math.max(0, this.hp - damage);
    this.showStatus();
  }

  isDead(): boolean {
    return this.hp <= 0;
  }

  abstract attack(opponent: Character): void;

  addStatusEffect(effect: StatusEffect): boolean { // 戻り値を boolean に変更
    // すでに同じ名前の状態異常にかかっているか確認
    const alreadyHas = this.statusEffects.some(e => e.name === effect.name);
    
    if (!alreadyHas) {
      this.statusEffects.push(effect);
      return true; // 新しく追加できた
    }
    
    return false; // すでにかかっていたので追加しなかった
  }

  updateStatus(): boolean {
    if (this.isDead()) return false;

    this.statusEffects = this.statusEffects.filter(effect => {
      const isCured = effect.update(this);
      return !isCured;
    });

    return this.statusEffects.length > 0;
  }
}

// 3. 毒の効果
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
      return true;
    }

    console.log(`${target.name}は毒で5ダメージ受けた！`);
    target.takePoisonDamage(5);
    return false;
  }

  
}

