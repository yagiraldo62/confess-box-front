export class AuthToken {
  public static setToken(token: string) {
    localStorage.setItem("token", token);
  }

  public static getToken(): string | undefined {
    const token = localStorage.getItem("token");
    return token;
  }
}
