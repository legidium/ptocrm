class DocumentsListController {
  constructor() {
  }

  $onInit() {
    console.log(this);
  }

  $onChanges(changes) {
    if (changes.documents) {
      this.documents = angular.copy(this.documents);
    }
  }

  $postLink() {
    // component post-link
  }

  $onDestroy() {
    // component $destroy function
  }
}

export default DocumentsListController;
