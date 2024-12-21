import Sidebar from "./Component/public/Sidebers.js";
import "./App.css";
import MainNavBer from "./Component/public/MainNavBer.js";

function App() {
  return (
    <div className="main-item">
      <MainNavBer />
      <Sidebar />
    </div>
  );
}

export default App;
