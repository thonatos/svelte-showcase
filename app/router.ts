import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/ssr', controller.home.ssr);
  router.get('/', controller.home.index);  
};
