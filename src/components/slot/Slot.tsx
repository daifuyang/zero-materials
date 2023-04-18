import React, { FC, ReactNode } from 'react';

interface SlotProps {
  /**
   * 孩子节点
   */
  children?: ReactNode;
}

const Slot: FC<SlotProps> = (props) => {
  const { children } = props;
  return <>{children}</>;
};

Slot.displayName = 'Slot';
export default Slot;
