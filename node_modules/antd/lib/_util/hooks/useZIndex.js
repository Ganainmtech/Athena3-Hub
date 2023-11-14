"use strict";
"use client";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.containerBaseZIndexOffset = exports.consumerBaseZIndexOffset = void 0;
exports.useZIndex = useZIndex;
var _react = _interopRequireDefault(require("react"));
var _useToken = _interopRequireDefault(require("../../theme/useToken"));
var _zindexContext = _interopRequireDefault(require("../zindexContext"));
const containerBaseZIndexOffset = exports.containerBaseZIndexOffset = {
  Modal: 0,
  Drawer: 0,
  Popover: 70,
  Popconfirm: 70,
  Tooltip: 70,
  Tour: 70
};
const consumerBaseZIndexOffset = exports.consumerBaseZIndexOffset = {
  SelectLike: 50,
  Dropdown: 50,
  ColorPicker: 30,
  DatePicker: 50,
  Menu: 50
};
function isContainerType(type) {
  return type in containerBaseZIndexOffset;
}
function useZIndex(componentType, customZIndex) {
  const [, token] = (0, _useToken.default)();
  const parentZIndex = _react.default.useContext(_zindexContext.default);
  const isContainer = isContainerType(componentType);
  let zIndex = parentZIndex !== null && parentZIndex !== void 0 ? parentZIndex : 0;
  if (isContainer) {
    zIndex += token.zIndexPopupBase + containerBaseZIndexOffset[componentType];
  } else {
    zIndex += consumerBaseZIndexOffset[componentType];
  }
  return [parentZIndex === undefined ? customZIndex : zIndex, zIndex];
}