import { ComponentMetadata, Snippet, IPublicModelNode } from '@alilc/lowcode-types';


const Meta: ComponentMetadata = {
  componentName: 'FormList',
  title: '表单',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'form-materials',
    version: '0.1.0',
    exportName: 'Form',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: '_form',
        title: {
          label: '添加列表',
          tip: '点击按钮选择绑定列表',
        },
        setter: 'FormListSetter',
        supportVariableGlobally: false,
      },
    ],
    component: {
      isContainer: true,
    },
    supports: {
      className: true,
      style: true,
      loop: true,
    },
    advanced: {
      callbacks: {
        onNodeRemove: (e: MouseEvent, currentNode: IPublicModelNode) => {
          if (currentNode.isEmptyNode) {
            console.log('currentNode', currentNode);
          }
        },
      },
    },
  },
  experimental: {
    callbacks: {},
  },
  category: '数据',
  group: '组件',
};
const snippets: Snippet[] = [
  {
    title: '表单',
    screenshot:
      'https://img.alicdn.com/tfs/TB1oH02u2b2gK0jSZK9XXaEgFXa-112-64.png',
    schema: {
      componentName: 'FormList',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
