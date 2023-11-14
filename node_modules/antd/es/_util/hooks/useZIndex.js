"use client";

import React from 'react';
import useToken from '../../theme/useToken';
import zIndexContext from '../zindexContext';
export const containerBaseZIndexOffset = {
  Modal: 0,
  Drawer: 0,
  Popover: 70,
  Popconfirm: 70,
  Tooltip: 70,
  Tour: 70
};
export const consumerBaseZIndexOffset = {
  SelectLike: 50,
  Dropdown: 50,
  ColorPicker: 30,
  DatePicker: 50,
  Menu: 50
};
function isContainerType(type) {
  return type in containerBaseZIndexOffset;
}
export function useZIndex(componentType, customZIndex) {
  const [, token] = useToken();
  const parentZIndex = React.useContext(zIndexContext);
  const isContainer = isContainerType(componentType);
  let zIndex = parentZIndex !== null && parentZIndex !== void 0 ? parentZIndex : 0;
  if (isContainer) {
    zIndex += token.zIndexPopupBase + containerBaseZIndexOffset[componentType];
  } else {
    zIndex += consumerBaseZIndexOffset[componentType];
  }
  return [parentZIndex === undefined ? customZIndex : zIndex, zIndex];
}