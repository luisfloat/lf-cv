import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CurriculumPage from './pages/CurriculumPage';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/:locale" Component={CurriculumPage} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
