/**
 * Display summary information for a single account.
 *
 * Examples:
 * <widgets-accounts-summary account="account" options="options" alerts="alerts"></widgets-accounts-summary>
 *
 * See controller for detailed documentation of parameters.
 */
widgetExampleApp.directive('widgetsAccountsSummary', function () {
    return {
        controller: 'WidgetsAccountsSummaryController',
        restrict: 'E',
        templateUrl: '/app/widgets/accounts/summary/view.html',
        scope: {
            account: '=?account',
            options: '=?options',
            alerts: '=?alerts'
        }
    };
});
