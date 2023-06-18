import Home from "./components/Home";
import Quiz from "./components/Quiz";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Result from "./components/Result";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/quiz/result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
