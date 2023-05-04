/**
 * This represents some generic auth provider API, like Firebase.
 */

export const fakeAuthProvider = {
    isAuthenticated: false,//mudar aqui o estado de logado ou não
    signin(callback: VoidFunction) {
      fakeAuthProvider.isAuthenticated = true;
      setTimeout(callback, 100); // fake async
    },
    signout(callback: VoidFunction) {
      fakeAuthProvider.isAuthenticated = false;
      setTimeout(callback, 100);
    },
  };