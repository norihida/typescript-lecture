import type { Character } from "./character.ts";

export interface Healable {
  heal(target: Character): void;
}