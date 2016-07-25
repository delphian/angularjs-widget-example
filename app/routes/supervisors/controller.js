widgetExampleApp.controller('RouteSupervisorsController', function($scope) {
  $scope.accounts = [];
  angular.forEach(widgetExample.mocks.accounts, function(account) {
    if (account.type == widgetExample.models.AccountType.supervisor) {
      $scope.accounts.push(new widgetExample.models.Account(account));
    }
  });
});
