import controller from './document-add.controller';
import template   from './document-add.component.html';
import './document-add.component.css';

const DocumentAddComponent = {
  restrict: 'E',
  require: {
    parent: '^^documents'
  },
  bindings: {},
  template,
  controller
};

export default DocumentAddComponent;
