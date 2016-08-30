import angular  from 'angular';
import uiRouter from 'angular-ui-router';

import DashboardComponent from './dashboard.component';

const DashboardModule = angular
  .module('dashboard', [uiRouter])
  .component('dashboard', DashboardComponent)
  .config(config)
  .name;

/* @ngInject */
function config($stateProvider) {
  $stateProvider
    .state({
      name: 'app.dashboard',
      url: '/',
      component: 'dashboard'
    });
}

export { DashboardModule };
