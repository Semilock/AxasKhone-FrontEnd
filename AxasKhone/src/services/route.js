import apiServerAddress from '../../config';

const routes = {
  basePath: `${apiServerAddress.active}`,
  login: 'login',
  refreshToken: 'refresh',
  register: 'register',
  register_validation: 'register_validation',
  registerCompliment: 'register_compliment',
  notificationsList: 'notifications',
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
    get follow() {
      return `${this.basePath}follow/`;
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
    },
    get addToFavorites() {
      return `${this.basePath}add_to_favorites/`;
    },
    get removeFavorites() {
      return `${this.basePath}remove_from_favorites/`;
    },
    get tagsSearch() {
      return `${this.basePath}tags/search/`;
    },
    get usersSearch() {
      return `${this.basePath}names/search/`;
    },
    get tagSearchItems() {
      return `${this.basePath}tags/list_posts/?tag`;
    }
  }
};

export default routes;
