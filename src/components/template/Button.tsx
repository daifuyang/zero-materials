import React, { FC,CSSProperties } from 'react';

interface ButtonProps {
  title: string;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
}

const Button: FC<ButtonProps> = (props) => {
  const { title, style } = props;
  return (
    <button style={style} type="button" className="btn btn-primary">
      {title || '按钮'}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
