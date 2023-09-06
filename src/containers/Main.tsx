import { Routes, Route } from "react-router-dom";
import elementsController from "../controller/elementsController";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<elementsController.Home />} />
      <Route path="/settings" element={<elementsController.Settings />} />
    </Routes>
  );
};

export default Main;
