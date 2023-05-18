import { useAos } from '../../utils/utils';
import React from 'react';

const TITLE_ELE_LIST = [1, 2, 3, 4, 5] as const;

interface TitleProps {
  level?: typeof TITLE_ELE_LIST[number];
  forwardRef: React.Ref<any>;
  style: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  __designMode?: string;
  aos?: any;
}

const Title: React.FC<TitleProps> = (props) => {
  const { level = 1, forwardRef, style, className, children } = props;
  const [dataAos] = useAos(props);

  let Component: keyof JSX.IntrinsicElements;

  if (TITLE_ELE_LIST.includes(level)) {
    Component = `h${level}`;
  } else {
    Component = 'h1';
  }

  return (
    <Component {...dataAos} ref={forwardRef} style={style} className={className}>
      {children}
    </Component>
  );
};
Title.displayName = 'Title';
export default Title;
