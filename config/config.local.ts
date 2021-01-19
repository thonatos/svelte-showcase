import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.assets = {
    publicPath: '/public',
    devServer: {
      command: 'rollup -c app/view/rollup.config.js -w',
      port: 5000,
      env: {
        APP_VIEW: 'app/view',
        APP_PUBLIC: 'app/public',
      },
    },
  };

  return config;
};
