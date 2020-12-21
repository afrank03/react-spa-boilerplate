import HttpClient from './HttpClient';
import { DefaultResponseObject, BaseHttpHeaders } from './HttpClientInterfaces';

/**
 * @description Http client helper for use with HttpClient.
 */
class HttpClientHelper {
  baseHeaders: BaseHttpHeaders = {
    'Content-Type': 'application/json',
  };

  /**
   * @param {string} url
   * @returns {JSON} responseObject
   */
  async get(url: string): Promise<JSON> {
    const response: Response = await HttpClient.request(url, {
      method: 'GET',
      headers: this.baseHeaders,
    });

    const responseObject: JSON = await response.json();

    return responseObject;
  }

  /**
   * @param {string} url
   * @param {JSON} data
   * @returns {JSON} responseObject.data
   */
  async post(url: string, data: JSON): Promise<JSON> {
    const response: Response = await HttpClient.request(url, {
      method: 'POST',
      headers: this.baseHeaders,
      body: JSON.stringify(data),
    });

    const responseObject: DefaultResponseObject = await response.json();

    return responseObject.data;
  }
}

export default new HttpClientHelper();
