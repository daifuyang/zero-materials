import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { uuid } from '../_utils/utils';

const Meta: ComponentMetadata = {
  componentName: 'Breadcrumb',
  title: '面包屑',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: 'Breadcrumb',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    isExtend: true,
    props: [
      {
        name: 'items',
        title: '菜单项',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'key',
                      title: 'key',
                      setter: 'StringSetter',
                      initialValue: (val) => val || uuid(),
                    },
                    {
                      name: 'title',
                      title: '菜单名称',
                      isRequired: true,
                      setter: 'StringSetter',
                    },
                    {
                      name: 'href',
                      title: '跳转链接',
                      isRequired: true,
                      setter: 'StringSetter',
                    },
                  ],
                },
              },
            },
          },
        },
      },
    ],
    component: {},
    supports: {
      className: true,
      style: true,
      loop: true,
    },
    advanced: {},
  },
  experimental: {
    callbacks: {},
  },
  category: '容器',
  group: '组件',
};
const snippets: Snippet[] = [
  {
    title: '面包屑',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_breadcrumb.png',
    schema: {
      componentName: 'Breadcrumb',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
