import angular from 'angular';

import ApiService from './api.service';
import DocumentsService from './documents.service';

const CommonServicesModule = angular
  .module('app.common.services', [])
  .service('ApiService', ApiService)
  .service('DocumentsService', DocumentsService)
  .name;

export default CommonServicesModule;
