import { BrowserRouter } from "react-router-dom";
import TheLayout from "./views/TheLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TheLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
