import { Warrior } from "./warrior";
import { Enemy } from "./enemy";
import{Mage} from "./mage";

const warrior = new Warrior("アーサー", 200, "エクスカリバー");
const mage = new Mage("キャスター", 150);
const slime = new Enemy("スライム", 50);

warrior.showStatus();
slime.showStatus();

// while (!warrior.isDead() && !slime.isDead()) {
//   warrior.attack(slime);
//   slime.showStatus();
//   if (slime.isDead()) {
//     break;
//   }
//   slime.attack(warrior);
//   warrior.showStatus();
//   if (warrior.isDead()) {
//     break;
//   }
// }

// if (warrior.isDead()) {
//   console.log(`${slime.name}の勝利！`);
// } else {
//   console.log(`${warrior.name}の勝利！`);
// }

console.log("--- ステータス確認 ---");
mage.showStatus();
slime.showStatus();

console.log("--- 戦闘開始 ---");

// --- 戦闘開始 ---
while (true) {
  // --- キャスターのターン ---
  mage.updateStatus(); // 毒の更新
  if (mage.isDead()) break;

  mage.attack(slime); // 攻撃（ここで毒を付与しても、このターンはダメージを受けない）
  if (slime.isDead()) break;

  // --- スライムのターン ---
  slime.updateStatus(); // 毒の更新
  if (slime.isDead()) break;

  slime.attack(mage);
  if (mage.isDead()) break;
  
  console.log("----------------");
}

console.log("--- 戦闘終了 ---");
if (mage.isDead()) {
  console.log(`${slime.name}の勝利！`);
} else {
  console.log(`${mage.name}の勝利！`);
}