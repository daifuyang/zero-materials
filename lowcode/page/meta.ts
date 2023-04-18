import { IPublicModelSettingPropEntry } from '@alilc/lowcode-types';

export default [
  {
    group: '组件',
    componentName: 'Page',
    title: '页面',
    props: [
      {
        type: 'group',
        title: {
          label: '页面功能',
        },
        extraProps: {
          display: 'block',
        },
        items: [
          {
            name: '!header',
            title: '公共页头',
            setter: 'BoolSetter',
            extraProps: {
              getValue: (target: IPublicModelSettingPropEntry) => {
                const pageNode = target.node;
                return !!pageNode?.children?.find((n) => n.componentName === 'Header');
              },
              setValue: (target: IPublicModelSettingPropEntry, value: boolean) => {
                const pageNode = target.node;
                const node = pageNode?.children?.find((n) => n.componentName === 'Header');
                if (value && !node) {
                  const snippets = {
                    componentName: 'Header',
                    title: '公共区块',
                    props: {},
                    children: [],
                  };
                  const node2 = pageNode?.document?.createNode(snippets);
                  const insertNode = pageNode?.children?.get(0);
                  node2 && insertNode && pageNode?.insertBefore(node2, insertNode, false);
                } else if (!value && node) {
                  node.remove();
                }
              },
            },
          },
          {
            name: '!footer',
            title: '开启页尾',
            setter: 'BoolSetter',
            extraProps: {
              getValue: (target: IPublicModelSettingPropEntry) => {
                const pageNode = target.node;
                return !!pageNode?.children?.find((n) => n.componentName === 'Footer');
              },
              setValue: (target: IPublicModelSettingPropEntry, value: boolean) => {
                const pageNode = target.node;
                const node = pageNode?.children?.find((n) => n.componentName === 'Footer');
                if (value && !node) {
                  const snippets = {
                    componentName: 'Footer',
                    title: '公共区块',
                    props: {},
                    children: [],
                  };
                  const node2 = pageNode?.document?.createNode(snippets);
                  node2 && pageNode?.insertBefore(node2);
                } else if (!value && node) {
                  node.remove();
                }
              },
            },
          },
        ],
      },
    ],
    configure: {
      events: {
        supportedLifecycles: [
          {
            description: '初始化时',
            name: 'constructor',
          },
          {
            description: '装载后',
            name: 'componentDidMount',
          },
          {
            description: '更新时',
            name: 'componentDidMount',
          },
          {
            description: '卸载时',
            name: 'componentWillUnmount',
          },
        ],
      },
      supports: {
        style: true,
      },
      component: {
        isContainer: true,
        disableBehaviors: '*',
      },
    },
    category: '基础',
  },
];
