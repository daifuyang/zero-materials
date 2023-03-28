import React from 'react';

interface TextProps {
   /**
   * 孩子节点
   */
   children?: React.ReactNode;
}

const Text: React.FC<TextProps> = (props) => {
  const {children,...otherProps} = props
  return <p {...otherProps}>{children || '默认正文'}</p>
};
export default Text;
