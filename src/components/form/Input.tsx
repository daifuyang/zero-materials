import React, { FC, ReactNode, useRef } from 'react';

interface DivProps {
  /**
   * 孩子节点
   */
  children?: ReactNode;
}

const Input = (props: any) => {
  const { children, ...otherProps } = props;

  const ref = useRef()

  return (
    <div className="mb-3">
      <label htmlFor={ref.current} className="form-label">
        表单项
      </label>
      <input
        ref={ref}
        type="email"
        className="form-control"
        placeholder=""
      />
    </div>
  );
};
Input.displayName = 'Input';
export default Input;
