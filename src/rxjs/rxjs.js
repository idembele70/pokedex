import { BehaviorSubject, Subject } from "rxjs";
import { getFromLocalStorage } from "../utils/globalFunctions";

export const searchTerm$ = new Subject();
export const likedLength$ = new BehaviorSubject(
  getFromLocalStorage("likedPokemons")?.length || 0
);
export const loading$ = new BehaviorSubject(false);
