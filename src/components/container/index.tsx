import React, {
  forwardRef,
  CSSProperties,
  ForwardRefRenderFunction,
  ReactNode,
} from 'react';

import cx from 'classnames';

interface ContainerProps {
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  className?: string;
  absolute?: boolean;
  isDraging?: boolean;
  /**
   * 孩子节点
   */
  children?: ReactNode;
}

const Container: ForwardRefRenderFunction<HTMLDivElement, ContainerProps> = (props, ref) => {
  const { className, absolute, children, style = {}, isDraging } = props;
  const _style = {...style} || {};
  if (absolute) {
    _style.position = 'relative';
    if (!_style.height) {
      _style.height = '200px';
    }
  }
  return (
    <div
      style={_style}
      ref={ref}
      className={cx({
        'zero-ui-container': true,
        [className]: !!className,
      })}
    >
      <div
        style={{
          position: 'relative',
          height: _style.height,
          border: isDraging ? '1px solid blue' : '',
        }}
      >
        {children}
      </div>
    </div>
  );
};

const RefContainer = forwardRef(Container);

RefContainer.displayName = 'container';

RefContainer.defaultProps = {
  className: '',
  children: null,
  style: {},
};

export default RefContainer;
