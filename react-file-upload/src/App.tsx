import "./App.css";
import MultipleFileUploader from "./components/MultipleFileUploader";
import NotFound from "./components/NotFound";
import SingleFileUploader from "./components/SingleFileUploader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SingleFileUploader />} />
        <Route path="/multiple-files" element={<MultipleFileUploader />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
