import React from 'react';
import cx from 'classnames';
import { useAos } from '../../utils/utils';

interface SpanProps {
  /**
   * 孩子节点
   */
  children?: React.ReactNode;
  forwardRef?: React.Ref<any>;
  style?: React.CSSProperties;
  ellipsis?: string | number;
  className?: string;
  aos?: any;
  depth?: string;
}

const Span: React.FC<SpanProps> = (props) => {
  const { children, forwardRef, style, ellipsis, depth = undefined, className } = props;
  const cn = ellipsis ? `ellipsis-${ellipsis}` : '';
  const [dataAos] = useAos(props);

  return (
    <span
      {...dataAos}
      data-depth={depth}
      style={style}
      className={cx({
        [cn]: !!cn,
        [className]: !!className,
      })}
      ref={forwardRef}
    >
      {children}
    </span>
  );
};

Span.displayName = 'Span';
export default Span;
