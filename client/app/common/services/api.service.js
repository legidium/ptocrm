const API_HOST     = 'localhost';
const API_BASE_URL = 'http://localhost:8080/api/v1/';

class ApiService {
  /* @ngInject */
  constructor($http) {
    this.http = $http;
  }

  getDocuments(params, cache = false) {
    return this.http.get('data/documents.json');
    //return this.http.get(API_BASE_URL + 'documents', { params: params, cache: cache })
  }

  getDocument(id, params, cache = false) {
    return this.http.get('data/document.json');
    //return this.http.get(API_BASE_URL + 'documents/' + id, { params: params, cache: cache })
  }

  createDocument(document) {
    return this.http.post(API_BASE_URL + 'documents', { document });
  }

  updateDocument(document) {
    return this.http.put(API_BASE_URL + 'documents/' + document.id, document)
  }

  deleteDocument(id) {
    return this.http.delete(API_BASE_URL + 'documents/' + id);
  }
}

export default ApiService;
