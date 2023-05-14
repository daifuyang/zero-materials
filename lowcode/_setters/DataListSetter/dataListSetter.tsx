import { IPublicModelNode, IPublicEnumTransformStage } from '@alilc/lowcode-types';
import * as React from 'react';
import { Button, Balloon, Dialog, Nav, Icon, Input, TreeSelect } from '@alifd/next';
import { Table } from 'antd';
import _ from 'lodash';
import { getTextReader } from '../../_utils/utils';
import './index.scss';

const { Item } = Nav;
const { Tooltip } = Balloon;

interface DataListSetterProps {
  // 当前值
  value: any;
  // 默认值
  defaultValue: any;
  // setter 唯一输出
  onChange: (val: any) => void;
  field: any;
  onClose: Function;
  // DataListSetter 特殊配置
}

const columns = [
  {
    title: '分类ID',
    dataIndex: 'id',
    width: 140,
  },
  {
    title: '分类名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '分类描述',
    dataIndex: 'description',
  },
];

type State = {
  treeData: any;
  openRowKeys: any;
  categoryIds: any;
  categoryData: any;
  scope: string;
};

export default class DataListSetter extends React.PureComponent<DataListSetterProps> {
  // 声明 Setter 的 title
  static displayName = 'DataListSetter';
  handleChange: (value: string) => void;
  onOpen: () => void;
  onOk: () => void;
  onClose: () => void;
  onRowChange: (selectedRowKeys: any) => void;
  state: State;

  t: (input: Text) => string;

  constructor(props: any) {
    super(props);
    this.t = getTextReader('zh-CN');

    const state: State = {
      scope: '',
      openRowKeys: [],
      treeData: [],
      categoryIds: [],
      categoryData: [],
    };

    this.state = state;

    this.handleChange = (value: string) => {
      this.setState({
        scope: value,
      });
    };

    this.onOk = () => {
      const { field, onChange } = this.props;
      const { node }: { node: IPublicModelNode & { propsData: any } } = field;

      const { scope, categoryIds } = this.state;

      const schema = node?.exportSchema(IPublicEnumTransformStage.Save);
      if (!scope) {
        const id = `article_list_${categoryIds.join('_')}`;
        schema.props._unsafe_MixedSetter____loop____select = 'VariableSetter';
        schema.loop = {
          type: 'JSExpression',
          value: `this.state.${id}`,
        };
      } else {
        this.recursionScope(schema.children, (element: any) => {
          const id = `article_list_${this.state.categoryIds.join('_')}`;
          element.props._unsafe_MixedSetter____loop____select = 'VariableSetter';
          // 绑定loop
          element.loop = {
            type: 'JSExpression',
            value: `this.state.${id}`,
          };
        });
      }

      node?.importSchema(schema);

      // 新增数据源数据

      // 1、获取当前作用域
      // 2、替换到数据源
      // 3、删除原来的绑定loop，修改为当前作用域下的loop
      onChange({
        title: '文章分类',
        type: 'portal/list',
        categoryIds: this.state.categoryIds,
        scope,
        schema,
      });

      this.onClose();

      // 增加文章列表
      const apiList = [
        {
          type: 'fetch',
          isInit: true,
          options: {
            params: {
              pageSize: '8',
            },
            method: 'GET',
            isCors: false,
            timeout: 5000,
            headers: {},
            uri: `/api/v1/portal/app/list?ids=${categoryIds}`,
          },
          id: `article_list_${categoryIds.join('_')}`,
          dataHandler: {
            type: 'JSFunction',
            value:
              'function(res) { \n  if(res?.code != 1) {\n    return []\n  }\n  let {data = []} = res.data\n  return data\n}',
          },
        },
      ];

      if (categoryIds?.length > 0) {
        (window as any).assignDataSource((oldList: any) => {
          // 删除原来的api
          let list = [...oldList];
          const { categoryIds } = value || {};
          if (categoryIds) {
            list = _.filter(oldList, (o) => {
              const id = `article_list_${categoryIds.join('_')}`;
              return o.id != id;
            });
          }
          return _.unionBy(apiList, list, 'id');
        });
      }
    };

    this.onClose = () => {
      if (this.props.onClose) {
        this.props.onClose();
      }
    };

    this.onRowChange = (selectedRowKeys) => {
      this.setState({
        categoryIds: selectedRowKeys,
      });
    };
  }

  recursionChildren(children: any) {
    const items: any = [];
    children?.forEach((item: any) => {
      if (item?.isContainer) {
        const data: any = {
          value: item.componentName,
          label: `${this.t(item.title)}(${item.componentName})`,
          children: [],
        };
        if (item?.children) {
          data.children = this.recursionChildren(item?.children);
        } else {
          data.isLeaf = true;
        }
        items.push(data);
      }
    });
    return items;
  }

