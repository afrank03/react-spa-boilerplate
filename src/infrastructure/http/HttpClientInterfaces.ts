import HttpClientError from './HttpClientError';

export interface DefaultResponseObject {
  data: JSON;
}

export interface BaseHttpHeaders {
  'Content-Type': string;
}

export interface HttpClientInterface {
  _requestConfiguration: RequestInit;
  request(url: string, options: JSON): Promise<globalThis.Response> | HttpClientError;
}
