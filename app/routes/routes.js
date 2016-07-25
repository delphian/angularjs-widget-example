widgetExampleApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/workers', {
        templateUrl: '/app/routes/workers/view.html',
        controller: 'RouteWorkersController'
    })
    .when('/supervisors', {
        templateUrl: '/app/routes/supervisors/view.html',
        controller: 'RouteSupervisorsController'
    })
    .otherwise({
        redirectTo: '/',
        templateUrl: '/app/routes/main/view.html',
        controller: 'RouteMainController'
    });
    $locationProvider.html5Mode(true);
});
