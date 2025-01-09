export interface HttpClientInterface {
  baseURL: string;

  get<T>(path: string, options?: RequestOptions): Promise<T>;
  post<T>(path: string, options?: RequestOptions): Promise<T>;
  put<T>(path: string, options?: RequestOptions): Promise<T>;
  delete<T>(path: string, options?: RequestOptions): Promise<T>;

  makeRequest<T>(path: string, options: MakeRequestOptions): Promise<T>;
}

export interface RequestOptions {
  headers?: Record<string, string>;
  body?: unknown;
}

export interface MakeRequestOptions extends RequestOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
}
