# BangaClient

This small Angular application shows the configuration needed to work with a Django REST Framework API.

## Using Django Token Authentication in Angular

Look in either controller and you'll see an example Angular `$http` call. Since our Django REST API is using token authentication, this token will need to be sent with every request.

```js
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
```

I obtain the token on login, which you will see in the AuthCtrl

```js
$scope.login = function() {
  $http({
    url: `${apiUrl}/api-token-auth/`,
    method: "POST",
    data: {
      "username": $scope.user.username,
      "password": $scope.user.password
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
```


In the Django application, I've installed the [django-cors-headers](https://github.com/ottoyiu/django-cors-headers/) library, and configured the application with the following code in `settings.py`.

```
CORS_ORIGIN_WHITELIST = (
    'localhost:8080',
    '127.0.0.1:8080'
)
CORS_ALLOW_CREDENTIALS=True
```

