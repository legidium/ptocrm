class NavigationController {
  /* @ngInject */
  constructor($state, $uibModal) {
    this.state = $state;
    this.modal = $uibModal;
  }

  $onInit() {
    console.log(this);
  }

  open() {
    this.modal.open({ templateUrl: 'myModalContent.html' })
      .result.then(selectedItem => { console.log(selectedItem); });
  }
}

export default NavigationController;
