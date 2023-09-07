import HelperHttp from "../helpers/helpHttp";
import TGames from "../modules/games";
class CrudApi {
  private static instance: CrudApi;
  private constructor(private db = HelperHttp.getInstace()) {}

  async GET() {
    return await this.db
      .get({
        options: {},
      })
      .then((res) => res);
  }

  async POST(data: TGames) {
    return await this.db.post({
      options: {
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      },
    });
  }
  public static getInstance() {
    if (!CrudApi.instance) CrudApi.instance = new CrudApi();
    return CrudApi.instance;
  }
}

export default CrudApi;
