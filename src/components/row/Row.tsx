import React, { FC, CSSProperties } from 'react';
import cx from 'classnames';

interface RowProps {
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  className?: string;
  /**
   * 孩子节点
   */
  children?: React.ReactNode;
  forwardRef?: React.Ref<any>;
}

const Row: FC<RowProps> = (props) => {
  const {
    style,
    children,
    className,
    forwardRef,
  } = props;
  return (
    <div ref={forwardRef} className={
      cx(
        `row`,
        { [className]: !!className }
      )
    } style={style} >
      {children}
    </div>
  );
};

Row.displayName = 'Row';

export default Row;
