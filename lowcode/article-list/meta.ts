import {
  ComponentMetadata,
  Snippet,
  IPublicModelNode,
  IPublicEnumTransformStage,
} from '@alilc/lowcode-types';

import _ from 'lodash';

const Meta: ComponentMetadata = {
  componentName: 'ArticleList',
  title: '文章列表',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'zero-materials',
    version: '0.1.0',
    exportName: 'Slot',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'list',
        title: {
          label: '添加列表',
          tip: '点击按钮选择绑定列表',
        },
        setter: 'DataListSetter',
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
          const schema: any = currentNode?.exportSchema(IPublicEnumTransformStage.Save);
          const { props } = schema;
          const { list = {} } = props;
          const { categoryIds = [] } = list;
          (window as any).assignDataSource((oldList: any) => {
            // 删除原来的api
            let newList = [...oldList];
            if (categoryIds) {
              newList = _.filter(oldList, (o) => {
                const id = `article_list_${categoryIds.join('_')}`;
                return o.id !== id;
              });
            }
            return newList;
          });
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
    title: '列表容器',
    screenshot:
      'https://img.alicdn.com/imgextra/i3/O1CN018CwRJM1ZkIpmeEfRD_!!6000000003232-55-tps-128-128.svg',
    schema: {
      componentName: 'ArticleList',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
