import {remote} from 'webdriverio';
import type {Capabilities} from '@wdio/types';

import capabilities from './e2e.config';
import {beforeAll, afterAll, jest} from '@jest/globals';

jest.retryTimes(3);

let client: WebdriverIO.Browser;

const config: Capabilities.WebdriverIOConfig = {
  hostname: 'localhost',
  port: 4723,
  waitforTimeout: 60000,
  logLevel: 'info',
  capabilities: {
    ...capabilities,
  },
};

beforeAll(async () => {
  client = await remote(config);
});

afterAll(async () => {
  console.info('[afterAll] Done with testing!');
  await client.deleteSession();
});

export {client};
