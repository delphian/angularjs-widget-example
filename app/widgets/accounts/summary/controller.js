/**
 * Display an individual account's details.
 *
 * Usage:
 *   Parent controller:
 *     $scope.alerts = [];
 *     $scope.account = widgetsExample.mock.accounts.pop();
 *     $scope.config = {
 *       accountSummary: {
 *         options: {
 *           unique: 1234
 *         }
 *       }
 *     }
 *   Parent view:
 *     <widgets-accounts-summary account="account" options="config.accountSummary.options", alerts="alerts"></widgets-accounts-summary>
 */
widgetExampleApp.controller('WidgetsAccountsSummaryController', function($scope) {
    // Expected on $scope:
    //   {account}
    //     Account object.
    //   {options}
    //     See @scope.options definition below.
    //   [alerts]
    //     Errors pushed to the parent controller to be displayed on parent view:
    //     $scope.alerts.push({ type: 'danger', msg: 'Something broke!' });
    if (typeof($scope.options) == 'undefined' || $scope.options == null) {
        $scope.options = {
            // Unique identifier for this widget instance. Used for CSS identifier.
            unique: Math.floor((Math.random() * 100000) + 1)
        };
    }
    // Data retrieved or derived from API calls. Runtime variables set by user.
    $scope.data = { };
    // configuration and runtime variables set by controller.
    $scope.config = {
        // User initiated Ajax request is underway.
        working: false,
    };
    // Fallback to console logging if alerts is not present.
    if (typeof ($scope.alerts) == 'undefined') {
        $scope.alerts = [];
        $scope.$watch('alerts', function (newValue, oldValue) {
            if (newValue != oldValue) {
                console.log(newValue);
            }
        });
    }
});
