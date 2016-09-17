'use strict';

import controllers from './controllers/index';
import uirouter from 'angular-ui-router';
import angularFilter from 'angular-filter';
import routes from './app.routes';

angular.module('HurcSite', ['ui.router', 'angular.filter'])
  .config(routes);

for (var controller of controllers) {
  angular.module('HurcSite')
    .controller(controller.name, controller);
}
