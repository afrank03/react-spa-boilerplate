/**
 * @description whatwg-fetch is an ES6 fetch polyfill - supports:
 * Chrome
 * Firefox
 * Safari 6.1+
 * Internet Explorer 10+
 * iOS9+
 */
import 'whatwg-fetch';
import HttpClientError from './HttpClientError';
import { HttpClientInterface } from './HttpClientInterfaces';

/**
 * @description Http client utilizing fetch.
 */
class HttpClient implements HttpClientInterface {
  /**
   * @property Initial set of configurations/options for the client http requests.
   */
  _requestConfiguration: RequestInit = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {},
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    // body: JSON.stringify({}), // body data type must match "Content-Type" header
  };

  /**
   * A method to make all types of http request.
   *
   * @ToDo Add error handling steps with logging.
   *
   * @param {String} url
   * @param {JSON} options Json object of options. You can set, method, body, headers and many more via this parameter.
   * @returns {Promise<Response>} response
   */
  async request(url: string, options = {}): Promise<globalThis.Response> {
    const requestOptions: RequestInit = Object.assign({}, this._requestConfiguration, options);

    try {
      const response: globalThis.Response = await fetch(url, requestOptions);
      return response;
    } catch (e) {
      // Log errors if needed
      // Throw custom exceptions with descriptive messages.
      throw new HttpClientError('Failed to resolve HTTP(s) request.');
    }
  }
}

export default new HttpClient();
