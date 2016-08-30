class DocumentsService {
  /* @ngInject */
  constructor(ApiService) {
    this.api = ApiService;
  }

  list() {
    return this.api.getDocuments().then(response => response.data);
  }

  get(id) {
    return this.api.getDocument(id).then(response => response.data);
  }

  create() {

  }

  update() {

  }

  delete(id) {

  }
}

export default DocumentsService;
