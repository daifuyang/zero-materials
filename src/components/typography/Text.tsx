import React from 'react';
import cx from 'classnames';

interface TextProps {
  className?: string;
  ellipsis?: string | number;
  /**
   * 孩子节点
   */
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = (props) => {
  const { className, ellipsis, children, ...otherProps } = props;

  const cn = ellipsis ? `ellipsis-${ellipsis}` : '';

  return (
    <p
      className={cx({
        [cn]: !!cn,
        [className]: !!className,
      })}
      {...otherProps}
    >
      {children || '默认正文'}
    </p>
  );
};
Text.displayName = 'Text';
export default Text;
