const usernameKey = 'quiz-guard-username';

export class SessionStorageHelper {
    static setUsername(value: string): void {
      sessionStorage.setItem(usernameKey, value);
    }
  
    static getUsername(): string | null {
      return sessionStorage.getItem(usernameKey);
    }
}
  
  