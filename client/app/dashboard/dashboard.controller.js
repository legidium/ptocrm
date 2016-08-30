class DashboardController {
  constructor() {
    this.name = 'dashboard';
    console.log('CONSTRUCTOR: dashboard');
  }

  $onDestroy() {
    console.log('DECONSTRUCTOR: dashboard');
  }
}

export default DashboardController;
