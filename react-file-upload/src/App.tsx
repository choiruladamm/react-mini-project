import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import MultipleFileUploader from "./components/MultipleFileUploader";
import SingleFileUploader from "./components/SingleFileUploader";
import UploadcareUploader from "./components/UploadcareUploader";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SingleFileUploader />} />
        <Route path="/multiple-files" element={<MultipleFileUploader />} />
        <Route path="/uploadcare" element={<UploadcareUploader />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
