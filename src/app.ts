import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';
import {inject, TemplatingEngine} from 'aurelia-framework';
import 'datatables.net-dt'
@inject(TemplatingEngine)
export class App {
  router: Router;
  constructor(private templatingEngine:TemplatingEngine)
  {
    this.templatingEngine = templatingEngine;
  }
  
  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Hahn';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('./components/home/home'),   title: 'Home' },
      { route: 'success',  moduleId: PLATFORM.moduleName('./components/success/success'), name:'success' },
      { route: 'home',  moduleId: PLATFORM.moduleName('./components/home/home'), name:'home' },
      { route: 'test',  moduleId: PLATFORM.moduleName('./test'), name:'home' },
      { route: 'dashboard',  moduleId: PLATFORM.moduleName('./components/dashboard/dashboard'), name:'داشبورد' },
    ]);

    this.router = router;
  }
}
