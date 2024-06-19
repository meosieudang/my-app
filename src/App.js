import logo from "./logo.svg";
import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const CBVNLuckyDraw2024 = lazy(() =>
  import("./Cbvn_2024").then((m) => ({ default: m.CBVNLuckyDraw2024 }))
);
const Load = ({ View, ...props }) => (
  <Suspense fallback={<div></div>}>{View && <View {...props} />}</Suspense>
);
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Load View={CBVNLuckyDraw2024} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
