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
          $http.get(`${root.product_types}`)
               .then(
                 res => $scope.product_types = res.data.results,
                 console.log
               )
        ,console.log
      );
  }
]);