'use strict';

import angular from 'angular';

class SignupController {
  constructor($http, $location, $anchorScroll) {
    this.name = 'SignupController';
    this.application = {};
    this.http = $http;
    this.isSuccess = false;
    this.button_text = "Apply";
    $location.hash('top');
    $anchorScroll();
    this.teams = [
        "UAS",
        "Mech Warfare",
        "Micromouse",
        "Pacbot",
        "Pacbot organizational team"
    ];
  }

  apply() {
    if (this.check_application()) {
      this.isSuccess = true;
      this.button_text = "Submitted";
      return this.http.post('/api/signup', this.application);
    }
  }

  check_application() {
    return (this.application.first_name &&
    this.application.last_name &&
    this.application.email &&
    this.application.concentration &&
    this.application.first_choice &&
    this.application.second_choice &&
    this.application.third_choice &&
    this.application.class &&
    this.application.reason &&
    this.application.background &&
    this.application.why);
  }
}

SignupController.$inject = ['$http', '$location', '$anchorScroll'];

export default SignupController;
