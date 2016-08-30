import angular  from 'angular';
import uiRouter from 'angular-ui-router';

import { DocumentsComponent }              from './documents.component';
import { DocumentsListComponent }          from './documents-list';
import { DocumentsListContainerComponent } from './documents-list-container';
import { DocumentsNavComponent }           from './documents-nav';
import { DocumentAddComponent }            from './document-add';
import { DocumentEditComponent }           from './document-edit';
import { DocumentFormComponent }           from './document-form';

import configure from './documents.config';

const DocumentsModule = angular
  .module('documents', [uiRouter])
  .config(configure)

  .component('documents',              DocumentsComponent)
  .component('documentsList',          DocumentsListComponent)
  .component('documentsListContainer', DocumentsListContainerComponent)
  .component('documentsNavComponent',  DocumentsNavComponent)
  .component('documentAdd',            DocumentAddComponent)
  .component('documentEdit',           DocumentEditComponent)
  .component('documentForm',           DocumentFormComponent)

  .name;

export { DocumentsModule };
