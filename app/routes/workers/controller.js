widgetExampleApp.controller('RouteWorkersController', function($scope) {
    $scope.alerts = [];
    $scope.accounts = [];
    $scope.config = {
        accountsSummary: {
            options: {
                unique: 1234
            }
        }
    }
    // Close method for alert boxes
    $scope.closeAlert = function (i) {
        $scope.alerts.splice(i, 1);
    }
    // Display only worker accounts.
    angular.forEach(widgetExample.mocks.accounts, function (account) {
        if (account.type == widgetExample.models.AccountType.worker) {
            $scope.accounts.push(new widgetExample.models.Account(account));
        }
    });
    if ($scope.accounts.length <= 0) {
        $scope.alerts.push({ type: 'danger', msg: 'No accounts found!' });
    }
});
