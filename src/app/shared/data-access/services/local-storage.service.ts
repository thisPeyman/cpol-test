const localStoragekey = 'cpol';

export class LocalStorageService {
  static get<T>(key: string): T | null {
    const value = localStorage.getItem(`${localStoragekey}-${key}`);

    return value ? JSON.parse(value) : null;
  }

  static set(key: string, value: unknown) {
    const stringifiedValue = JSON.stringify(value);

    localStorage.setItem(`${localStoragekey}-${key}`, stringifiedValue);
  }

  static delete(key: string) {
    localStorage.removeItem(`${localStoragekey}-${key}`);
  }
}
