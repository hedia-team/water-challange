import type {Capabilities} from '@wdio/types';

let capabilities: Capabilities.RequestedStandaloneCapabilities;

const android = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'emulator-5554',
  'appium:appPackage': 'com.android.settings',
  'appium:appActivity': '.Settings',
};

// const ios = {
//   platformName: 'iOS',
//   'appium:platformVersion': '16.2',
//   'appium:deviceName': 'iPhone 14',
//   'appium:automationName': 'XCUITest',
//   'appium:bundleId': 'org.reactjs.native.example.TestForE2E',
// };

// define capabilities depending on the platform

capabilities = android;

export default capabilities;
