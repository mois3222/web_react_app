import { Routes, Route } from "react-router-dom";
import elementsController from "../controller/elementsController";

const Main = () => {
  return (
    <main className="Main">
      <Routes>
        <Route path="/" element={<elementsController.Home />} />
        <Route path="/settings" element={<elementsController.Settings />} />
        <Route
          path="/settings/home"
          element={<elementsController.HomeSettings />}
        />
      </Routes>
    </main>
  );
};

export default Main;
