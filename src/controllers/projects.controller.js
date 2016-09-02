'use strict';

import angular from 'angular';

class ProjectsController {
  constructor($location, $anchorScroll) {
    this.name = 'ProjectsController';
    this.scrollToProjects = () => {
      $location.hash('projects');
      $anchorScroll();
    };

    this.scrollToTop = () => {
      $location.hash('top');
      $anchorScroll();
    };
    this.scrollToProjects();
  }
}

ProjectsController.$inject = ['$location', '$anchorScroll'];

export default ProjectsController;
