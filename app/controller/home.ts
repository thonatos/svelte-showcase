import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;

    ctx.locals = {
      PUBLIC_PATH: ctx.app.config.site.public_path,
    };

    await ctx.render('index.html', {
      title: 'Egg.js',
      description: 'better enterprise frameworks and apps with Node.js & Koa.',
    });
  }
}
