import angular from 'angular';
import uiRouter from 'angular-ui-router';

import DocumentsComponent from './documents.component';

let DocumentsModule = angular
  .module('documents', [uiRouter])
  .config(config)
  .component('documents', DocumentsComponent)
  .name;

/* @ngInject */
function config($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('documents', {
      url: '/',
      component: 'documents'
    });
}

export default DocumentsModule;
