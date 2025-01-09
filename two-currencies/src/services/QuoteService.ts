import HttpClient from "./utils/HttpClient/HttpClient";
import ReqParamsGetQuoteInterface from "./utils/contracts/QuoteService/req/ReqParamsGetQuoteInterface";
import ResGetQuoteInterface from "./utils/contracts/QuoteService/res/ResGetQuoteInterface";

class QuoteService {
  httpClient: HttpClient;
  constructor() {
    this.httpClient = new HttpClient(`https://api.currencybeacon.com/v1`);
  }

  async getQuote(
    data?: ReqParamsGetQuoteInterface
  ): Promise<ResGetQuoteInterface> {
    const quote = await this.httpClient.get<ResGetQuoteInterface>(
      `/convert?from=${data?.from || "USD"}&to=${data?.to || "BRL"}&amount=${
        data?.amount || 1
      }&api_key=${import.meta.env.VITE_REACT_APP_API_KEY as any}`
    );

    return quote;
  }
}

export default new QuoteService();
