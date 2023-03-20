import React, { createElement } from 'react';

import hoistNonReactStatic from 'hoist-non-react-statics';

import type { IPublicModelNode } from '@alilc/lowcode-types';

import { RGLContainer } from '../src';

const RGLContainerView = (props: { _leaf?: IPublicModelNode; [key: string]: any }) => {
  const { _leaf, ...others } = props;

  console.log('props',props)

  // hack engine for mousedown
  if (_leaf?.parent) {
     _leaf.parent.isRGLContainerNode = true;
  }

  const PLACEHOLDERKEY = 'placeholdkey';

  const onLayoutChange = (layout) => {
    // 过滤因为dragover增加了—dropping-elem__ 导致的数据更新；
    const isDragover = layout.some((item: any) => item.i === PLACEHOLDERKEY);
    if (!isDragover) {
      const saveLayout = layout.filter((item) => !!item.i);
      if (_leaf) _leaf.setPropValue('layout', saveLayout);
    }
  };

  return (
    <RGLContainer onLayoutChange={onLayoutChange} {...others} />
  );
};

hoistNonReactStatic(RGLContainerView, RGLContainer);

export { RGLContainerView as RGLContainer };
