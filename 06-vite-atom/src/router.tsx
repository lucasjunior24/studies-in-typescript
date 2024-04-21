import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Test } from "./pages/Test";
import { Doctor } from "./pages/Doctor";
import { Doctors } from "./pages/Doctors";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/test" element={<Test />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/doctors" element={<Doctors />} />
      </Route>
    </Routes>
  );
}
