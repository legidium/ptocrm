class AppController {
  /* @ngInject */
  constructor() {
    this.name = 'app';
  }

  $onInit() {
    console.log(this);
  }
}

export default AppController;
