import fs from 'fs';
import path from 'path';
import { typescript } from 'svelte-preprocess';
import { compile, preprocess } from 'svelte/compiler';

const getComponentName = (filename: string) => {
  const name = path.parse(filename).name
    .replace(/^\d/, '_$&')
    .replace(/[^a-zA-Z0-9_$]/g, '');

  return name[0].toUpperCase() + name.slice(1);
};

const covertToModule = (src: string, filename: string) => {
  // @ts-ignore
  const m = new module.constructor();
  // @ts-ignore
  m.paths = module.paths;
  m._compile(src, filename);
  return m.exports.default;

};

export const load = async (component: string): Promise<{
  render: (props?: {}, options?: {}) => {
    html: any;
    css: {
      code: string;
      map: any;
    };
    head: string;
  };
}> => {

  const filepath = path.join(__dirname, '../view/src', component);
  const filename = path.basename(filepath);
  const source = fs.readFileSync(filepath, 'utf-8');

  const name = getComponentName(filename);

  const { code } = await preprocess(source, [
    typescript({
      tsconfigFile: path.join(__dirname, '../view/tsconfig.json'),
    }),
  ], {
    filename,
  });

  const { js } = compile(code, {
    name,
    filename,
    format: 'cjs',
    generate: 'ssr',
  });

  const Component = covertToModule(js.code, filename);

  return Component;
};

