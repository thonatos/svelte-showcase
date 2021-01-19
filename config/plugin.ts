import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,

  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },

  assets: {
    enable: false,
    package: 'egg-view-assets',
  },
};

export default plugin;
