import React, { FC, ReactNode } from 'react';

interface DivProps {
  /**
   * 孩子节点
   */
  children?: ReactNode;
}

const Div: FC<DivProps> = (props) => {
  const { children, ...otherProps } = props;
  return <div {...otherProps}>{children}</div>;
};

Div.displayName = 'Div';
export { Div };



