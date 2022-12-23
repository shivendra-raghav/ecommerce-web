// import { Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
// import Home from './pages/Home';
// import About from './pages/About';
import ContentContainer from './components/ContentContainer';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <ContentContainer />
    </div>
  );
}

export default App;
