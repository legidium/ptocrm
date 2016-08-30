import angular from 'angular';

import CommonComponentsModule from './components';
import CommonServicesModule   from './services';

const CommonModule = angular
  .module('app.common', [
    CommonComponentsModule,
    CommonServicesModule
  ])
  .name;

export { CommonModule };
