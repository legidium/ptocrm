import angular from 'angular';

import { NavigationComponent } from './navigation';

const ComponentsModule = angular
  .module('app.components', [])
  .component('navigation', NavigationComponent)
  .name;

export { ComponentsModule };
