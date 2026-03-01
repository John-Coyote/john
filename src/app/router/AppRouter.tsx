import { Routes, Route, Navigate } from "react-router-dom";
import {YourWorkPage} from "@pages/YourWorkPage";
import {ProjectsPage} from "@pages/ProjectsPage";
import {FiltersPage} from "@pages/FiltersPage";
import {DashboardsPage} from "@pages/DashboardsPage";
import {NotFoundPage} from "@pages/NotFoundPage";
import {Layout} from "@app/layout/Layout.tsx";

export const AppRouter = () => (
  <Routes>
    <Route element={<Layout />}>

      <Route index element={<Navigate to="/your-work" replace />} />

      <Route path="/your-work" element={<YourWorkPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/filters" element={<FiltersPage />} />
      <Route path="/dashboards" element={<DashboardsPage />} />


      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);