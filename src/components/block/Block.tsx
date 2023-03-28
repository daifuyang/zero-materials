import React, { FC, CSSProperties, ReactNode } from 'react';

interface BlockProps {
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

const Block: FC<BlockProps> = (props) => {
  const { children, ...otherProps } = props;
  return <div {...otherProps}>{children}</div>;
};

Block.displayName = 'Block';
export { Block };
