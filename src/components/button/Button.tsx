import React, { FC, CSSProperties } from 'react';

interface ButtonProps {
  title: string;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  styles?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { title, style, styles } = props;
  return (
    <button style={style} type="button" className={`btn ${styles}`}>
      {title || '按钮'}
    </button>
  );
};

Button.displayName = 'Button';

export { Button };
