import "./App.css";
import { Route, Routes } from "react-router-dom";

import LayoutWeb from "./Layout/LayoutWeb";
import HomePage from "./Page/Homepage/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutWeb />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
