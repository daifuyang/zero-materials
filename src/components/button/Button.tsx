import React, { FC, CSSProperties, Ref } from 'react';
import cx from 'classnames';
import { useAos } from '@/utils/utils';
interface ButtonProps {
  title: string;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  className?: string;
  styles?: string;
  forwardRef?: Ref<any>;
  aos?: any;
}

const Button: FC<ButtonProps> = (props) => {
  const { title, style, styles, forwardRef, aos, className } = props;
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
