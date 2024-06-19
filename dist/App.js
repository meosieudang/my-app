import logo from "./logo.svg";
import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const CBVNLuckyDraw2024 = /*#__PURE__*/lazy(() => import("./Cbvn_2024").then(m => ({
  default: m.CBVNLuckyDraw2024
})));
const Load = ({
  View,
  ...props
}) => /*#__PURE__*/React.createElement(Suspense, {
  fallback: /*#__PURE__*/React.createElement("div", null)
}, View && /*#__PURE__*/React.createElement(View, props));
function App() {
  return /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Load, {
      View: CBVNLuckyDraw2024
    })
  })));
}
export default App;