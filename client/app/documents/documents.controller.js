class DocumentsController {
  /* @ngInject */
  constructor($state) {
    this.state = $state;
  }

  $onInit() {
    console.log(this);
  }
}

export default DocumentsController;
