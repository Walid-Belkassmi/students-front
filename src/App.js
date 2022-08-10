import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Success from "./pages/Success";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/success/:name" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
