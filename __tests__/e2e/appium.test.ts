import {client} from '../../jest.setup';

describe('appium', () => {
  it('works', async () => {
    try {
      const batteryItem = await client.$('//*[@text="Battery"]');
      await batteryItem.click();
    } finally {
      await client.pause(1000);
    }
  });
});
