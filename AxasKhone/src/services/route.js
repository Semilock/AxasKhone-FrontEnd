import apiServerAddress from '../../config';

const routes = {
  basePath: `${apiServerAddress.active}`,
  login: 'login',
  refreshToken: 'refresh',
  register: 'register',
  register_validation: 'register_validation',
  registerCompliment: 'register_compliment',
  user: {
    basePath: 'user/',
    get sendContact() {
      return `${this.basePath}invite_friends`;
    },
    get profileInfo() {
      return `${this.basePath}profile_info`;
    },
    get post() {
      return `${this.basePath}post`;
    },
    get changePassword() {
      return `${this.basePath}change_password`;
    },
    get homeFeed() {
      return `${this.basePath}home`;
    },
    get favorites() {
      return {
        basePath: 'user/favorites/',
        get index() {
          return `${this.basePath}`;
        },
        get favoriteLists() {
          return `${this.basePath}list_favorites`;
        }
      };
    }
  }
};

export default routes;
