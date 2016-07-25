widgetExampleApp.controller('RouteWorkersController', function($scope) {
  $scope.accounts = [];
  angular.forEach(widgetExample.mocks.accounts, function(account) {
    if (account.type == widgetExample.models.AccountType.worker) {
      $scope.accounts.push(new widgetExample.models.Account(account));
    }
  });
});
