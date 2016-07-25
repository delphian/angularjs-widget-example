widgetExampleApp.controller('WidgetsAccountsSummaryController', function($scope) {
    // Expected on $scope:
    //   {account}
    //     Account object.
    //   {options}
    //     See @scope.options definition below.
    //   [alerts]
    //     Errors pushed to the parent controller to be displayed:
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
});
