// import { Warrior } from "./warrior";
import { Enemy } from "./enemy";
import { Mage } from "./mage";
import { HolyPriest } from "./holy-priest";

// const warrior = new Warrior("アーサー", 200, "エクスカリバー");
// const mage = new Mage("キャスター", 150);
// const slime = new Enemy("スライム", 50);

// warrior.showStatus();
// slime.showStatus();

// console.log("--- ステータス確認 ---");
// mage.showStatus();
// slime.showStatus();

// console.log("--- 戦闘開始 ---");

// while (true) {
//   // --- キャスターのターン ---
//   console.log(`\n【${mage.name}のターン】`); // 行を空けてターン開始を明示
//   mage.updateStatus(); // 1. まず状態異常を処理（毒ダメージなど）
//   if (mage.isDead()) break;

//   mage.attack(slime);  // 2. その後に攻撃
//   if (slime.isDead()) break;

//   // --- スライムのターン ---
//   console.log(`\n【${slime.name}のターン】`); // 行を空けてターン開始を明示
//   slime.updateStatus(); // 1. まず状態異常を処理（毒ダメージなど）
//   if (slime.isDead()) break;

//   slime.attack(mage);  // 2. その後に攻撃
//   if (mage.isDead()) break;

//   console.log("----------------------------");
// }

// console.log("--- 戦闘終了 ---");
// if (mage.isDead()) {
//   console.log(`${slime.name}の勝利！`);
// } else {
//   console.log(`${mage.name}の勝利！`);
// }

const mage = new Mage("キャスター", 30); // 弱めのHP
const slime = new Enemy("強スライム", 100);
const priest = new HolyPriest("司祭", 100);

console.log("--- 悲劇の発生 ---");
// スライムの猛攻で魔道士が倒れる
slime.attack(mage);
slime.attack(mage);

if (mage.isDead()) {
  console.log(`${mage.name}が力尽きた...`);
}

console.log("\n--- 僧侶の登場 ---");
// 蘇生を試みる
priest.revive(mage);

// 回復もしてみる
priest.heal(mage);

console.log("\n--- 戦線復帰 ---");
mage.attack(slime); // 再び攻撃ができるようになる

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

//例外処理
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new ValidationError("0で割ることはできません");
  }
  return a / b;
}

try {
  console.log("成功", divide(10, 2));
  console.log("失敗", divide(10, 0));
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(error);
  }
} finally {
  console.log("計算を終了しました");
}
