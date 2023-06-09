import React from 'react';

import cx from 'classnames';

interface ContainerProps {
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
  className?: string;
  absolute?: boolean;
  isDragging?: boolean;
  forwardRef?: React.Ref<any>;
  /**
   * 孩子节点
   */
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props: any) => {
  const {
    className,
    absolute,
    children,
    style = {},
    containerRef,
    isDragging,
  } = props;
  const _style = { ...style } || {};
  if (absolute) {
    _style.position = 'relative';
    if (!_style.height) {
      _style.height = '200px';
    }
  }
  return (
    <div
      style={_style}
      ref={containerRef}
      className={cx({
        'zero-ui-container': true,
        [className]: !!className,
      })}
      
    >
      <div
        style={{
          position: 'relative',
          height: _style.height,
          border: isDragging ? '1px solid blue' : undefined,
        }}
      >
        {children}
      </div>
    </div>
  );
};

Container.displayName = 'container';

Container.defaultProps = {
  className: '',
  children: null,
  style: {},
};

export default Container;
