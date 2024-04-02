import { ModuleKeys } from "./ModuleData";

export const isQuizUnlocked = () => {
  return Object.values(ModuleKeys).every(
    (key) => sessionStorage.getItem(key) !== null
  );
};
