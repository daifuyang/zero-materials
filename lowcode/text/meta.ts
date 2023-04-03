import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: "Text",
  title: '正文',
  docUrl: '',
  screenshot:
    'https://img.alicdn.com/imgextra/i3/O1CN01n5wpxc1bi862KuXFz_!!6000000003498-55-tps-50-50.svg',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: "Text",
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'children',
        title: {
          label: '正文',
          tip: '按钮显示的正文',
        },
        setter: 'StringSetter',
        defaultValue: "",
      },
      {
        name: 'ellipsis',
        title: {
          label: '溢出省略',
          tip: '自动溢出省略',
        },
        setter: {
          componentName: 'SelectSetter',
          initialValue: '',
          props: {
            mode:'single',
            options: [
              {
                title: '不隐藏',
                value: '',
              },
              {
                title: '显示一行',
                value: '1',
              },
              {
                title: '显示两行',
                value: '2',
              },
            ]
          },
        }
      },
    ],
    supports: {
      className: true,
      style: true,
      loop: false,
    },
    component: {},
    advanced: {},
  },
  experimental: {
    callbacks: {},
  },
  category: '基础',
  group: '组件',
  priority: '9998'
};
const snippets: Snippet[] = [
  {
    title: '正文',
    screenshot:
      'https://img.alicdn.com/imgextra/i3/O1CN01n5wpxc1bi862KuXFz_!!6000000003498-55-tps-50-50.svg',
    schema: {
      componentName: "Text",
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
