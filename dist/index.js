// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./style.css";
// import App from "./App";

import { lazy } from "react";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
// // export { default as CustomButton } from "../src/CustomButton";
const CBVNLuckyDraw2024 = /*#__PURE__*/lazy(() => import("./Cbvn_2024").then(m => ({
  default: m.CBVNLuckyDraw2024
})));
export { CBVNLuckyDraw2024 };