  recursionCategoryData(children: any) {
    const result: any = [];
    children.forEach((item: any) => {
      if (item.children?.length > 0) {
        result.push(item.id);
        const cResult = this.recursionChildren(item.children);
        result.push(...cResult);
      }
    });
    return result;
  }

  recursionScope(children: any, callback: Function) {
    for (let index = 0; index < children?.length; index++) {
      const element: any = children[index];
      if (element.componentName === this.state.scope) {
        if (callback) {
          callback(element);
        }
        break;
      }
      if (element?.children?.length > 0) {
        this.recursionScope(element.children, callback);
      }
    }
    return children;
  }

  async componentDidMount() {
    const { field = {}, defaultValue, value } = this.props;
    const { services: { listCategory } = {} }: { services: any } = window as any;
    const { node }: { node: IPublicModelNode } = field;

    const { scope = '', categoryIds = [] } = value || defaultValue || {};

    if (node.isEmptyNode) {
      console.log('isEmptyNode node', node);
    }

    let categoryData = [];
    let openRowKeys = [];
    if (listCategory) {
      const res = await listCategory();
      if (res.code !== 1) {
        return;
      }
      categoryData = res.data;
      openRowKeys = this.recursionCategoryData(categoryData);
    }

    const treeData = this.recursionChildren(field.node?.children);

    this.setState({
      scope,
      categoryIds,
      treeData,
      categoryData,
      openRowKeys,
    });
  }

  renderChildren() {
    const { field, value: list } = this.props;
    const { node }: { node: IPublicModelNode & { propsData: any } } = field;
    let title = '';
    if (list) {
      title = `${this.t(list.title)}-${list.categoryIds?.join(',')}`;
    }

    if (node.isEmptyNode) {
      return '请先拖拽生成组件模板';
    }

    let render = null;
    if (title) {
      render = (
        <span style={{ cursor: 'pointer' }} onClick={this.onOpen}>
          已绑定{title}
        </span>
      );
    } else {
      render = <Button onClick={this.onOpen}>绑定数据</Button>;
    }

    return render;
  }

  render() {
    return (
      <>
        <Dialog
          v2
          style={
            {
              width: '960px',
              '--dialog-title-border-width': '1px',
              '--dialog-title-border-color': 'rgba(31, 56, 88, 0.1)',
              '--dialog-content-padding-top': 0,
              '--dialog-content-padding-left-right': 0,
              '--dialog-content-padding-right': 0,
            } as any
          }
          height="650px"
          title="选择列表"
          visible
          onOk={this.onOk}
          onClose={this.onClose}
          onCancel={this.onClose}
        >
          <div className="datalist-setter-dialog-root">
            <div className="datalist-setter-dialog-sidebar">
              <Nav embeddable defaultOpenAll defaultSelectedKeys={['category']}>
                <Item key="category">分类绑定</Item>
                <Item key="ids">指定文章</Item>
              </Nav>
            </div>
            <div className="datalist-setter-dialog-list-content">
              <div className="datalist-setter-dialog-list-content-header">
                <div className="datalist-setter-dialog-list-content-header-icon-wrap">
                  <div className="datalist-setter-dialog-list-content-header-icon">
                    <Icon size={'xs'} type="refresh" />
                    <span style={{ marginLeft: '4px' }}>刷新</span>
                  </div>
                </div>
                <div className="datalist-setter-dialog-list-content-header-extra">
                  <Input
                    innerAfter={<Icon type="search" size="xs" style={{ margin: 4 }} />}
                    placeholder="请输入分类名称"
                  />
                </div>
              </div>
              <h5 className="datalist-setter-dialog-list-content-title">基本设置</h5>
              <div className="datalist-setter-dialog-list-content-configure">
                <div className="datalist-setter-dialog-list-content-group">
                  <Tooltip v2 trigger={<span>作用域：</span>} align="t">
                    选择数据绑定的元素
                  </Tooltip>

                  <TreeSelect
                    value={this.state.scope}
                    autoWidth={false}
                    treeDefaultExpandAll
                    onChange={this.handleChange}
                    dataSource={this.state?.treeData}
                    style={{ marginRight: 8, minWidth: '100px' }}
                  />
                </div>
              </div>
              <div>
                <Table
                  primaryKey="id"
                  isTree
                  fixedHeader
                  maxBodyHeight={340}
                  // openRowKeys={this.state.openRowKeys}
                  onRowOpen={(openRowKeys) => {
                    this.setState({
                      openRowKeys,
                    });
                  }}
                  rowSelection={
                    {
                      // selectedRowKeys: this.state.categoryIds,
                      // onChange: this.onRowChange,
                    }
                  }
                  hasBorder={false}
                  columns={columns}
                  dataSource={this.state.categoryData}
                />
              </div>
            </div>
          </div>
        </Dialog>
        {/* {this.renderChildren()} */}
      </>
    );
  }
}
