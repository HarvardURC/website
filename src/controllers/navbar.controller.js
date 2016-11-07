'use strict';

import angular from 'angular';

class NavbarController {
  constructor($location, $anchorScroll) {
    this.name = 'NavbarController';
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
    $(document).on('click','.navbar-collapse.in',function(e) {
      if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
      }
    });
  }
}


export default NavbarController;
