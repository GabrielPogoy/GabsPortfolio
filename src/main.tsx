import "@/styles/global.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import GuestLayout from "@/pages/guest/layout";

import MyHomePage from "@/pages/guest/home";
import MyAboutPage from "@/pages/guest/about";
import  MySkillPage from "@/pages/guest/skill"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      {/* Guest Pages */}
      <Route element={<GuestLayout />}>
        <Route path="/" element={<MyHomePage />} />
        <Route path="/about" element={<MyAboutPage />} />
        <Route path="/skills" element={<MySkillPage />} />
      </Route>

      {/* Dashboard Pages */}
    </Routes>
  </BrowserRouter>,
)