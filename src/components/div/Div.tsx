import { useAos } from '@/utils/utils';
import React, { FC, ReactNode, Ref } from 'react';

interface DivProps {
  /**
   * 孩子节点
   */
  children?: ReactNode;
  forwardRef?: Ref<any>;
  style?: React.CSSProperties;
  className?: string;
  aos?: any;
}

const Div: FC<DivProps> = (props) => {
  const { children, forwardRef, style, className } = props;
  const [dataAos] = useAos(props);
  return (
    <div {...dataAos} style={style} className={className} ref={forwardRef}>
      {children}
    </div>
  );
};

Div.displayName = 'Div';
export { Div };
