angular.module('BangaClient').controller('ProductController', [
  '$scope', 
  '$http', 
  '$location', 
  'RootFactory', 
  function($scope, $http, $location, RootFactory) {
    $scope.products = [];

    RootFactory.getApiRoot()
      .then(
        root => 
          $http.get(`${root.products}`)
               .then(
                 res => $scope.products = res.data.results,
                 err => console.log
               )
        ,err => console.log
      );
  }
]);