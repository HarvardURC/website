'use strict';

import angular from 'angular';

class NavbarController {
  constructor($location, $anchorScroll) {
    this.name = 'NavbarController';
    this.scrollToProjects = () => {
      $location.hash('projects');
      $anchorScroll();
    };
    this.scrollToTop = () => {
      $location.hash('top');
      $anchorScroll();
    };
    $(document).on('click','.navbar-collapse.in',function(e) {
      if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
      }
    });
  }
}


export default NavbarController;
