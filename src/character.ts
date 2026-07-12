export abstract class Character {
  public readonly name: string;
  protected hp: number;
  protected power: number;
  protected defense: number;
  protected isPoisoned: boolean;
  protected isPoisonNew: boolean = false; // ★追加：毒にかかった直後かどうか

  constructor(name: string, hp: number, power: number, defense: number) {
    this.name = name;
    this.hp = hp;
    this.power = power;
    this.defense = defense;
    this.isPoisoned = false;
  }

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

  applyPoison(): void {
    this.isPoisoned = true;
    this.isPoisonNew = true; // ★追加：毒にかかった瞬間を記録
  }

  updateStatus(): boolean {
    if (!this.isPoisoned) {
      return false;
    }

    // ★追加：毒にかかった直後のターンはダメージを受けず、次から判定
    if (this.isPoisonNew) {
      this.isPoisonNew = false;
      return false; 
    }

    // 1. 治癒判定（ダメージの前に行う）
    if (Math.random() < 0.2) {
      this.curePoison();
      console.log(`${this.getName()}の毒が治った！`);
      return false;
    }

    // 2. 毒ダメージ
    console.log(`${this.getName()}は毒で5ダメージ受けた！`);
    this.takePoisonDamage(5);

    if (this.isDead()) {
      this.curePoison();
      return true;
    }

    return true;
  }

  curePoison(): void {
    this.isPoisoned = false;
    this.isPoisonNew = false;
  }
}