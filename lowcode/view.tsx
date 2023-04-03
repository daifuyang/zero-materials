import React, { createElement, useRef, useState } from 'react';

import hoistNonReactStatic from 'hoist-non-react-statics';

import type { IPublicModelNode } from '@alilc/lowcode-types';

import { Container } from '../src';

function debounce(func, wait = 500) {
  let timeOut;
  return function () {
    const content = this;
    const arg = arguments;
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      func.apply(content, arg);
    }, wait);
  };
}

const AbslouteContainerView = (props: { _leaf?: IPublicModelNode; [key: string]: any }) => {
  const ref = useRef<any>();
  const { _leaf, ...others } = props;
  let move = false;

  const [isDraging, setDraging] = useState(false);

  const onDragstart = {
    canvasX: 0,
    canvasY: 0,
  };
  const onDragMove = {
    canvasX: 0,
    canvasY: 0,
  };

  let oldStyle: any = {};

  let selectedNode = null;

  if (ref.current && props.absolute) {
    const onStart = function (e) {
      ref.current?.addEventListener('pointermove', debounce(onMove, 10));
      onDragstart.canvasX = e.clientX;
      onDragstart.canvasY = e.clientY;

      // 获取选中的节点
      selectedNode = _leaf.document.selection.node;
      if (selectedNode && !selectedNode.isContainerNode) {
        oldStyle = selectedNode?.getPropValue('style') || {};
        move = true;
        setDraging(true);
      }
    };

    const onMove = function (e) {
      // 获取选中的节点
      if (selectedNode && !selectedNode.isContainerNode && move) {
        onDragMove.canvasX = e.clientX;
        onDragMove.canvasY = e.clientY;
        // eslint-disable-next-line prefer-const
        let { left: oldX = 0, top: oldY = 0, right: oldRight, bottom: oldBottom } = oldStyle;

        // 获取容器的高度
        const { clientWidth: parentWidth = 0, clientHeight: parentHeight = 0 } = ref.current;

        const element = selectedNode.getDOMNode();
        const { clientWidth: eleWidth = 0, clientHeight: eleHeight = 0 } = element;

        if (oldRight === 0) {
          oldX = parentWidth - eleWidth;
        }

        if (oldBottom === 0) {
          oldY = parentHeight - eleHeight;
        }

        // 移动的趋势

        // 大于0为往右位移，小于0为往左位移
        const distanceX: number = onDragMove.canvasX - onDragstart.canvasX;

        // 大于0往下位移，小于0往上位移
        const distanceY: number = onDragMove.canvasY - onDragstart.canvasY;

        // 新位置 = left + 移动趋势
        const newLeft = Number(oldX) + distanceX;

        // 新位置 = top + 移动趋势
        const newTop = Number(oldY) + distanceY;

        const style: any = {...oldStyle};
        // 往右
        if (distanceX >= 0) {
          if (newLeft + eleWidth < parentWidth) {
            style.left = newLeft;
            style.right = undefined;
          } else {
            style.left = undefined;
            style.right = 0;
          }
        } else {
          // 往左
          // eslint-disable-next-line no-lonely-if
          if (newLeft >= 0) {
            style.left = newLeft;
            style.right = undefined;
          } else {
            style.left = 0;
          }
        }

        if (distanceY >= 0) {
          if (newTop + eleHeight < parentHeight) {
            style.top = newTop;
            style.bottom = undefined;
          } else {
            style.top = undefined;
            style.bottom = 0;
          }
        } else {
          // eslint-disable-next-line no-lonely-if
          if (newTop >= 0) {
            style.top = newTop;
            style.bottom = undefined;
          } else {
            style.top = 0;
          }
        }

        selectedNode.setPropValue('style', { position: 'absolute', ...style });
      }
    };

    const onEnd = function () {
      ref.current?.removeEventListener('pointermove', debounce(onMove, 10));
      selectedNode = null;
      move = false;
      oldStyle = {};
      setDraging(false);
    };

    ref.current?.addEventListener('pointerdown', debounce(onStart, 10));
    ref.current?.addEventListener('pointerup', debounce(onEnd, 10));
  }

  return <Container isDraging={isDraging} containerRef={ref} {...others} />;
};

hoistNonReactStatic(AbslouteContainerView, Container);


export { AbslouteContainerView as Container };
