// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AuthToken {
  public static storageEnabled (): boolean {
    return typeof window !== 'undefined'
  }

  public static setToken (token: string): void {
    localStorage.setItem('token', token)
  }

  public static getToken (): string {
    const token = localStorage.getItem('token')
    return token
  }
}
