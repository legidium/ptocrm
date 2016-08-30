import angular from 'angular';

import './lib/bootstrap/dist/css/bootstrap.min.css';
import './lib/font-awesome/css/font-awesome.min.css';
import './assets/css/main.css';

import { AppModule } from './app';

angular.element(document).ready(function () {
  angular.bootstrap(document, [AppModule], { strictDi: true });
});

