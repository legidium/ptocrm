class DocumentsController {
  constructor() {
    this.name = 'documents';
  }

  $onInit() {
    console.log('Init');
  }

  $onChanges($change) {
    console.log('Change');
  }

  $onDestroy() {
    console.log('Destroy');
  }
}

export default DocumentsController;
