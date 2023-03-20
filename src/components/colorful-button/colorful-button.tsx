import * as React from 'react';
import { createElement } from 'react';
import { Button } from '@alifd/next';
// import { ButtonProps } from '@alifd/next/types/button';
import './index.scss';

export interface ColorfulButtonProps {
  /**
   * 类型
   */
  type?: "primary" | "secondary" | "normal";
  style?: React.CSSProperties
}

const ColorfulButton: React.FC<ColorfulButtonProps> = function ColorfulButton({
  type = 'primary',
  ...otherProps
}) {
  const _otherProps = otherProps || {};
  return (
    <Button type={type} { ..._otherProps } >fusion button</Button>
  );
};

ColorfulButton.displayName = 'ColorfulButton';
export default ColorfulButton;


