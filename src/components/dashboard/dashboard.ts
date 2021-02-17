import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class dashboard {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'ILRW';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: 'moshtarek', moduleId: PLATFORM.moduleName('../pishkhan/pishkhan'),   title: 'پیشخوان' },
      { route: '',  moduleId: PLATFORM.moduleName('../moshtarek/moshtarek'), name:'امور مشترکین' },
    ]);

    this.router = router;
  }
}