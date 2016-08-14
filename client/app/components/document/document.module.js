import angular from 'angular';
import uiRouter from 'angular-ui-router';

import DocumentComponent from './document.component';

let DocumentModule = angular
  .module('document', [uiRouter])
  .component('document', DocumentComponent)
  .config(config)
  .name;

/* @ngInject */
function config($stateProvider) {
  $stateProvider
    .state('document', {
      url: '/document/:id',
      component: 'document'
    });
}

export default DocumentModule;
