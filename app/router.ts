import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // frontend
  router.get('*', controller.home.index);
};
