import angular from 'angular';

import Dashboard from './dashboard/dashboard.module';
import Documents from './documents/documents.module';

let ComponentsModule = angular
  .module('app.components', [
    Dashboard,
    Documents
  ])
  .name;

export default ComponentsModule;
