import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useLocale } from "./hooks/useLocale";
import CurriculumPage from './pages/CurriculumPage';

function App() {
  const { getLocale } = useLocale();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/:locale" Component={CurriculumPage}  />
          <Route
            path="*"
            element={<Navigate to={`/${getLocale()}`} replace />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
