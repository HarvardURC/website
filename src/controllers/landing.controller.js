'use strict';

import angular from 'angular';

class LandingController {
  constructor($location, $anchorScroll) {
    this.name = 'LandingController';
    this.scrollToTop = () => {
      $location.hash('top');
      $anchorScroll();
    };

    this.scrollToTop();
  }
}

LandingController.$inject = ['$location', '$anchorScroll'];

export default LandingController;
