import HttpClient from './../../infrastructure/http/HttpClientHelper';
import { parameters } from './../../application/config/parameters';

class ExampleApiClient {
  async getExample(): Promise<JSON | null> {
    const url = this._buildUrl('/hello');
    try {
      return await HttpClient.get(url);
      // add to the state
    } catch (e) {
      // Log and fallback
    }
    return null;
  }

  _buildUrl(endpoint: string): string {
    return `${parameters.apiBaseUri}${endpoint}`;
  }
}

export default new ExampleApiClient();
