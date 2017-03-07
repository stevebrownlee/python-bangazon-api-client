// Create main Angular module
var app = angular.module('BangaClient', ['ngRoute'])
            .constant('apiUrl', "http://localhost:8000");

// Configure to use interpolation punctuation that differs from Django's
// and add the CSRF token when communicating via XHR with Django
angular.module('BangaClient').config(
[
    '$interpolateProvider',
    '$httpProvider',
    '$routeProvider',
    function($interpolateProvider, $httpProvider, $routeProvider) {

      $interpolateProvider.startSymbol('((');
      $interpolateProvider.endSymbol('))');

      $httpProvider.defaults.xsrfCookieName = 'csrftoken';
      $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
      $httpProvider.defaults.withCredentials = true;

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
    const httpGet = $http.get(apiUrl);

    return {
      getApiRoot () {
        return httpGet.then(res => res.data)
      }
    }
  }
]);
