type RequestHttp = Pick<RequestInit, "headers" | "signal" | "method" | "body">;
interface ParamRequestHttp {
  url?: string;
  options: RequestHttp;
}

class HelperHttp {
  private static instance: HelperHttp;
  private constructor(
    protected enpoint: string = "http://localhost:5000/games",

    private controller: AbortController = new AbortController()
  ) {}
  private customFetch(enpoint: string = "", options: RequestHttp) {
    const defaultHeaders = {
      accept: "application/json",
    };
    const merge = Object.assign({}, defaultHeaders, options.headers);
    const url = `${this.enpoint}/${enpoint}`;

    options.signal = this.controller.signal;

    options.method = options.method || "GET";

    options.headers = options.headers ? merge : defaultHeaders;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    console.log(options);
    setTimeout(() => this.controller.abort(), 3000);

    return fetch(url, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "have happened an Error",
            })
      )
      .catch((err) => err);
  }

  get({ url, options }: ParamRequestHttp) {
    return this.customFetch(url, options);
  }
  post({ url, options }: ParamRequestHttp) {
    options.method = "POST";
    return this.customFetch(url, options);
  }
  put({ url, options }: ParamRequestHttp) {
    options.method = "PUT";
    return this.customFetch(url, options);
  }
  del({ url, options }: ParamRequestHttp) {
    options.method = "DELETE";
    return this.customFetch(url, options);
  }

  public static getInstace() {
    if (!HelperHttp.instance) {
      HelperHttp.instance = new HelperHttp();
    }

    return HelperHttp.instance;
  }
}

export default HelperHttp;
