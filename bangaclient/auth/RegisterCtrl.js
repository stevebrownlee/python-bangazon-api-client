angular.module('BangaClient').controller('RegisterController', [
  '$scope',
  '$http',
  '$location',
  'RootFactory',
  'apiUrl',
function($scope, $http, $location, RootFactory, apiUrl) {

  // $scope.user = {
  //   username: "steve",
  //   password: "pass1234"
  // };
  //
  $scope.user = {
    first_name: "Steve",
    last_name: "Brownlee",
    email: "me@me.com",
    username: "",
    password: ""
  };

  $scope.register = function() {
      $http({
        url: `${apiUrl}/register/`,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          "username": $scope.user.username,
          "password": $scope.user.password,
          "email": $scope.user.email,
          "first_name": $scope.user.first_name,
          "last_name": $scope.user.last_name
        }
      }).then(
        res => {
          RootFactory.setToken(res.data.token);
          if (res.data.token !== "") {
            $location.path('/products');
          }
        },
        console.error
      );
  };

}]);





