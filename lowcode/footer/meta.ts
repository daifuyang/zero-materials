import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: "Footer",
  title: '公共页脚',
  docUrl: '',
  screenshot:'',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: "Footer",
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      
    ],
    component: {
      isContainer: true,
      disableBehaviors: '*',
    },
    supports: {
      className: true,
      style: true,
      loop: true,
    },
    advanced: {
      callbacks: {
        onMoveHook() {
          return false;
        },
      },
    },
  },
  experimental: {
    callbacks: {},
  },
  category: '容器',
  group: '组件',
};
const snippets: Snippet[] = [];

export default {
  ...Meta,
  snippets,
};
