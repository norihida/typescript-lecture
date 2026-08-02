// // import { Warrior } from "./warrior";
// import { Enemy } from "./enemy";
// import { Mage } from "./mage";
// import { HolyPriest } from "./holy-priest";

// // const warrior = new Warrior("アーサー", 200, "エクスカリバー");
// // const mage = new Mage("キャスター", 150);
// // const slime = new Enemy("スライム", 50);

// // warrior.showStatus();
// // slime.showStatus();

// // console.log("--- ステータス確認 ---");
// // mage.showStatus();
// // slime.showStatus();

// // console.log("--- 戦闘開始 ---");

// // while (true) {
// //   // --- キャスターのターン ---
// //   console.log(`\n【${mage.name}のターン】`); // 行を空けてターン開始を明示
// //   mage.updateStatus(); // 1. まず状態異常を処理（毒ダメージなど）
// //   if (mage.isDead()) break;

// //   mage.attack(slime);  // 2. その後に攻撃
// //   if (slime.isDead()) break;

// //   // --- スライムのターン ---
// //   console.log(`\n【${slime.name}のターン】`); // 行を空けてターン開始を明示
// //   slime.updateStatus(); // 1. まず状態異常を処理（毒ダメージなど）
// //   if (slime.isDead()) break;

// //   slime.attack(mage);  // 2. その後に攻撃
// //   if (mage.isDead()) break;

// //   console.log("----------------------------");
// // }

// // console.log("--- 戦闘終了 ---");
// // if (mage.isDead()) {
// //   console.log(`${slime.name}の勝利！`);
// // } else {
// //   console.log(`${mage.name}の勝利！`);
// // }

// const mage = new Mage("キャスター", 30); // 弱めのHP
// const slime = new Enemy("強スライム", 100);
// const priest = new HolyPriest("司祭", 100);

// console.log("--- 悲劇の発生 ---");
// // スライムの猛攻で魔道士が倒れる
// slime.attack(mage);
// slime.attack(mage);

// if (mage.isDead()) {
//   console.log(`${mage.name}が力尽きた...`);
// }

// console.log("\n--- 僧侶の登場 ---");
// // 蘇生を試みる
// priest.revive(mage);

// // 回復もしてみる
// priest.heal(mage);

// console.log("\n--- 戦線復帰 ---");
// mage.attack(slime); // 再び攻撃ができるようになる

// class ValidationError extends Error {
//   constructor(message: string) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// function isValidEmail(email: string): boolean {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// const registeredEmails = new Set<string>();
// const users = new Map<string, string>();

// // 奥のロジック：不正ならガード節で早めにthrow
// function registerUser(nameInput: string, emailInput: string): void {
//   const name = nameInput.trim();
//   if (name.length === 0) {
//     throw new ValidationError("名前を入力してください。");
//   }

//   const email = emailInput.trim();
//   // TODO(Step 1): メールアドレスの形式チェックをここに追加する
//   if (!isValidEmail(email)) {
//     throw new ValidationError("メールアドレスの形式が不正です");
//   }

//   // if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//   //   throw new ValidationError("正しいメールアドレスを入力してください");
//   // }

//   if (registeredEmails.has(email)) {
//     throw new ValidationError("このメールアドレスは既に登録されています");
//   }

//   users.set(name, email);

//   registeredEmails.add(email);

//   console.log(`登録しました: ${name} <${email}>`);
// }

// // 画面に近い側：catchしてユーザーに伝える
// function onSubmit(nameInput: string, emailInput: string): void {
//   try {
//     registerUser(nameInput, emailInput);
//   } catch (error: unknown) {
//     if (error instanceof ValidationError) {
//       console.error(`⚠️ ${error.message}`);
//     } else {
//       console.error("想定外のエラーが発生しました。", error);
//     }
//   }
// }

// onSubmit("Alice", "alice@example.com");
// onSubmit("Bob", "invalid-email");
// onSubmit("", "carol@example.com");
// onSubmit("Charlie", "alice@example.com");
// onSubmit("Taro", "taro@example.com");
// onSubmit("Hanako", "hanako@example.com");

// console.log("登録者一覧");

// for (const [name, email] of users) {
//   console.log(`${name} <${email}>`);
// }
// console.log(`登録者数:${users.size}人`);


function fetchNumber(): Promise<number>{
  return new Promise((resolve) => {
  setTimeout(() => {
  resolve(42)
  }, 1000);
  });
}

fetchNumber()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("エラー発生", error);
  });

console.log("待機中に別の処理が出来ます");

function fetchUserData(shouldFail:boolean):Promise<string>{
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
      if(shouldFail) reject("サーバーエラー");
      else resolve("OK");
    }, 1000);
  });
}

async function main(shouldFail:boolean): Promise<void>{
  try{
    const result = await fetchUserData(shouldFail);
    console.log(result);
  }catch(error){
    console.log(`NG:${error}`);
  }
}

main(false);
main(true);

async function task1(): Promise<string>{
return new Promise((resolve) => {
  setTimeout(() => {
    resolve("A");    
  }, 500);
});
}
async function task2(): Promise<string>{
return new Promise((resolve) => {
  setTimeout(() => {
    resolve("B");    
  }, 500);
});
}
async function task3(): Promise<string>{
return new Promise((resolve) => {
  setTimeout(() => {
    resolve("C");    
  }, 500);
});
}

async function runTasksInOrder(): Promise<void> {
  const a = await task1(); 
  const b = await task2();
  const c = await task3();
  console.log(`${a}-${b}-${c}`); 
}

runTasksInOrder();