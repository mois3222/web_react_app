import HelperHttp from "../helpers/helpHttp";

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
  public static getInstance() {
    if (!CrudApi.instance) CrudApi.instance = new CrudApi();
    return CrudApi.instance;
  }
}

export default CrudApi;
