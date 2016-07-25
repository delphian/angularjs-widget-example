widgetExampleApp.controller('RouteMainController', function($scope) {
  $scope.accounts = [];
  angular.forEach(widgetExample.mocks.accounts, function(account) {
    $scope.accounts.push(new widgetExample.models.Account(account));
  });
});
