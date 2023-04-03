import React, { FC, CSSProperties, ReactNode } from 'react';

interface ListProps {
  title: string;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  /**
   * 孩子节点
   */
  children?: ReactNode;
}

const List: FC<ListProps> = (props) => {
  const { children, ...otherProps } = props;
  return <div {...otherProps}>{children}</div>;
};

List.displayName = 'List';
export { List };
