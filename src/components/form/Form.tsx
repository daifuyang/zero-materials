import React, { FC, ReactNode } from 'react';

interface DivProps {
  /**
   * 孩子节点
   */
  children?: ReactNode;
}

const Form = (props: any) => {
  const { children, ...otherProps } = props;
  return <form {...otherProps}>{children}</form>;
};

Form.displayName = 'Form';
export default Form;
