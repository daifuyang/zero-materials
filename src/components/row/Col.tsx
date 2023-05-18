import React from 'react';
import cx from 'classnames';

interface ColProps {
  style?: React.CSSProperties;
  className?: string;
  lg?: Number;
  md?: Number;
  xs?: Number;
  /**
   * 孩子节点
   */
  children?: React.ReactNode;
  forwardRef?: React.Ref<any>;
}

const Col: React.FC<ColProps> = (props) => {
  const { children, lg, md, xs, style, className, forwardRef } = props;
  return (
    <div
      ref={forwardRef}
      style={style}
      className={cx({
        [`col-${xs}`]: xs,
        [`col-md-${md}`]: md,
        [`col-xl-${lg}`]: lg,
        [className]: !!className,
      })}
    >
      {children}
    </div>
  );
};

Col.displayName = 'Col';

export default Col;
