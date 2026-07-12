import type { Character } from "./character.ts";

export interface Reviveable {
  // インターフェースを定義する
  revive(target:Character):void;
}