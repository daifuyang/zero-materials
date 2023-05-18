import * as React from 'react';
import cx from 'classnames';
import { useAos } from '../../utils/utils';

interface ButtonProps {
  title: string;
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
  className?: string;
  styles?: string;
  forwardRef?: React.Ref<any>;
  aos?: any;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { title, style, styles, forwardRef, className } = props;
  const [dataAos] = useAos(props);
  return (
    <button
      {...dataAos}
      style={style}
      type="button"
      ref={forwardRef}
      className={cx({
        [`btn ${styles}`]: true,
        className: !!className,
      })}
    >
      {title || '按钮'}
    </button>
  );
};

Button.displayName = 'Button';

export { Button };
