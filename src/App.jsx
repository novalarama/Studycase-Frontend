import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Kegiatan from './pages/Kegiatan';
import Beranda from './pages/Beranda';
import Galeri from './pages/Galeri';
import Navbar from './pages/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
