const apiServerIp = '127.0.0.1';
const apiServerIpAndroid = '10.0.2.2';
const apiServerPort = 8000;
const activeServer = 'android';

const apiServerAddress = {
  android: `http://${apiServerIpAndroid}:${apiServerPort}`,
  ios: `http://${apiServerIp}:${apiServerPort}`,
  get active() {
    return `${this[activeServer.toString()]}`;
  }
};

export default apiServerAddress;
