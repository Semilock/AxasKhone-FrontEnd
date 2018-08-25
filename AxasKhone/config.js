const apiServerIp = '192.168.10.63';
const apiServerIpAndroid = '10.0.2.2';

const apiServerPort = 3000;

const apiServerAddress = {
  android: `http://${apiServerIpAndroid}:${apiServerPort}`,
  ios: `http://${apiServerIp}:${apiServerPort}`
};

export default apiServerAddress;
