'use strict';

import angular from 'angular';

class LandingController {
  constructor($location, $anchorScroll) {
    this.name = 'LandingController';
    this.scrollToTop = () => {
        var old = $location.hash();
        $location.hash('top');
        $anchorScroll();
        $location.hash(old);
    };

    this.scrollToTop();
  }
}

LandingController.$inject = ['$location', '$anchorScroll'];

export default LandingController;
