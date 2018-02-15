import { Md5 } from 'ts-md5/dist/md5'

export class AppGlobal {

  private SERVER_IP='http://192.168.100.110';
  private SERVER_PORT = '5001';

  private CLIENT_SECRET = 'WI7cpsonpiObYDXqgdamaEpIKMd5JL5AgBKRlWrLtN6P5vyrpRU6IPQnCAoL6egA6ulVlCkGDMgptSWR5U2e8UhDQryuPFzkSpcs2x8bY0MjEuPKQGdUuCA8bJJGtF61';

  constructor() {}

  getBaseUrl() {
    return `${this.SERVER_IP}:${this.SERVER_PORT}/`;
  }

  getClientSecret() {
    return this.CLIENT_SECRET;
  }

  getMD5(message) {
    let md5 = new Md5();

    // Append incrementally your file or other input
    // Methods are chainable
    md5.appendStr(message);

    // Generate the MD5 hex string
    return md5.end().toString();
  }

  log (tag: any, message?: string) {
    if (message) {
      console.log(`${tag}: ${message}`);
    } else {
      console.log(tag);
    }
  }

}
