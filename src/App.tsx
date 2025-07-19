import { Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormHome } from "./components/FormHome/FormHome";
import { BirthdayCard } from "./components/BirthdayCard/BirthdayCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormHome />} />
      <Route path="/card" element={<BirthdayCard />} />
    </Routes>
  );
}

export default App;
