import React, { FC, CSSProperties, ReactNode, Ref } from 'react';

interface ListProps {
  title: string;
  /**
   * 自定义样式
   */
  className?: string;
  style?: CSSProperties;
  /**
   * 孩子节点
   */
  children?: ReactNode;
  forwardRef?: Ref<any>;
}

const List: FC<ListProps> = (props) => {
  const { children, forwardRef, className, style } = props;
  return (
    <div className={className} style={style} ref={forwardRef}>
      {children}
    </div>
  );
};

List.displayName = 'List';
export { List };
