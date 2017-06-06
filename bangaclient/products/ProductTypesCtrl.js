angular.module('BangaClient').controller('ProductTypesController', [
  '$scope', 
  '$http', 
  '$location', 
  'RootFactory', 
  function($scope, $http, $location, RootFactory) {
    $scope.product_types = [];

    RootFactory.getApiRoot()
      .then(
        root => 
          $http({
            url: `${root.product_types}`,
            method: "GET",
            headers: {
              'Authorization': "Token " + RootFactory.getToken()
            }
          })
          .then(
            res => $scope.product_types = res.data.results,
            console.log
          )
        ,console.log
      );
  }
]);
