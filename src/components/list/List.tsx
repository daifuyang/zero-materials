import * as React from 'react';

interface ListProps {
  /**
   * 自定义样式
   */
  className?: string;
  style?: React.CSSProperties;
  /**
   * 孩子节点
   */
  children?: React.ReactNode;
  forwardRef?: React.Ref<any>;
}

const List: React.FC<ListProps> = (props) => {
  const { children, forwardRef, className, style } = props;
  return (
    <div className={className} style={style} ref={forwardRef}>
      {children}
    </div>
  );
};

List.displayName = 'List';
export { List };
