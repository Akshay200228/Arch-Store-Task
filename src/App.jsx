import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import Home from'./pages/Home';
import { CharacterDetail, CharacterShow } from './components/Charactes';
import { EpisodeList, EpisodeDetail } from './components/Episodes';
import Navbar from'./components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <div className="w-full text-white bg-[#252525]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/characters" element={<CharacterShow />} />
          <Route exact path="/characters/:id" element={<CharacterDetail />} />
          <Route exact path="/episodeList" element={<EpisodeList />} />
          <Route exact path="/episode/:id" element={<EpisodeDetail />} />
        </Routes>
      </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
