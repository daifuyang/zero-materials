import { IPublicModelNode, IPublicEnumTransformStage } from '@alilc/lowcode-types';
import * as React from 'react';
import { Button } from '@alifd/next';
import { getTextReader } from '../../_utils/utils';
import Setter from './dataListSetter'

interface DataListSetterProps {
  // 当前值
  value: any;
  // 默认值
  defaultValue: any;
  // setter 唯一输出
  onChange: (val: any) => void;
  field: any;
  // DataListSetter 特殊配置
}

type State = {
  visible: boolean;
};

export default class DataListSetter extends React.PureComponent<DataListSetterProps> {
  // 声明 Setter 的 title
  static displayName = 'DataListSetter';
  state: State;
  onOpen: () => void;
  onClose: () => void;
  t: (input: Text) => string;
  constructor(props: any) {
    super(props);
    this.t = getTextReader('zh-CN');

    const state: State = {
      visible: false,
    };

    this.state = state;

    this.onOpen = () => {
      this.setState({
        visible: true,
      });
    };

    this.onClose = () => {
      this.setState(state);
    };
  }
  

  componentDidMount() {
   
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
      {this.state.visible && <Setter onClose={this.onClose} {...this.props} />}
      {this.renderChildren()}
      </>
    );
  }
}
