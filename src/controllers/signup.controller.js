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
  }

  apply() {
    if (this.application.first_name &&
        this.application.last_name &&
        this.application.email &&
        this.application.concentration &&
        this.application.first_choice &&
        this.application.second_choice &&
        this.application.third_choice &&
        this.application.class &&
        this.application.reason &&
        this.application.background &&
        this.application.why) {
      this.isSuccess = true;
      this.button_text = "Submitted";
      return this.http.post('/api/signup', this.application);
    }
  }
}

SignupController.$inject = ['$http', '$location', '$anchorScroll'];

export default SignupController;
