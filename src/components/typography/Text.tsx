import React from 'react';
import cx from 'classnames';
import { useAos } from '@/utils/utils';

interface TextProps {
  className?: string;
  style: React.CSSProperties;
  ellipsis?: string | number;
  /**
   * 孩子节点
   */
  children?: React.ReactNode;
  forwardRef?: React.Ref<any>;
  aos?: any;
}

const Text: React.FC<TextProps> = (props) => {
  const { style, className, ellipsis, children, forwardRef } = props;
  const [dataAos] = useAos(props);
  const cn = ellipsis ? `ellipsis-${ellipsis}` : '';

  return (
    <p
      {...dataAos}
      ref={forwardRef}
      className={cx({
        [cn]: !!cn,
        [className]: !!className,
      })}
      style={style}
    >
      {children || '默认正文'}
    </p>
  );
};
Text.displayName = 'Text';
export default Text;
