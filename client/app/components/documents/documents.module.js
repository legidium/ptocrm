import angular from 'angular';
import uiRouter from 'angular-ui-router';

import DocumentsComponent from './documents.component';

let DocumentsModule = angular
  .module('documents', [uiRouter])
  .config(config)
  .component('documents', DocumentsComponent)
  .name;

/* @ngInject */
function config($stateProvider) {
  $stateProvider.state('documents', {
      url: '/documents',
      component: 'documents'
    });
}

export default DocumentsModule;
