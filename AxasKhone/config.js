const apiServerIpIos = '127.0.0.1';
const apiServerIpAndroid = '10.0.2.2';
const apiServerIpProduction = '';
const apiServerPort = 8000;
const activeServer = 'android';

const apiServerAddress = {
  android: `http://${apiServerIpAndroid}:${apiServerPort}`,
  ios: `http://${apiServerIpIos}:${apiServerPort}`,
  server: `http://${apiServerIpProduction}`,
  get active() {
    return `${this[activeServer.toString()]}`;
  }
};

export const storageSecretKey = '';

export default apiServerAddress;
