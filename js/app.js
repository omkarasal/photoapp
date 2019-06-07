var app = angular.module("photoApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'HomeController',
        templateUrl: 'views/main.html'
    })
    .when('/photos/:id', {
        controller: 'PhotoController',
        templateUrl: 'views/photos.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});