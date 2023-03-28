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
}

const Row: FC<RowProps> = (props) => {
  const {
    style,
    children,
    className,
    ...otherProps
  } = props;
  return (
    <div className={
      cx(
        `row`,
        { [className]: !!className }
      )
    } style={style} {...otherProps}>
      {children}
    </div>
  );
};

Row.displayName = 'Row';

export default Row;
