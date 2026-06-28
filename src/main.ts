import { Warrior } from "./warrior";
import { Enemy } from "./enemy";

// const character = new Character("太郎", 200); // abstract class はインスタンス化出来ないのでエラーが出る

const warrior = new Warrior("アーサー", 100, "エクスカリバー");
const slime = new Enemy("スライム", 50);

while(!warrior.isDead() && !slime.isDead()){
    warrior.attack(slime);
    slime.showStatus();
    // 倒れた？
    if(slime.isDead()){
        break;
    }
    slime.attack(warrior);
    warrior.showStatus();
        if(warrior.isDead()){
        break;
    }
}

// while（戦士もスライムも生きている）

// ↓

// 戦士が攻撃

// ↓

// スライムのHP表示

// ↓

// スライムが死んだ？

// YES → 終了

// ↓

// スライムが攻撃

// ↓

// 戦士のHP表示

// ↓

// 戦士が死んだ？

// YES → 終了