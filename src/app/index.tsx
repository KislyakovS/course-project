import { Suspense, lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";

const AboutPage = lazy(() => import('@/pages/About'));
const MainPage = lazy(() => import('@/pages/Main'));

export const App = () => {
  return (
    <>
      <Link to="/main">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<p>Loading....</p>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Suspense>
    </>
  )
};
