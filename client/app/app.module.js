import angular     from 'angular';
import uiRouter    from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import * as vis    from 'ui-router-visualizer';

import { CommonModule }     from './common';
import { ComponentsModule } from './components';
import { DashboardModule }  from './dashboard';
import { DocumentsModule }  from './documents';
import { AppComponent }     from './app.component';

import configure from './app.config';

const AppModule = angular
  .module('app', [
    uiRouter,
    uiBootstrap,
    CommonModule,
    ComponentsModule,
    DashboardModule,
    DocumentsModule
  ])
  .component('app', AppComponent)
  .config(configure)
  .run(run)
  .name;

/* @ngInject */
function run($rootScope, $state, ng1UIRouter) {
  $rootScope.locale = 'ru';
  $rootScope.$on('$stateChangeStart', (event, toState) => { toState.resolve && ($rootScope.isLoading = true); });
  $rootScope.$on('$stateChangeSuccess', (event, toState) => { toState.resolve && ($rootScope.isLoading = false); });
  vis.visualizer(ng1UIRouter);
}

export { AppModule };
