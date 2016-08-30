/* @ngInject */
function configure($locationProvider, $urlRouterProvider, $stateProvider, $compileProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  $compileProvider.debugInfoEnabled(true);

  $stateProvider
    .state({ name: 'app', redirectTo: 'app.dashboard', component: 'app' });
}

export default configure;
