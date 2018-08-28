import apiServerAddress from '../../config';

const routes = {
  basePath: `${apiServerAddress.active}`,
  login: 'login',
  refreshToken: 'refresh',
  register: 'register',
  registerCompliment: 'register_compliment',
  user: {
    basePath: 'user/',
    get profileInfo() {
      return `${this.basePath}profile_info`;
    },
    get changePassword() {
      return `${this.basePath}/change_password`;
    }
  }
};

export default routes;
