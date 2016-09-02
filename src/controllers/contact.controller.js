'use strict';

import angular from 'angular';

class ContactController {
  constructor($http) {
    this.name = 'ContactController';
    this.application = {};
    this.http = $http;
    this.isSuccess = false;
    this.button_text = "Sign up";
  }

  subscribe() {
    if (this.application.first_name &&
        this.application.last_name &&
        this.application.email) {
      this.isSuccess = true;
      this.button_text = "Subscribed";
      return this.http.post('/api/subscribe', this.application);
    }
  }
}

ContactController.$inject = ['$http'];

export default ContactController;
