'use strict';

import angular from 'angular';

class ProjectsController {
  constructor($location, $anchorScroll, $timeout) {
    this.name = 'ProjectsController';
    this.scrollToProjects = () => {
      var old = $location.hash();
      $location.hash('projects');
      $anchorScroll();
      $location.hash(old);
    };

    this.scrollToTop = () => {
        var old = $location.hash();
        $location.hash('top');
        $anchorScroll();
        $location.hash(old);
    };

    $timeout(this.scrollToProjects, 10);
  }
}

ProjectsController.$inject = ['$location', '$anchorScroll', '$timeout'];

export default ProjectsController;
