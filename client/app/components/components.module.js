import angular from 'angular';

import Dashboard from './dashboard/dashboard.module';

let ComponentsModule = angular
  .module('app.components', [Dashboard])
  .name;

export default ComponentsModule;
