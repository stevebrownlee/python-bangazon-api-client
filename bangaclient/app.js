// Create main Angular module
var app = angular.module('BangaClient', ['ngRoute'])
            .constant('apiUrl', "http://localhost:8000");

angular.module('BangaClient').config(
[
  '$interpolateProvider',
  '$routeProvider',
  function($interpolateProvider, $routeProvider) {

    $interpolateProvider.startSymbol('((');
    $interpolateProvider.endSymbol('))');

    $routeProvider
      .when('/', {
        controller: 'AuthController',
        templateUrl: 'bangaclient/auth/login.html'
      })
      .when('/products', {
        controller: 'ProductController',
        templateUrl: 'bangaclient/products/products.html'
      })
      .when('/types', {
        controller: 'ProductTypesController',
        templateUrl: 'bangaclient/products/producttypes.html'
      });
  }
]);

angular.module('BangaClient').factory('RootFactory', [
  "$http",
  "apiUrl",
  ($http, apiUrl) => {
    let secure_token = null;

    return {
      getApiRoot () {
        return $http({
          url: apiUrl,
          headers: {
            'Authorization': "Token " + secure_token
          }
        }).then(res => res.data)
      },
      setToken (token) {
        secure_token = token
      },
      getToken () {
        return secure_token;
      }
    }
  }
]);
