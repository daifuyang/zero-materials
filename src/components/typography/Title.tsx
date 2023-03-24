import React from 'react';

const TITLE_ELE_LIST = [1, 2, 3, 4, 5] as const;

interface TitleProps {
  level?: typeof TITLE_ELE_LIST[number];
}

const Title: React.FC<TitleProps> = (props) => {
  const { level = 1, ...restProps } = props;
  let Component: keyof JSX.IntrinsicElements;

  if (TITLE_ELE_LIST.includes(level)) {
    Component = `h${level}`;
  } else {
    Component = 'h1';
  }

  return <Component {...restProps} />;
};
export default Title;
