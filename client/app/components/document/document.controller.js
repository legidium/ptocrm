class DocumentController {
  constructor() {
    this.name = 'document';
    this.title = 'Документ';
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

export default DocumentController;
