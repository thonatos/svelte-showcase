import { Controller } from 'egg';
import { load } from '../lib/loader';

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

  public async ssr() {
    const { ctx } = this;

    ctx.locals = {
      PUBLIC_PATH: ctx.app.config.site.public_path,
    };
    
    const title = 'Egg.js';
    const description = 'better enterprise frameworks and apps with Node.js & Koa.';

    const Component = await load('App.svelte');
    
    const { html, css } = Component.render({ 
      title,
      description,
     });

    //  console.log('===head', head)
    //  console.log('===html', html)
    //  console.log('===css', css)

    await ctx.render('ssr.html', {
      title,
      description,
      css: css.code,
      html,
    });
  }
}
