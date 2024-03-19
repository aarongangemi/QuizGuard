const usernameKey = 'quiz-guard-username';

export class SessionStorageHelper {
    static setUsername(value: string): void {
      sessionStorage.setItem(usernameKey, value);
    }
  
    static getUsername(key: string): string | null {
      return sessionStorage.getItem(usernameKey);
    }
}
  
  