import { Route, Routes } from "react-router-dom";
import AlleMeetingPage from "./pages/AlleMeetings";
import NieuweMeetingPage from "./pages/NieuweMeeting";
import FavorietePage from "./pages/Favoriete";
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<AlleMeetingPage />} />

        <Route path="/nieuwe-meeting" element={<NieuweMeetingPage />} />

        <Route path="/favorieten" element={<FavorietePage />} />

      </Routes>
    </div>
  );
}

export default App;
