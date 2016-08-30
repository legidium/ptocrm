class DocumentEditController {
  /* @ngInject */
  constructor($state, $stateParams, DocumentsService) {
    this.id = $stateParams.id;
    this.documentsService = DocumentsService;
  }

  $onInit() {
    console.log(this);
    this.documentsService.get(this.id)
      .then(response => { this.document = response })
      .catch(response => { this.document = null });
  }
}

export default DocumentEditController;
