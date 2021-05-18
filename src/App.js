import './App.css';
import Sidebar from "./Sidebar"
import Header from './Header';
import RecommendedVideo from "./RecommendedVideo"

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideo />
      </div>
    </div>
  );
}

export default App;
