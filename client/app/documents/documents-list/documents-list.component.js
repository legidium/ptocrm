import controller from './documents-list.controller';
import template   from './documents-list.component.html';
import './documents-list.component.css';

const DocumentsListComponent = {
  restrict: 'E',
  require: {
    parent: '^^documentsListContainer'
  },
  bindings: {
    documents: '<',
    onDelete: '&'
  },
  template,
  controller
};

export default DocumentsListComponent;
