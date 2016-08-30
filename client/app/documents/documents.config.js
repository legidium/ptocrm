/* @ngInject */
function configure($stateProvider) {
  $stateProvider
    .state({
      name: 'app.documents',
      url: '/documents',
      component: 'documents',
      abstract: true
    })
    .state({
      name: 'app.documents.list',
      url: '',
      component: 'documentsListContainer'
    })
    .state({
      name: 'app.documents.add',
      url: '/add',
      component: 'documentAdd'
    })
    .state({
      name: 'app.documents.edit',
      url: '/edit/{id:[0-9]+}',
      component: 'documentEdit'
    });
}

export default configure;
