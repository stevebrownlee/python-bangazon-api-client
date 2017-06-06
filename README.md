# BangaClient

This small Angular application shows the configuration needed to work with a Django REST Framework API.

## Using Django CSRF Token

Look in the [app.js](./bangaclient/app.js) file to find the following code, which configures Angular's `$http` module to send the Django CSRF session token with every XHR request.

```
$httpProvider.defaults.xsrfCookieName = 'csrftoken';
$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
$httpProvider.defaults.withCredentials = true;
```

In the Django application, I've installed the [django-cors-headers](https://github.com/ottoyiu/django-cors-headers/) library, and configured the application with the following code in `settings.py`.

```
CORS_ORIGIN_WHITELIST = (
    'localhost:8080',
    '127.0.0.1:8080'
)
CORS_ALLOW_CREDENTIALS=True
```

