import { PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  public router?: Router;

  public configureRouter(
    config: RouterConfiguration,
    router: Router,
  ): void {
    this.router = router;

    config.title = '@aujsf';
    config.titleSeparator = ' - ';
    config.map([
      {
        name: 'home', title: 'Home',
        route: ['', 'home'], nav: true,
        moduleId: PLATFORM.moduleName('./pages/home'),
      },
      {
        name: 'examples', title: 'Examples',
        route: 'examples', nav: true,
        moduleId: PLATFORM.moduleName('./pages/examples'),
      },
    ]);
  }
}
