export class Http {
  public static async get(url: string): Promise<any> {
    try {
      const response = await fetch(url);

      return response.json();
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
