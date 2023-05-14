import React, { FC, CSSProperties } from 'react';

import cx from 'classnames';

interface TemplateProps {
  title: string;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  className?: string;
  forwardRef?: React.Ref<any>;
}

const Template: FC<TemplateProps> = (props) => {
  const { title, style, className, forwardRef } = props;
  return (
    <button
      ref={forwardRef}
      style={style}
      className={cx({
        'btn btn-primary': true,
        className: !!className,
      })}
      type="button"
    >
      {title || '按钮'}
    </button>
  );
};

Template.displayName = 'Button';

export default Template;
