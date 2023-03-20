import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ColorfulButtonMeta: ComponentMetadata = {
  componentName: 'ColorfulButton',
  title: 'ColorfulButton',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'ssr-materials',
    version: '0.1.0',
    exportName: 'ColorfulButton',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [

    ],
    supports: {
      style: true,
    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: 'ColorfulButton',
    screenshot: '',
    schema: {
      componentName: 'ColorfulButton',
      props: {},
    },
  },
];

export default {
  ...ColorfulButtonMeta,
  snippets,
};
