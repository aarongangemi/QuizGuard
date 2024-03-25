import { ModuleKeys } from "../components/ModuleData";

const usernameKey = 'quiz-guard-username';

export class SessionStorageHelper {
    static setUsername(value: string): void {
        sessionStorage.setItem(usernameKey, value);
    }

    static getUsername(): string | null {
        return sessionStorage.getItem(usernameKey);
    }

    static allModulesCompleted(): boolean {
        return Object.values(ModuleKeys).every((key) => sessionStorage.getItem(key) === 'true');
    }

    static setModuleCompleted(moduleKey: string): void {
        sessionStorage.setItem(moduleKey, 'true');

    }
}
