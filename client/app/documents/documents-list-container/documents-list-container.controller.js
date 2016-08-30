class DocumentsListContainerController {
  /* @ngInject */
  constructor(DocumentsService) {
    this.documentsService = DocumentsService;
  }

  $onInit() {
    console.log(this);
    this.documents = null;
    this.documentsService.list().then(response => { this.documents = response; });

  }

  addDocument({ document }) {
    /*if (!document) return;
     this.documents.unshift(document);*/
  }

  deleteDocument(event) {
    alert('DELETE');
    /*if (this.documents) {
     let idx = event.id - 1;
     this.documents.splice(0, 1);
     this.documents = this.documents.slice(0);
     }*/
  }
}

export default DocumentsListContainerController;
