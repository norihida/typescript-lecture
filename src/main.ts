import { Warrior } from "./warrior";
import { Enemy } from "./enemy";

const warrior = new Warrior("アーサー", 100, "エクスカリバー");
const slime = new Enemy("スライム", 50);

warrior.showStatus();
slime.showStatus();

while (!warrior.isDead() && !slime.isDead()) {
  warrior.attack(slime);
  slime.showStatus();
  if (slime.isDead()) {
    break;
  }
  slime.attack(warrior);
  warrior.showStatus();
  if (warrior.isDead()) {
    break;
  }
}

if (warrior.isDead()) {
  console.log(`${slime.name}の勝利！`);
} else {
  console.log(`${warrior.name}の勝利！`);
}
